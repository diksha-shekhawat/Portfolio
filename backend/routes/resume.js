// ============================================================
// routes/resume.js — Handles resume file downloads
//
// GET /api/resume/pdf  → Download the PDF resume
// GET /api/resume/docx → Download the Word (.docx) resume
// ============================================================

const express = require("express");
const router = express.Router();
const path = require("path"); // Node.js built-in module for file paths

// ──────────────────────────────────────────────
// Where are the resume files stored?
// path.join() safely combines path segments for any OS
// __dirname = the folder THIS file is in (routes/)
// So resumesDir = /backend/resumes/
// ──────────────────────────────────────────────
const resumesDir = path.join(__dirname, "..", "resumes");

// GET /api/resume — Redirects to /pdf by default
router.get("/", (req, res) => {
  res.redirect("/api/resume/pdf");
});

// ──────────────────────────────────────────────
// GET /api/resume/pdf
// Sends the PDF file to the browser as a download
// ──────────────────────────────────────────────
router.get("/pdf", (req, res) => {
  // Build the full path to the PDF file
  const filePath = path.join(resumesDir, "Diksha_Shekhawat_Resume.pdf");

  // res.download() tells the browser to download the file
  // It sets the correct Content-Disposition header automatically
  res.download(filePath, "Diksha_Shekhawat_Resume.pdf", (err) => {
    if (err) {
      console.error("Error sending PDF:", err);
      res.status(404).json({ error: "PDF file not found on server." });
    }
  });
});

// ──────────────────────────────────────────────
// GET /api/resume/docx
// Sends the Word (.docx) file to the browser as a download
// ──────────────────────────────────────────────
router.get("/docx", (req, res) => {
  const filePath = path.join(resumesDir, "Diksha_Shekhawat_Resume.docx");

  res.download(filePath, "Diksha_Shekhawat_Resume.docx", (err) => {
    if (err) {
      console.error("Error sending DOCX:", err);
      res.status(404).json({ error: "DOCX file not found on server." });
    }
  });
});

// Export the router
module.exports = router;
