const skillRecommendations = {
    "Java": ["Spring Boot", "OOPS", "JDBC"],
    "Python": ["Django", "Flask", "Data Structures"],
    "HTML": ["CSS", "JavaScript", "Responsive Design"],
    "CSS": ["Flexbox", "Grid", "Tailwind"],
    "JavaScript": ["React", "Node.js", "DOM"],
    "DSA": ["Algorithms", "System Design", "Problem Solving"]
};

const addBtn = document.getElementById("addSkillBtn");
const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skilllist");
const progressFill = document.querySelector(".progress-fill");
const skillPercent = document.getElementById("skillPercent");
const saveBtn = document.querySelector(".save-btn");
const backBtn = document.querySelector(".back-btn");

let skills = [];

addBtn.addEventListener("click", function () {

    const skillName = skillInput.value.trim();
    const level = document.querySelector("input[name='level']:checked");

    if (skillName === "" || !level) {
        alert("Enter skill & select level");
        return;
    }

    if (skills.includes(skillName.toLowerCase())) {
        alert("Skill already added");
        return;
    }

    addSkill(skillName, level.value);
    skillInput.value = "";
    document.querySelectorAll("input[name='level']").forEach(r => r.checked = false);
});

function addSkill(name, level) {

    skills.push(name.toLowerCase());

    const div = document.createElement("div");
    div.className = "skill-card";

    div.innerHTML = `
        <div><strong>${name}</strong> - ${level}</div>
        <button class="delete-btn">Delete</button>
    `;

    div.querySelector(".delete-btn").onclick = function () {
        div.remove();
        skills = skills.filter(s => s !== name.toLowerCase());
        updateProgress();
    };

    skillList.appendChild(div);
    updateProgress();
    updateRecommendations(name);
}

function updateProgress() {
    let percent = Math.min(skills.length * 10, 100);
    progressFill.style.width = percent + "%";
    skillPercent.innerText = percent + "%";
}

function updateRecommendations(skillName) {

    const box = document.getElementById("recommendationBox");
    box.innerHTML = "";

    if (skillRecommendations[skillName]) {

        skillRecommendations[skillName].forEach(rec => {

            if (!skills.includes(rec.toLowerCase())) {

                const span = document.createElement("span");
                span.className = "recommend-item";
                span.innerText = rec;

                span.onclick = function () {
                    addSkill(rec, "Beginner");
                };

                box.appendChild(span);
            }
        });
    }
}

saveBtn.addEventListener("click", function () {
    localStorage.setItem("userSkills", JSON.stringify(skills));
    alert("Skills Saved Successfully!");
});

backBtn.addEventListener("click", function () {
    window.location.href = "Dashboard.html";
});
