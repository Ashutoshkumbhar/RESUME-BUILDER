<p align="center">
  <img src="FRONT_END/img/logo.png" alt="Resume Craft Logo" width="100" height="100" style="border-radius: 20px;" />
</p>

<h1 align="center">📝 Resume Craft</h1>

<p align="center">
  <b>AI-Powered Resume Builder & Career Toolkit for Students and Job Seekers</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-v5-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-endpoints">API</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 🌟 Overview

**Resume Craft** is a full-stack web application designed to help **engineering students and freshers** build professional, ATS-optimized resumes, check company eligibility, and prepare for placements — all in one place. Powered by **AI integrations** (Groq & Anthropic APIs), it offers real-time resume coaching, ATS score analysis, and intelligent suggestions.

> **Built for placement season.** Check eligibility at 14+ top companies, build your resume with 5 templates, and get instant ATS feedback — all for free.

---

## ✨ Features

### 📄 Smart Resume Builder
- **5 Professional Templates** — Classic, Blue & Gray, Web Dev Blue, Gray & White, and Dark Sidebar
- **Live Preview** — See changes update in real-time as you type
- **Auto-Formatting** — Sections auto-populate across all templates simultaneously
- **PDF Export** — Download your resume as a print-ready PDF with one click
- **Save, Load, Update & Delete** — Full CRUD operations with MongoDB persistence
- **Profile Photo Support** — Upload profile photos (Dark Sidebar template)

### 🤖 AI Resume Assistant
- Integrated **Anthropic Claude API** for intelligent resume coaching
- Quick actions: *Review Resume*, *Fix Grammar*, *Enhance Profile*, *Suggest Skills*
- Real-time chat interface with contextual resume suggestions

### 📊 ATS Score Checker
- Powered by **Groq AI (LLaMA 3.3 70B)** for ultra-fast analysis
- **Detailed Scoring** — Overall score, keyword match, format quality, impact language, completeness
- **Keyword Analysis** — Found vs. missing keywords with visual tags
- **Section-wise Breakdown** — Summary, Experience, Skills, Education, Projects
- **Actionable Suggestions** — Prioritized improvements (high/medium/low)
- **File Upload Support** — Drag & drop PDF, DOC, DOCX, or TXT files
- **AI Resume Coach** — Interactive chat for follow-up questions

### 🏢 Company Eligibility Tracker
- **14+ Top Companies** — Amazon, Google, Microsoft, Flipkart, TCS, Infosys, Wipro, and more
- **Detailed Company Cards** — Role, CTC, CGPA cutoff, required skills, locations
- **Recruitment Info** — Interview rounds, bond details, eligibility criteria
- **Direct Apply Links** — One-click redirect to official career pages

### 🗺️ Tech Roadmaps
- **7 Learning Paths** — AI/ML, Web Dev, DSA, Data Science, DevOps, Android, Cyber Security
- **Phase-wise Curriculum** — Topics organized in sequential phases with duration estimates
- **Curated Resources** —  Links to Coursera, NPTEL, Udemy, and more for each roadmap
- **Interactive Modal UI** — Expandable roadmap cards with beautiful animations

### 🎨 Theming & UX
- **Dark/Light Mode Toggle** — Global theme system with CSS variables
- **Glassmorphism Design** — Modern, premium UI with gradients and blur effects
- **Responsive Navigation** — Bootstrap-powered navbar with mobile toggle
- **Smooth Animations** — Hover effects, transitions, and micro-animations throughout

### 👤 User Management
- **Registration & Login** — Full authentication flow with MongoDB
- **User Profile** — Editable profile with name, email, course, branch, and year
- **Profile Persistence** — Data synced between localStorage and MongoDB
- **Session Management** — Login state persisted across pages

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **UI Framework** | Bootstrap 5.3 |
| **Backend** | Node.js, Express.js v5 |
| **Database** | MongoDB (Mongoose ODM) |
| **AI / LLM** | Groq API (LLaMA 3.3 70B), Anthropic Claude API |
| **Fonts** | Google Fonts (Inter, Poppins, DM Sans, Syne, Playfair Display, Raleway) |
| **Dev Tools** | Nodemon, dotenv, CORS |

---

## 📁 Project Structure

```
RESUME-BUILDER/
│
├── BACKEND/
│   ├── config/
│   │   └── db.js                  # MongoDB connection setup
│   ├── controllers/
│   │   ├── resumeControllers.js   # Resume CRUD operations
│   │   └── userControllers.js     # Auth & profile management
│   ├── models/
│   │   ├── Resume.js              # Resume schema (Mongoose)
│   │   └── User.js                # User schema (Mongoose)
│   ├── routes/
│   │   ├── resumeRoutes.js        # Resume API routes
│   │   └── userRoutes.js          # User API routes
│   ├── .env                       # Environment variables (not tracked)
│   ├── .gitignore
│   ├── package.json
│   └── server.js                  # Express server entry point
│
├── FRONT_END/
│   ├── Html/
│   │   ├── index.html             # Landing page
│   │   ├── login.html             # Login page
│   │   ├── register.html          # Registration page
│   │   ├── dashboard.html         # User dashboard
│   │   ├── resume-builder.html    # Resume builder (5 templates)
│   │   ├── ATS_checker.html       # ATS score analyzer
│   │   ├── companies.html         # Company listing
│   │   ├── companydetails.html    # Company detail view
│   │   └── roadmap.html           # Tech learning roadmaps
│   ├── css/
│   │   ├── theme.css              # Global dark/light theme variables
│   │   ├── index.css              # Landing page styles
│   │   ├── login.css              # Auth pages styles
│   │   ├── dashboard.css          # Dashboard styles
│   │   ├── resume_craft.css       # Resume builder styles
│   │   ├── companies.css          # Company listing styles
│   │   └── companydetails.css     # Company detail styles
│   ├── js/
│   │   ├── Auth.js                # Login & signup logic
│   │   ├── resume_craft.js        # Resume builder logic + AI chat
│   │   ├── companies.js           # Company cards rendering
│   │   ├── companydetails.js      # Company detail page logic
│   │   └── theme.js               # Dark/light mode toggle
│   └── img/                       # Static assets (logo, backgrounds)
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas) cloud)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashutoshkumbhar/RESUME-BUILDER.git
   cd RESUME-BUILDER
   ```

2. **Install backend dependencies**
   ```bash
   cd BACKEND
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file inside the `BACKEND/` directory:
   ```env
   PORT=3000
   MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
   ```

4. **Start the backend server**
   ```bash
   # Development (with auto-reload)
   npm run dev

   # Production
   npm start
   ```

5. **Open the frontend**
   
   Open `FRONT_END/Html/index.html` in your browser, or use a live server extension (e.g., VS Code Live Server).

### AI Features Setup (Optional)

- **ATS Score Checker** — Requires a [Groq API key](https://console.groq.com/) (`gsk_...`). Enter it in the ATS Checker sidebar.
- **AI Resume Assistant** — Requires an [Anthropic API key](https://console.anthropic.com/) (`sk-ant-...`). Enter it in the Resume Builder sidebar.
- Keys are stored securely in your browser's `localStorage` — they never leave your machine.

---

## 📡 API Endpoints

### User Routes (`/api/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/signup` | Register a new user |
| `POST` | `/login` | Authenticate user |
| `PUT` | `/updateProfile` | Update user profile |

### Resume Routes (`/api/resume`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/` | Save a new resume |
| `GET` | `/` | Get all saved resumes |
| `GET` | `/:id` | Get a specific resume by ID |
| `PUT` | `/:id` | Update an existing resume |
| `DELETE` | `/:id` | Delete a resume |

---

## 🎓 Resume Data Model

```javascript
{
  fullname: String,        // Required
  email: String,           // Required
  phone: String,           // Required
  location: String,        // Required
  linkedinUrl: String,
  gitUrl: String,
  profsummary: String,
  skills: [String],
  education: [{ degree, college, year }],
  projects: [{ title, description, tech }],
  experience: [{ company, role, duration }],
  achievements: [String],
  languages: [String],
  certifications: [String]
}
```

---

## 🏢 Supported Companies

| Company | Role | Min CGPA | CTC Range |
|---------|------|----------|-----------|
| Amazon | SDE-1 | 7.0 | 18–28 LPA |
| Google | Software Engineer | 7.5 | 20–35 LPA |
| Microsoft | Software Engineer | 7.0 | 18–30 LPA |
| Flipkart | Software Engineer | 7.0 | 15–25 LPA |
| Zoho | Software Developer | 7.0 | 6–10 LPA |
| Paytm | Software Engineer | 6.5 | 8–15 LPA |
| Accenture | Associate SE | 6.5 | 4.5–8 LPA |
| Cognizant | Programmer Analyst | 6.5 | 4–6.75 LPA |
| Infosys | System Engineer | 6.0 | 3.6 LPA |
| TCS | Asst. System Engineer | 6.0 | 3.36–7 LPA |
| Wipro | Project Engineer | 6.0 | 3.5–6.5 LPA |
| Capgemini | Software Engineer | 6.0 | 4–7.5 LPA |
| LTIMindtree | GET | 6.5 | 4–6.5 LPA |
| HCL | Software Engineer | 6.0 | 4–6 LPA |

---

## 🗺️ Available Roadmaps

| Roadmap | Duration | Level |
|---------|----------|-------|
| 🤖 AI & Machine Learning | ~12 months | Beginner → Advanced |
| 🌐 Web Development | ~10 months | Beginner → Pro |
| 🧩 Data Structures & Algorithms | ~6 months | Beginner → Advanced |
| 📊 Data Science | ~10 months | Beginner → Advanced |
| ⚙️ DevOps & Cloud | ~9 months | Intermediate |
| 📱 Android Development | ~8 months | Beginner → Intermediate |
| 🔐 Cyber Security | ~10 months | Beginner → Advanced |

---

## 🖼️ Screenshots

> *Screenshots coming soon! Run the project locally to explore the UI.*

<!--
Add screenshots here:
![Landing Page](screenshots/landing.png)
![Dashboard](screenshots/dashboard.png)
![Resume Builder](screenshots/resume-builder.png)
![ATS Checker](screenshots/ats-checker.png)
-->

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Tips
- Use `npm run dev` in the `BACKEND/` folder for hot-reloading during development
- Use VS Code **Live Server** extension for the frontend
- API keys for AI features are stored in `localStorage` — no server-side key management needed

---

## 📄 License

This project is licensed under the **ISC License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ashutosh Kumbhar**

- GitHub: [@Ashutoshkumbhar](https://github.com/Ashutoshkumbhar)

---

<p align="center">
  Made with ❤️ for students preparing for placements
</p>

<p align="center">
  <b>⭐ Star this repo if you found it helpful!</b>
</p>