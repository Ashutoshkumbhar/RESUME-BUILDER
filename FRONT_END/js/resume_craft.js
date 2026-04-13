let currentTemplate = 1;

function switchTemplate(n) {
  // Hide all
  document
    .querySelectorAll(".resume-preview")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".tpl-btn")
    .forEach((el) => el.classList.remove("active"));
  // Show selected
  document.getElementById("tpl" + n).classList.add("active");
  document.querySelectorAll(".tpl-btn")[n - 1].classList.add("active");
  currentTemplate = n;
  const photoGroup = document.getElementById("photoGroup");
  if (photoGroup) photoGroup.style.display = n === 5 ? "flex" : "none";
  updateResume();
}

function previewPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const circle = document.getElementById("t5-photo-circle");
      if (circle) {
        circle.style.backgroundImage = "url(" + e.target.result + ")";
        circle.innerHTML = "";
      }
    };
    reader.readAsDataURL(file);
  }
}

function v(id) {
  return document.getElementById(id) ? document.getElementById(id).value : "";
}

function setText(id, val, fallback) {
  const el = document.getElementById(id);
  if (el) el.innerText = val || fallback || "";
}

function parseExperience(raw) {
  // Parse raw experience text into structured blocks
  // Each block: line1 = "Role | Company | Date", followed by bullets
  const blocks = [];
  const lines = raw.split("\n");
  let current = null;
  for (const line of lines) {
    if (!line.trim()) continue;
    if (
      !line.startsWith("•") &&
      !line.startsWith("-") &&
      !line.startsWith(" ")
    ) {
      if (current) blocks.push(current);
      current = { header: line.trim(), bullets: [] };
    } else {
      if (!current) current = { header: "", bullets: [] };
      current.bullets.push(line.trim());
    }
  }
  if (current) blocks.push(current);
  return blocks;
}

let updateTimeout;
function updateResume() {
  clearTimeout(updateTimeout);
  updateTimeout = setTimeout(renderResume, 150);
}

function renderResume() {
  const name = v("inpName");
  const title = v("inpTitle");
  const email = v("inpEmail");
  const phone = v("inpPhone");
  const location = v("inpLocation");
  const linkedin = v("inpLinkedin");
  const github = v("inpGithub");
  const summary = v("inpSummary");
  const skills = v("inpSkills");
  const experience = v("inpExperience");
  const projects = v("inpProjects");
  const education = v("inpEducation");

  // ===== TEMPLATE 1 =====
  setText("t1-name", name ? name.toUpperCase() : "JANE DOE");
  setText("t1-email", email, "jane@example.com");
  setText("t1-phone", phone, "(555) 123-4567");
  setText("t1-location", location, "San Francisco, CA");
  const t1li = document.getElementById("t1-linkedin");
  const t1gh = document.getElementById("t1-github");
  if (t1li) {
    t1li.innerText = linkedin
      ? linkedin.replace(/^https?:\/\//, "")
      : "linkedin.com/in/janedoe";
    t1li.href = linkedin
      ? linkedin.startsWith("http")
        ? linkedin
        : "https://" + linkedin
      : "#";
  }
  if (t1gh) {
    t1gh.innerText = github
      ? github.replace(/^https?:\/\//, "")
      : "github.com/janedoe";
    t1gh.href = github
      ? github.startsWith("http")
        ? github
        : "https://" + github
      : "#";
  }
  setText(
    "t1-summary",
    summary,
    "A brief, impactful summary of your professional background. Focused on driving results and growing business value through software.",
  );
  setText(
    "t1-skills",
    skills,
    "JavaScript, React, Node.js, Python, SQL, Agile Methodologies",
  );
  setText(
    "t1-experience",
    experience,
    "Senior Developer | Tech Solutions Inc. | 2020 - Present\n• Led a team of 5 engineers to build scalable web applications\n• Reduced latency by 40% using Redis caching",
  );
  setText(
    "t1-projects",
    projects,
    "E-commerce Platform\n• Built a full-stack e-commerce app using React and Node.js\n• Integrated Stripe for payment processing",
  );
  setText(
    "t1-education",
    education,
    "Bachelor of Science in Computer Science\nUniversity of Technology | 2016 - 2020",
  );

  // ===== TEMPLATE 2: Blue & Gray =====
  setText("t2-name", name ? name.toUpperCase() : "YOUR NAME");
  setText("t2-title", title || "Your Job Title");
  setText("t2-phone", phone || "+124-4236-7894");
  setText("t2-email", email || "hello@example.com");
  setText("t2-location", location || "123 Any City");
  setText(
    "t2-linkedin",
    linkedin ? linkedin.replace(/^https?:\/\//, "") : "www.yourwebsite.com",
  );
  setText(
    "t2-summary",
    summary,
    "A brief, impactful summary of your professional background and key achievements.",
  );
  // Skills list
  const t2SkillsEl = document.getElementById("t2-skills-list");
  if (t2SkillsEl) {
    const skillArr = skills
      ? skills
          .split(/[,\n]+/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [
          "Strategic Planning",
          "Problem Solving",
          "Data Analysis",
          "Brand Development",
          "Negotiation",
        ];
    t2SkillsEl.innerHTML = skillArr
      .map((s) => `<div class="t2-skill-item">${s}</div>`)
      .join("");
  }
  // Experience
  const t2ExpEl = document.getElementById("t2-exp-list");
  if (t2ExpEl) {
    if (experience) {
      const blocks = parseExperience(experience);
      t2ExpEl.innerHTML = blocks
        .map((b) => {
          const parts = b.header.split("|").map((p) => p.trim());
          const role = parts[0] || "";
          const company = parts[1] || "";
          const date = parts[2] || "";
          return `<div class="t2-exp-item">
                        <div><span class="t2-exp-company">${company || role}</span><span class="t2-exp-date">${date}</span></div>
                        ${company ? `<div class="t2-exp-role">${role}</div>` : ""}
                        <div class="t2-exp-bullets">${b.bullets.join("\n")}</div>
                    </div>`;
        })
        .join("");
    } else {
      t2ExpEl.innerHTML = `<div class="t2-exp-item"><div><span class="t2-exp-company">Tech Solutions Inc.</span><span class="t2-exp-date">2020 - Present</span></div><div class="t2-exp-role">Senior Developer</div><div class="t2-exp-bullets">• Led a team of 5 engineers\n• Reduced latency by 40%</div></div>`;
    }
  }
  // Education
  if (education) {
    const eduLines = education.split("\n").filter(Boolean);
    setText("t2-edu-degree", eduLines[0], "Bachelor of Science");
    setText(
      "t2-edu-school",
      eduLines.slice(1).join("\n"),
      "University of Technology | 2016 - 2020",
    );
  } else {
    setText("t2-edu-degree", "", "Bachelor of Science in Computer Science");
    setText("t2-edu-school", "", "University of Technology | 2016 - 2020");
  }

  // ===== TEMPLATE 3: Web Dev Blue =====
  setText("t3-name", name || "ELEANOR FITZGERALD");
  setText("t3-title", title || "Web Developer");
  const t3contact = document.getElementById("t3-contact");
  if (t3contact) {
    const parts = [location, phone, email].filter(Boolean);
    t3contact.innerText = parts.length
      ? parts.join(" | ")
      : "123 Anywhere St. | +123-456-7890 | hello@reallygreatsite.com";
  }
  setText(
    "t3-summary",
    summary,
    "Solution-oriented professional with experience building and maintaining software. Highly skilled in communication, collaboration, and technical documentation.",
  );
  // Experience
  const t3ExpEl = document.getElementById("t3-exp-list");
  if (t3ExpEl) {
    if (experience) {
      const blocks = parseExperience(experience);
      t3ExpEl.innerHTML = blocks
        .map((b) => {
          const parts = b.header.split("|").map((p) => p.trim());
          const role = parts[0] || "";
          const company = parts[1] || "";
          const date = parts[2] || "";
          return `<div class="t3-exp-item">
                        <div class="t3-exp-company">${company || role}</div>
                        <div class="t3-exp-role-date">${company ? role + (date ? " | " + date : "") : date}</div>
                        <div class="t3-exp-bullets">${b.bullets.join("\n")}</div>
                    </div>`;
        })
        .join("");
    } else {
      t3ExpEl.innerHTML = `<div class="t3-exp-item"><div class="t3-exp-company">Tech Solutions Inc.</div><div class="t3-exp-role-date">Senior Developer | 2020 - Present</div><div class="t3-exp-bullets">• Led a team of 5 engineers to build scalable web applications\n• Reduced latency by 40% using Redis caching</div></div>`;
    }
  }
  setText(
    "t3-projects",
    projects,
    "E-commerce Platform\n• Built a full-stack e-commerce app using React and Node.js",
  );
  if (education) {
    setText("t3-education", education, "");
  } else {
    const t3edu = document.getElementById("t3-education");
    if (t3edu)
      t3edu.innerText =
        "Bachelor of Science in Computer Science\nUniversity of Technology | 2016 - 2020";
  }
  setText(
    "t3-skills",
    skills,
    "Front-end and back-end web development\nCode structure and architecture\nWeb performance optimization\nProgramming languages",
  );

  // ===== TEMPLATE 4: Gray & White =====
  if (name) {
    const nameParts = name.trim().split(" ");
    const lastName = nameParts.pop();
    const firstName = nameParts.join(" ");
    const t4name = document.getElementById("t4-name");
    if (t4name)
      t4name.innerHTML = `${firstName || ""} <strong>${lastName || ""}</strong>`;
  } else {
    const t4name = document.getElementById("t4-name");
    if (t4name) t4name.innerHTML = `ISABEL <strong>MERCADO</strong>`;
  }
  setText("t4-role", title || "Executive Secretary");
  // Contact right
  const t4ph = document.getElementById("t4-phone-right");
  if (t4ph) t4ph.innerHTML = `<span>📞</span> ${phone || "+123-456-7890"}`;
  const t4em = document.getElementById("t4-email-right");
  if (t4em) t4em.innerHTML = `<span>✉</span> ${email || "hello@example.com"}`;
  const t4lo = document.getElementById("t4-loc-right");
  if (t4lo)
    t4lo.innerHTML = `<span>🏠</span> ${location || "123 Anywhere St."}`;
  setText(
    "t4-summary",
    summary,
    "Highly motivated professional with years of experience. Proficient in managing complex tasks and communicating with internal and external stakeholders. Possess exceptional communication and interpersonal skills.",
  );
  // Skills list
  const t4SkillsEl = document.getElementById("t4-skills-list");
  if (t4SkillsEl) {
    const skillArr = skills
      ? skills
          .split(/[,\n]+/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [
          "Strong organizational skills",
          "Exceptional communication",
          "Detail-oriented",
          "Ability to multitask",
        ];
    t4SkillsEl.innerHTML = skillArr
      .map((s) => `<div class="t4-skill-item">• ${s}</div>`)
      .join("");
  }
  // Education left col
  if (education) {
    const eduLines = education.split("\n").filter(Boolean);
    const t4edu = document.getElementById("t4-edu-content");
    if (t4edu) {
      t4edu.innerHTML = `<div class="t4-edu-degree">${eduLines[0] || ""}</div><div class="t4-edu-meta">${eduLines.slice(1).join("\n") || ""}</div>`;
    }
  }
  // Certifications = projects in this template
  const t4Certs = document.getElementById("t4-certs");
  if (t4Certs) {
    if (projects) {
      const projLines = projects.split("\n").filter(Boolean);
      t4Certs.innerHTML = projLines
        .map((l) => `<div class="t4-cert-item">${l}</div>`)
        .join("");
    } else {
      t4Certs.innerHTML = `<div class="t4-cert-item">• Professional Certificate Program</div>`;
    }
  }
  // Experience right col
  const t4ExpEl = document.getElementById("t4-exp-list");
  if (t4ExpEl) {
    if (experience) {
      const blocks = parseExperience(experience);
      t4ExpEl.innerHTML = blocks
        .map((b) => {
          const parts = b.header.split("|").map((p) => p.trim());
          const role = parts[0] || "";
          const company = parts[1] || "";
          const date = parts[2] || "";
          return `<div class="t4-exp-item">
                        <div class="t4-exp-title">${role}</div>
                        <div class="t4-exp-company">${company}${date ? " | " + date : ""}</div>
                        <div class="t4-exp-bullets">${b.bullets.join("\n")}</div>
                    </div>`;
        })
        .join("");
    } else {
      t4ExpEl.innerHTML = `<div class="t4-exp-item"><div class="t4-exp-title">Senior Developer</div><div class="t4-exp-company">Tech Solutions Inc. | 2020 - Present</div><div class="t4-exp-bullets">• Led a team of 5 engineers to build scalable web applications\n• Reduced latency by 40% using Redis caching</div></div>`;
    }
  }

  // ===== TEMPLATE 5: Dark Sidebar =====
  setText("t5-name", name || "Mariana Anderson");
  setText("t5-title", title ? title.toUpperCase() : "MARKETING MANAGER");
  setText(
    "t5-summary",
    summary,
    "A brief, impactful summary of your professional background and key achievements.",
  );
  const t5ph = document.getElementById("t5-phone");
  if (t5ph) t5ph.innerHTML = `📞 ${phone || "123-456-7890"}`;
  const t5em = document.getElementById("t5-email");
  if (t5em) t5em.innerHTML = `✉ ${email || "hello@example.com"}`;
  const t5lo = document.getElementById("t5-location");
  if (t5lo) t5lo.innerHTML = `📍 ${location || "123 Anywhere St."}`;
  // Skills
  const t5SkillsEl = document.getElementById("t5-skills-list");
  if (t5SkillsEl) {
    const skillArr = skills
      ? skills
          .split(/[,\n]+/)
          .map((s) => s.trim())
          .filter(Boolean)
      : ["UI/UX", "Visual Design", "Wireframes", "User Flows"];
    t5SkillsEl.innerHTML = skillArr
      .map((s) => `<div class="t5-skill-item">${s}</div>`)
      .join("");
  }
  // Education
  if (education) {
    const eduLines = education.split("\n").filter(Boolean);
    const t5edu = document.getElementById("t5-edu-content");
    if (t5edu) {
      // Try to parse "Degree\nSchool | Year"
      const mainLine = eduLines[0] || "";
      const rest = eduLines.slice(1).join(" ");
      const yearMatch = rest.match(/(\d{4}\s*[-–]\s*\d{4})/);
      const year = yearMatch ? yearMatch[0] : "";
      const school = rest
        .replace(yearMatch ? yearMatch[0] : "", "")
        .replace(/\|/g, "")
        .trim();
      t5edu.innerHTML = `<div class="t5-edu-item"><div class="t5-edu-year">${year || "2016 - 2020"}</div><div class="t5-edu-degree">${mainLine}</div><div class="t5-edu-school">${school || "University of Technology"}</div></div>`;
    }
  }
  // Experience timeline
  const t5ExpEl = document.getElementById("t5-exp-list");
  if (t5ExpEl) {
    if (experience) {
      const blocks = parseExperience(experience);
      t5ExpEl.innerHTML = blocks
        .map((b) => {
          const parts = b.header.split("|").map((p) => p.trim());
          const role = parts[0] || "";
          const company = parts[1] || "";
          const date = parts[2] || "";
          return `<div class="t5-exp-item">
                        <div class="t5-timeline-dot"></div>
                        <div class="t5-exp-content">
                            <div class="t5-exp-date">${date}</div>
                            <div class="t5-exp-company">${company}</div>
                            <div class="t5-exp-role">${role}</div>
                            <div class="t5-exp-desc">${b.bullets.join("\n")}</div>
                        </div>
                    </div>`;
        })
        .join("");
    } else {
      t5ExpEl.innerHTML = `<div class="t5-exp-item"><div class="t5-timeline-dot"></div><div class="t5-exp-content"><div class="t5-exp-date">2020 - Present</div><div class="t5-exp-company">Tech Solutions Inc.</div><div class="t5-exp-role">Senior Developer</div><div class="t5-exp-desc">• Led a team of 5 engineers\n• Reduced latency by 40%</div></div></div>`;
    }
  }
}

const API_BASE_URL = `${API_BASE}/api/resume`;

function getResumePayload() {
  const userId = localStorage.getItem('profile-id');
  if (!userId) {
    alert("You must be logged in to save resumes.");
    return null;
  }
  return {
    userId: userId,
    fullname: v("inpName"),
    jobTitle: v("inpTitle"),
    email: v("inpEmail"),
    phone: v("inpPhone"),
    location: v("inpLocation"),
    linkedinUrl: v("inpLinkedin"),
    gitUrl: v("inpGithub"),
    profsummary: v("inpSummary"),
    skills: v("inpSkills")
      ? v("inpSkills")
          .split(/[\n,]+/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [],
    experience: v("inpExperience")
      ? parseExperience(v("inpExperience")).map((block) => ({
          company: block.header.split("|")[1]?.trim() || "",
          role: block.header.split("|")[0]?.trim() || "",
          duration: block.header.split("|")[2]?.trim() || "",
        }))
      : [],
    projects: v("inpProjects")
      ? v("inpProjects")
          .split("\n")
          .filter(Boolean)
          .map((line) => ({ title: line }))
      : [],
    education: v("inpEducation")
      ? v("inpEducation")
          .split("\n")
          .filter(Boolean)
          .map((line) => ({ degree: line }))
      : [],
  };
}

async function saveResumeToDb() {
  try {
    const payload = getResumePayload();
    if (!payload) return;
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to save resume.");
    alert("Resume saved successfully!");
    loadSavedResumes();
  } catch (err) {
    console.error("Save Resume Error:", err);
    alert("Error saving resume to backend. Check console for details.");
  }
}

async function loadSavedResumes() {
  try {
    const userId = localStorage.getItem('profile-id');
    if (!userId) {
      const list = document.getElementById("savedResumesList");
      if (list) list.innerHTML = "<div>Please login to view saved resumes.</div>";
      return;
    }
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to load resumes.");
    }
    const resumes = await response.json();
    const list = document.getElementById("savedResumesList");
    if (!list) return;
    if (!Array.isArray(resumes) || resumes.length === 0) {
      list.innerHTML = "<div>No saved resumes found.</div>";
      return;
    }

    list.innerHTML = resumes
      .map((r) => {
        const short = (r.fullname || r.email || "Unnamed").slice(0, 25);
        const titlePart = r.jobTitle ? ` - ${r.jobTitle}` : "";
        return `<div style="margin-bottom:6px; border-bottom:1px solid #ddd; padding-bottom:4px;">
                    <strong>${short}${titlePart}</strong>
                    <div style="font-size:12px;color:#555">${new Date(r.createdAt || r.updatedAt || Date.now()).toLocaleString()}</div>
                    <button type="button" onclick="fillFormFromResume('${r._id}')" style="margin-top:4px; font-size:12px;">Load</button>
                </div>`;
      })
      .join("");
    window.savedResumesCache = resumes.reduce((acc, item) => {
      acc[item._id] = item;
      return acc;
    }, {});
  } catch (err) {
    console.error("Load Saved Resumes Error:", err);
    const list = document.getElementById("savedResumesList");
    if (list) list.innerHTML = "<div>Error loading saved resumes.</div>";
  }
}

function fillFormFromResume(id) {
  const resume = (window.savedResumesCache || {})[id];
  if (!resume) {
    alert('Resume not found in cache. Click "Load Saved Resumes" again.');
    return;
  }

  const setValue = (fieldId, value) => {
    const el = document.getElementById(fieldId);
    if (el) el.value = value || "";
  };

  setValue("inpName", resume.fullname || "");
  setValue("inpTitle", resume.jobTitle || "");
  setValue("inpEmail", resume.email || "");
  setValue("inpPhone", resume.phone || "");
  setValue("inpLocation", resume.location || "");
  setValue("inpLinkedin", resume.linkedinUrl || "");
  setValue("inpGithub", resume.gitUrl || "");
  setValue("inpSummary", resume.profsummary || "");

  setValue(
    "inpSkills",
    Array.isArray(resume.skills) ? resume.skills.join(", ") : "",
  );
  setValue(
    "inpExperience",
    Array.isArray(resume.experience)
      ? resume.experience
          .map(
            (e) =>
              `${e.role || ""} | ${e.company || ""} | ${e.duration || ""}\n• `,
          )
          .join("\n")
      : "",
  );
  setValue(
    "inpProjects",
    Array.isArray(resume.projects)
      ? resume.projects.map((p) => p.title).join("\n")
      : "",
  );
  setValue(
    "inpEducation",
    Array.isArray(resume.education)
      ? resume.education.map((e) => e.degree).join("\n")
      : "",
  );

  window.currentResumeId = id;

  updateResume();
}

async function updateSavedResume() {
  if (!window.currentResumeId) {
    alert("No generated resume selected to update. Please 'Load' a resume first.");
    return;
  }
  try {
    const payload = getResumePayload();
    if (!payload) return;
    const response = await fetch(`${API_BASE_URL}/${window.currentResumeId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to update resume.");
    alert("Resume updated successfully!");
    loadSavedResumes();
  } catch (err) {
    console.error("Update Resume Error:", err);
    alert("Error updating resume.");
  }
}

async function deleteSavedResume() {
  if (!window.currentResumeId) {
    alert("No generated resume selected to delete. Please 'Load' a resume first.");
    return;
  }
  if (!confirm("Are you sure you want to delete this resume?")) return;
  try {
    const response = await fetch(`${API_BASE_URL}/${window.currentResumeId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete resume.");
    alert("Resume deleted successfully!");
    window.currentResumeId = null;
    loadSavedResumes();
  } catch (err) {
    console.error("Delete Resume Error:", err);
    alert("Error deleting resume.");
  }
}

// Initial render
updateResume();
loadSavedResumes();

// AI Assistant
let API_KEY = localStorage.getItem("resume_anthropic_key") || "";
if (API_KEY) document.getElementById("apiBanner").style.display = "none";

let chatHistory = [];

function toggleApiBanner() {
  const banner = document.getElementById("apiBanner");
  banner.style.display = banner.style.display === "none" ? "block" : "none";
}

function saveApiKey() {
  const key = document.getElementById("apiKeyInput").value.trim();
  if (!key) {
    alert("Please enter a valid API key.");
    return;
  }
  API_KEY = key;
  localStorage.setItem("resume_anthropic_key", key);
  document.getElementById("apiBanner").style.display = "none";
  addAIMessage("✅ API key saved! I'm ready to help with your resume.");
}

function getResumeContext() {
  return `[Resume Context]
Name: ${v("inpName") || "Not provided"}
Title: ${v("inpTitle") || "Not provided"}
Summary: ${v("inpSummary") || "Not provided"}
Skills: ${v("inpSkills") || "Not provided"}
Experience: ${v("inpExperience") || "Not provided"}
Projects: ${v("inpProjects") || "Not provided"}
Education: ${v("inpEducation") || "Not provided"}`;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function formatAIResponse(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");
}
function appendMessage(role, html) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.innerHTML = `<div class="msg-avatar">${role === "ai" ? "✨" : "U"}</div><div class="msg-bubble">${html}</div>`;
  const msgs = document.getElementById("chatMessages");
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function addAIMessage(t) {
  appendMessage("ai", formatAIResponse(t));
}
function addUserMessage(t) {
  appendMessage("user", escapeHtml(t));
}
function addTypingIndicator() {
  const div = document.createElement("div");
  div.className = "msg ai";
  div.id = "typingIndicator";
  div.innerHTML = `<div class="msg-avatar">✨</div><div class="msg-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  const msgs = document.getElementById("chatMessages");
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function removeTypingIndicator() {
  const t = document.getElementById("typingIndicator");
  if (t) t.remove();
}

async function sendMessage(overrideText) {
  const input = document.getElementById("chatInput");
  const text = overrideText || input.value.trim();
  if (!text) return;
  if (!API_KEY) {
    addAIMessage("⚠️ Please save your Anthropic API key first.");
    return;
  }
  input.value = "";
  addUserMessage(text);
  chatHistory.push({ role: "user", content: text });
  addTypingIndicator();
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: `You are a professional resume advisor. Keep responses concise, encouraging, and highly actionable. Format advice with clear bullet points. Base your advice on this real-time resume data:\n\n${getResumeContext()}`,
        messages: chatHistory.slice(-6),
      }),
    });
    removeTypingIndicator();
    const data = await response.json();
    if (data.error) {
      addAIMessage(`❌ Error: ${data.error.message}`);
      chatHistory.pop();
    } else {
      const reply = data.content
        .map((c) => (c.type === "text" ? c.text : ""))
        .join("");
      chatHistory.push({ role: "assistant", content: reply });
      addAIMessage(reply);
    }
  } catch (e) {
    removeTypingIndicator();
    addAIMessage("Network error. Please try again.");
    chatHistory.pop();
  }
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
