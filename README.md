# 🤖 AI Resume Analyzer

A full-stack MERN application that helps users optimize their resumes for Applicant Tracking Systems (ATS) using Google Gemini AI.

## Tech Stack
- **Frontend**: React + Vite (port 3000)
- **Backend**: Node.js + Express (port 5000)
- **Database**: MongoDB
- **AI**: Google Gemini 2.5 Flash

## 🚀 Quick Start

### 1. Configure Backend Environment Variables
Edit `server/backend/.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/resumedb
JWT_SECRET=your_super_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

### 2. Start the Backend
```bash
cd server/backend
npm run dev
```

### 3. Start the Frontend
```bash
cd client
npm run dev
```

### 4. Open in Browser
Visit: http://localhost:3000

## API Endpoints
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /auth/register | No | Register user |
| POST | /auth/login | No | Login, returns JWT |
| POST | /resume/upload | Bearer JWT | Upload PDF resume |
| POST | /resume/analyze | Bearer JWT | AI + ATS analysis |

## Project Structure
```
Ai Resume Analyzer/
├── client/          # React + Vite frontend
│   └── src/
│       ├── App.jsx
│       └── components/
│           ├── Navbar/
│           ├── Home/
│           ├── Login/
│           ├── Register/
│           ├── YourResumes/
│           ├── Contact/
│           └── ProtectedRoute/
└── server/
    └── backend/     # Node.js + Express backend
        ├── server.js
        ├── .env
        ├── controllers/
        ├── middleware/
        ├── models/
        ├── routes/
        └── utils/
```
