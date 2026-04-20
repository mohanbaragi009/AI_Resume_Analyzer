# 🤖 AI Resume Analyzer

An intelligent full-stack web application that analyzes resumes against job descriptions using **Google Gemini AI**, calculates an **ATS (Applicant Tracking System) score**, and provides actionable suggestions to improve your resume.

---

## 🚀 Live Demo :
 https://v0-mohan-ai-resume-analyzer.vercel.app/

---

## 📸 Screenshots

| Page | Description |
|------|-------------|
| 🏠 Home | Upload resume & enter job description |
| 📄 Your Resumes | View past analysis results |
| 🔐 Login / Register | Secure JWT-based authentication |
| 📬 Contact | Contact form |

---

## 🧱 Tech Stack

### 🖥️ Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 7** | Lightning-fast dev server & bundler |
| **React Router DOM v7** | Client-side routing |
| **Axios** | HTTP requests |
| **Vanilla CSS** | Styling |

### ⚙️ Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | REST API framework |
| **MongoDB Atlas** | Cloud NoSQL database |
| **Mongoose** | MongoDB ODM |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **Multer** | File upload handling |
| **pdf-parse / pdfjs-dist** | PDF text extraction |
| **Google Gemini AI** | AI-powered resume analysis |
| **PDFKit** | PDF generation |
| **dotenv** | Environment variable management |
| **CORS** | Cross-origin request handling |
| **Nodemon** | Auto-restart during development |

---

## 📁 Project Structure

```
AI_Resume_Analyzer/
│
├── client/                        # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/              # Resume upload & analysis UI
│   │   │   ├── Login/             # Login page
│   │   │   ├── Register/          # Registration page
│   │   │   ├── Navbar/            # Navigation bar
│   │   │   ├── Contact/           # Contact form
│   │   │   ├── YourResumes/       # Past resume analysis
│   │   │   └── ProtectedRoute/    # JWT-guarded routes
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   └── backend/                   # Backend (Node.js + Express)
│       ├── controllers/
│       │   ├── authController.js  # Register & Login logic
│       │   └── resumeController.js# Resume upload & analysis
│       ├── middleware/
│       │   ├── authMiddleware.js  # JWT verification
│       │   └── upload.js          # Multer config
│       ├── models/
│       │   ├── User.js            # User schema
│       │   └── Resume.js          # Resume schema
│       ├── routes/
│       │   ├── authRoutes.js      # /auth endpoints
│       │   └── resumeRoutes.js    # /resume endpoints
│       ├── utils/
│       │   ├── aiAnalyzer.js      # Google Gemini AI integration
│       │   ├── atsScore.js        # ATS score calculator
│       │   ├── keywordExtractor.js# Keyword extraction
│       │   ├── resumeParser.js    # PDF parser
│       │   ├── suggestionEngine.js# Improvement suggestions
│       │   └── pdfGenerator.js    # PDF export
│       ├── server.js
│       └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ API Endpoints

### 🔐 Auth Routes — `/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register new user | ❌ |
| `POST` | `/auth/login` | Login & get JWT token | ❌ |

### 📄 Resume Routes — `/resume`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/resume/upload` | Upload & parse PDF resume | ✅ JWT |
| `POST` | `/resume/analyze` | Analyze resume vs job description | ✅ JWT |

---

## 🛠️ Local Setup — Step by Step

### ✅ Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Google Gemini API Key](https://aistudio.google.com/app/apikey)

---

### 📥 Step 1 — Clone the Repository

```bash
git clone https://github.com/mohanbaragi009/AI_Resume_Analyzer.git
cd AI_Resume_Analyzer
```

---

### 🔧 Step 2 — Backend Setup

```bash
cd server/backend
npm install
```

Create a `.env` file inside `server/backend/`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=5000
```

> ⚠️ Replace the placeholder values with your actual credentials.

Start the backend server:

```bash
npm run dev
```

Backend runs at: **http://localhost:5000**

---

### 🎨 Step 3 — Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs at: **http://localhost:3000**

---

### 🌐 Step 4 — MongoDB Atlas Configuration

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to **Security → Network Access**
3. Click **"+ ADD IP ADDRESS"**
4. Click **"ALLOW ACCESS FROM ANYWHERE"** → adds `0.0.0.0/0`
5. Click **Confirm** and wait ~30 seconds

---

### ✅ Step 5 — Open the App

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

1. **Register** a new account
2. **Login** with your credentials
3. Go to **Home** → upload your PDF resume
4. Enter a **Job Description**
5. Click **Analyze** → get your ATS score + AI suggestions!

---

## 🔒 Security

- Passwords are hashed using **bcryptjs** before storing
- Authentication uses **JWT tokens** stored in `localStorage`
- Protected routes require a valid token
- `.env` file is **never committed** to GitHub

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Mohan Baragi**  
GitHub: [@mohanbaragi009](https://github.com/mohanbaragi009)

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
