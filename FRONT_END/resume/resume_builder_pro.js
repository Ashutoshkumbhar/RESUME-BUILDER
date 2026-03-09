// ── TAB SWITCHING ─────────────────────────
function switchTab(name, btn) {
  document
    .querySelectorAll(".form-section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("tab-" + name).classList.add("active");
  btn.classList.add("active");
}

// ── COMPLETION METER ──────────────────────
const trackFields = [
  "inputname",
  "inputEmail",
  "inputPhone",
  "inputLocation",
  "inputSummary",
  "inputEducation",
  "inputexperience",
  "inputproject",
  "inputskill",
];

function updateCompletion() {
  const filled = trackFields.filter((id) =>
    document.getElementById(id)?.value.trim(),
  ).length;
  const pct = Math.round((filled / trackFields.length) * 100);
  document.getElementById("completionText").textContent = pct + "% filled";
  document.getElementById("completionRing").style.background =
    `conic-gradient(var(--primary) ${pct}%, #e0e7ff ${pct}%)`;
}

// ── CHAR COUNT ────────────────────────────
function charCount(el, id, max) {
  const len = el.value.length;
  const out = document.getElementById(id);
  out.textContent = len + " / " + max;
  out.className =
    "char-count" +
    (len > max * 0.9 ? " warning" : "") +
    (len >= max ? " over" : "");
}

// ── LIVE SKILL TAGS ───────────────────────
function renderSkillTags() {
  const val = document.getElementById("inputskill").value;
  const preview = document.getElementById("skillTagPreview");
  const tags = val.split(",").filter((s) => s.trim());
  preview.innerHTML = tags
    .map(
      (s) =>
        `<span style="background:#eef2ff;color:var(--primary);border:1px solid #c7d2fe;
        padding:3px 10px;border-radius:99px;font-size:0.72rem;font-weight:600;
        animation:fadeTag .2s ease">${s.trim()}</span>`,
    )
    .join("");
}

// ── TEMPLATE DOTS ─────────────────────────
function setTemplate(id, idx) {
  document.getElementById("templateSelector").value = id;
  document
    .querySelectorAll(".template-dot")
    .forEach((d, i) => d.classList.toggle("active", i === idx));
  showSelectedTemplate();
}

const selector = document.getElementById("templateSelector");
selector.addEventListener("change", function () {
  const idx = [
    "template1",
    "template2",
    "template3",
    "template4",
    "template5",
  ].indexOf(this.value);
  document
    .querySelectorAll(".template-dot")
    .forEach((d, i) => d.classList.toggle("active", i === idx));
  showSelectedTemplate();
});

function showSelectedTemplate() {
  const selected = selector.value;
  document.querySelectorAll(".template").forEach((t) => {
    t.classList.add("hidden");
    t.classList.remove("animating");
  });
  const el = document.getElementById(selected);
  el.classList.remove("hidden");
  void el.offsetWidth;
  el.classList.add("animating");
}

// ── GENERATE RESUME ───────────────────────
function getFormData() {
  return {
    name: document.getElementById("inputname").value,
    email: document.getElementById("inputEmail").value || "",
    phone: document.getElementById("inputPhone").value || "",
    location: document.getElementById("inputLocation").value || "",
    linkedin: document.getElementById("inputLinkedin").value || "",
    github: document.getElementById("inputGithub").value || "",
    summary: document.getElementById("inputSummary").value || "",
    education: document.getElementById("inputEducation").value || "",
    achievements: document.getElementById("inputAchievements").value || "",
    skills: document.getElementById("inputskill").value || "",
    languages: document.getElementById("inputLanguages").value || "",
    projects: document.getElementById("inputproject").value || "",
    experience: document.getElementById("inputexperience").value || "",
  };
}

function buildHTML(d) {
  const skillList = d.skills
    .split(",")
    .filter((s) => s.trim())
    .map((s) => `<li>${s.trim()}</li>`)
    .join("");
  return `
      <div class="resume-header">
        <h1>${d.name}</h1>
        <p>${d.email}${d.phone ? " | " + d.phone : ""}${d.location ? " | " + d.location : ""}<br>
        ${d.linkedin ? `<a href="${d.linkedin}" target="_blank">LinkedIn</a>` : ""}
        ${d.github ? ` | <a href="${d.github}" target="_blank">GitHub</a>` : ""}</p>
      </div>
      ${d.summary ? `<div class="section"><h2>Professional Summary</h2><p>${d.summary}</p></div>` : ""}
      ${d.experience ? `<div class="section"><h2>Experience</h2><p style="white-space:pre-line">${d.experience}</p></div>` : ""}
      ${d.education ? `<div class="section"><h2>Education</h2><p>${d.education}</p></div>` : ""}
      ${d.skills ? `<div class="section"><h2>Technical Skills</h2><ul>${skillList}</ul></div>` : ""}
      ${d.languages ? `<div class="section"><h2>Languages</h2><p>${d.languages}</p></div>` : ""}
      ${d.projects ? `<div class="section"><h2>Projects</h2><p style="white-space:pre-line">${d.projects}</p></div>` : ""}
      ${d.achievements ? `<div class="section"><h2>Achievements</h2><p>${d.achievements}</p></div>` : ""}
    `;
}

function generateResume(e) {
  if (e) e.preventDefault();
  const btn = document.querySelector(".generate-btn");
  btn.classList.add("loading");
  setTimeout(() => {
    const html = buildHTML(getFormData());
    document.querySelectorAll(".template").forEach((t) => {
      t.innerHTML = html;
    });
    showSelectedTemplate();
    btn.classList.remove("loading");
    showToast("✅ Resume generated!");
  }, 600);
}

// ── PDF ───────────────────────────────────
function downloadPDF() {
  const active = document.querySelector(".template:not(.hidden)");
  if (active.querySelector(".empty-state")) {
    showToast("⚠️ Generate your resume first!");
    return;
  }
  html2pdf()
    .set({
      margin: 0.5,
      filename: "My_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    })
    .from(active)
    .save();
  showToast("⬇ Downloading PDF...");
}

// ── GROQ AI CHAT ──────────────────────────
let GROQ_API_KEY = localStorage.getItem("resume_groq_key") || "";
let chatHistory = [];

if (GROQ_API_KEY) document.getElementById("apiBanner").style.display = "none";

function saveApiKey() {
  const key = document.getElementById("apiKeyInput").value.trim();
  if (!key.startsWith("gsk_")) {
    alert("Please enter a valid Groq API key (starts with gsk_)");
    return;
  }
  GROQ_API_KEY = key;
  localStorage.setItem("resume_groq_key", key);
  document.getElementById("apiBanner").style.display = "none";
  addMessage(
    "ai",
    "✅ Key saved! I'm powered by <strong>Llama 3</strong> and ready to help. Ask me anything!",
  );
}

function getResumeContext() {
  const d = getFormData();
  return `Resume data:\n- Name: ${d.name || "Empty"}\n- Email: ${d.email || "Empty"}\n- Phone: ${d.phone || "Empty"}\n- Location: ${d.location || "Empty"}\n- Summary: ${d.summary || "Empty"}\n- Education: ${d.education || "Empty"}\n- Experience: ${d.experience || "Empty"}\n- Skills: ${d.skills || "Empty"}\n- Projects: ${d.projects || "Empty"}\n- Achievements: ${d.achievements || "Empty"}`;
}

function addMessage(role, html) {
  const msgs = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.innerHTML = `<div class="msg-avatar">${role === "user" ? "You" : "🤖"}</div><div class="msg-bubble">${html}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addTypingIndicator() {
  const msgs = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "message ai";
  div.id = "typingMsg";
  div.innerHTML = `<div class="msg-avatar">🤖</div><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTypingIndicator() {
  document.getElementById("typingMsg")?.remove();
}

async function sendMessage(overrideText) {
  if (!GROQ_API_KEY) {
    addMessage(
      "ai",
      "⚠️ Please enter your <strong>Groq API key</strong> above.",
    );
    return;
  }
  const input = document.getElementById("chatInput");
  const text = overrideText || input.value.trim();
  if (!text) return;
  input.value = "";
  input.style.height = "auto";
  document.getElementById("sendBtn").disabled = true;
  addMessage("user", text);
  chatHistory.push({ role: "user", content: text });
  addTypingIndicator();

  const system = `You are a professional resume writing assistant. Help users improve their resumes by fixing grammar, improving phrasing, suggesting skills, and giving actionable feedback. Be concise and friendly. Always show improved versions when correcting text.\n\n${getResumeContext()}`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1000,
        temperature: 0.7,
        messages: [{ role: "system", content: system }, ...chatHistory],
      }),
    });
    const data = await res.json();
    removeTypingIndicator();
    if (data.error) {
      addMessage("ai", `❌ Groq Error: ${data.error.message}`);
      chatHistory.pop();
    } else {
      const reply = data.choices[0].message.content;
      chatHistory.push({ role: "assistant", content: reply });
      addMessage(
        "ai",
        reply
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>")
          .replace(/`(.*?)`/g, "<code>$1</code>")
          .replace(/\n/g, "<br>"),
      );
    }
  } catch (err) {
    removeTypingIndicator();
    addMessage("ai", "❌ Connection error. Check your internet and API key.");
    chatHistory.pop();
  }
  document.getElementById("sendBtn").disabled = false;
}

function quickAction(text) {
  sendMessage(text);
}

function handleChatKey(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 110) + "px";
}

// ── TOAST ─────────────────────────────────
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

showSelectedTemplate();
