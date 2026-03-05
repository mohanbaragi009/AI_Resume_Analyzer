import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    connectTimeoutMS: 5000,
    serverSelectionTimeoutMS: 5000,
  })
    .then(() => console.log("MongoDB connected"))
    .catch(err => {
      console.warn("MongoDB connection failed:", err.message);
      console.warn("Running in offline mode - database features will not work.");
    });
} else {
  console.warn("MONGO_URI not configured. Database features will not work.");
}

// Routes
app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
