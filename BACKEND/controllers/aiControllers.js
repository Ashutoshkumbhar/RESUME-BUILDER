/**
 * AI Controller to handle requests to various AI providers (Anthropic, Groq, etc.)
 * This keeps API keys secure on the backend and avoids CORS issues.
 * Supports optional API key passing from frontend for user-provided keys.
 */

const getAIResponse = async (req, res) => {
  try {
    const { messages, system, model, provider, apiKey } = req.body;

    // Default to Anthropic if not specified, or use Groq if hinted
    const aiProvider = provider || (model && model.includes('llama') ? 'groq' : 'anthropic');

    if (aiProvider === 'anthropic') {
      const finalKey = apiKey || process.env.ANTHROPIC_API_KEY;
      if (!finalKey) {
        return res.status(500).json({ error: "Anthropic API key not configured on server and no user key provided." });
      }

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": finalKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: model || "claude-3-5-sonnet-20240620",
          max_tokens: 1000,
          system: system,
          messages: messages,
        }),
      });

      const data = await response.json();
      if (!response.ok) return res.status(response.status).json(data);
      return res.status(200).json(data);
    } 
    
    if (aiProvider === 'groq') {
      const finalKey = apiKey || process.env.GROQ_API_KEY;
      if (!finalKey) {
        return res.status(500).json({ error: "Groq API key not configured on server and no user key provided." });
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${finalKey}`,
        },
        body: JSON.stringify({
          model: model || "llama-3.3-70b-versatile",
          messages: system ? [{ role: "system", content: system }, ...messages] : messages,
          temperature: 0.2,
        }),
      });

      const data = await response.json();
      if (!response.ok) return res.status(response.status).json(data);
      return res.status(200).json(data);
    }

    res.status(400).json({ error: "Unsupported AI provider." });
  } catch (error) {
    console.error("AI Proxy Error:", error);
    res.status(500).json({ error: "Internal server error while communicating with AI." });
  }
};

module.exports = { getAIResponse };
