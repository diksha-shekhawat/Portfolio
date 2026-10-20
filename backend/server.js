// ============================================================
// server.js — Main entry point for the Express backend
// This file sets up the server, connects to MongoDB, and
// registers all the API routes.
// ============================================================

// Load environment variables from .env file
require("dotenv").config();

// Import required packages
const express = require("express");   // Web framework for Node.js
const mongoose = require("mongoose"); // ODM to talk to MongoDB
const cors = require("cors");         // Allows frontend to call our API

// Import our custom route files
const contactRoute = require("./routes/contact"); // Contact form routes
const resumeRoute = require("./routes/resume");   // Resume download routes

// Create the Express application
const app = express();

// ──────────────────────────────────────────────
// MIDDLEWARE SETUP
// Middleware runs on every incoming request
// ──────────────────────────────────────────────

// Enable CORS so the React frontend (on a different port) can call us
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: ["GET", "POST"],
}));

// Parse incoming JSON request bodies (so we can read req.body)
app.use(express.json());

// ──────────────────────────────────────────────
// CONNECT TO MONGODB
// ──────────────────────────────────────────────
let mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";

// Smart sanitizer: If user passed unencoded @ or symbols in username/password for mongodb+srv
if (mongoUri.startsWith("mongodb+srv://")) {
  try {
    const withoutPrefix = mongoUri.slice("mongodb+srv://".length);
    const lastAt = withoutPrefix.lastIndexOf("@");
    if (lastAt !== -1) {
      const credentials = withoutPrefix.substring(0, lastAt);
      const hostAndRest = withoutPrefix.substring(lastAt + 1);
      const firstColon = credentials.indexOf(":");
      if (firstColon !== -1) {
        const rawUser = decodeURIComponent(credentials.substring(0, firstColon));
        const rawPass = decodeURIComponent(credentials.substring(firstColon + 1));
        mongoUri = `mongodb+srv://${encodeURIComponent(rawUser)}:${encodeURIComponent(rawPass)}@${hostAndRest}`;
      }
    }
  } catch (e) {
    // fallback to original if parsing fails
  }
}

// Log masked URI so we can see the exact username and host being used in Render logs
const maskedUri = mongoUri.replace(/:([^@]+)@/, ":****@");
console.log(`Connecting to MongoDB: ${maskedUri}`);

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ──────────────────────────────────────────────
// ROUTES
// All URLs starting with /api/contact → contactRoute
// All URLs starting with /api/resume  → resumeRoute
// ──────────────────────────────────────────────
app.use("/api/contact", contactRoute);
app.use("/api/resume", resumeRoute);

// Simple root endpoint to confirm server is running
app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend is running! 🚀" });
});

// ──────────────────────────────────────────────
// START THE SERVER
// Listen on the port from .env or default to 5000
// ──────────────────────────────────────────────
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
