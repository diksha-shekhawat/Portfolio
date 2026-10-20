# 🚀 Diksha Shekhawat — MERN Stack Portfolio

A complete personal portfolio website built with **React.js** (frontend), **Node.js + Express.js** (backend), and **MongoDB** (database). Designed for a MERN stack assignment with full comments for learning.

---

## 📁 Project Structure

```
PORTFOLIO_REACT/
├── frontend/           ← React.js (CRA)
│   ├── src/
│   │   ├── App.js              ← Root component + Router
│   │   ├── index.js            ← React entry point
│   │   ├── index.css           ← Global CSS variables & utilities
│   │   └── components/
│   │       ├── Navbar.js/css   ← Navigation bar (glassmorphism)
│   │       ├── Hero.js/css     ← Landing section (typewriter effect)
│   │       ├── About.js/css    ← About Me (Framer Motion)
│   │       ├── Skills.js/css   ← Animated skill bars
│   │       ├── Projects.js/css ← Project cards with filter
│   │       ├── Timeline.js/css ← Education & Experience
│   │       ├── Certifications.js/css ← Certs & Achievements
│   │       ├── Contact.js/css  ← Contact form (axios → backend)
│   │       └── Footer.js       ← Footer
│   ├── public/index.html       ← HTML template (SEO meta tags)
│   └── .env                    ← Frontend env variables
│
├── backend/            ← Node.js + Express.js
│   ├── server.js               ← Main server (CORS, MongoDB, routes)
│   ├── routes/
│   │   ├── contact.js          ← POST /api/contact (Mongoose save)
│   │   └── resume.js           ← GET /api/resume/pdf & /docx
│   ├── resumes/
│   │   ├── Diksha_Shekhawat_Resume.pdf
│   │   └── Diksha_Shekhawat_Resume.docx
│   ├── .env                    ← Backend env (MONGO_URI, PORT)
│   └── package.json
│
├── .gitignore                  ← Ignores node_modules, .env, etc.
└── README.md
```

---

## ✅ Features Implemented

| Feature | Status |
|---------|--------|
| Hero with typewriter effect | ✅ react-type-animation |
| Scroll-triggered animations | ✅ Framer Motion + react-intersection-observer |
| Animated skill bars | ✅ CSS transitions on scroll |
| Project cards with filter | ✅ useState filter + AnimatePresence |
| CV Download (PDF) | ✅ Express backend route |
| CV Download (DOCX) | ✅ Express backend route |
| Education & Experience Timeline | ✅ Vertical animated timeline |
| Certifications & Achievements | ✅ Cards with stagger animation |
| Contact Form → MongoDB | ✅ axios POST → Express → Mongoose |
| Dark/Light mode toggle | ✅ CSS variables + body class |
| Responsive design | ✅ Mobile-first CSS |
| React Router (SPA) | ✅ BrowserRouter |
| Environment variables | ✅ .env (not committed to Git) |

---

## 🚀 How to Run

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or MongoDB Atlas)

### 1. Start the Backend
```bash
cd backend
npm install
node server.js
# Server runs on http://localhost:5001
```

### 2. Start the Frontend
```bash
cd frontend
npm install
npm start
# App opens on http://localhost:3000
```

---

## 🔌 Backend API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Health check |
| POST | `/api/contact` | Save contact form message to MongoDB |
| GET | `/api/contact` | Get all messages (admin) |
| GET | `/api/resume/pdf` | Download PDF resume |
| GET | `/api/resume/docx` | Download Word resume |

---

## 🌐 Deployment

- **Frontend**: Deploy `frontend/` on [Vercel](https://vercel.com) or Netlify
- **Backend**: Deploy `backend/` on [Render](https://render.com) or Railway
- Set `REACT_APP_BACKEND_URL` in Vercel to your Render backend URL
- Set `MONGO_URI` in Render to your MongoDB Atlas connection string

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Framer Motion, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Animations**: Framer Motion, CSS animations, react-type-animation
- **Styling**: Vanilla CSS with CSS Custom Properties

---

*Built with ❤️ by Diksha Shekhawat — JKLU B.Tech CS*
