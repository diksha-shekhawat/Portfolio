// ============================================================
// routes/contact.js — Handles the contact form API
//
// POST /api/contact  → Save a new message to MongoDB
// GET  /api/contact  → (Admin) Get all saved messages
// ============================================================

const express = require("express");
const router = express.Router(); // Create a mini router (like a sub-app)
const mongoose = require("mongoose");

// ──────────────────────────────────────────────
// MONGOOSE SCHEMA & MODEL
// A Schema defines the shape/structure of data.
// A Model gives us methods to Create/Read/Update/Delete.
// ──────────────────────────────────────────────
const contactSchema = new mongoose.Schema({
  // name field: must be a String and is required
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,            // Remove leading/trailing whitespace
    maxlength: 100,
  },
  // email field
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,       // Store email in lowercase always
  },
  // message field
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    maxlength: 2000,
  },
  // createdAt is automatically added by { timestamps: true } below
}, {
  // timestamps: true adds createdAt and updatedAt fields automatically
  timestamps: true,
});

// Create the Model from the Schema
// "Contact" is the model name → MongoDB creates a collection called "contacts"
const Contact = mongoose.model("Contact", contactSchema);

// ──────────────────────────────────────────────
// POST /api/contact
// Called when the contact form is submitted
// ──────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    // Extract name, email, message from the request body (form data)
    const { name, email, message } = req.body;

    // Basic validation — check all fields exist
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields (name, email, message) are required.",
      });
    }

    // Create a new Contact document and save it to MongoDB
    // "new Contact({ ... })" creates an instance of our model
    const newContact = new Contact({ name, email, message });

    // .save() sends an INSERT query to MongoDB and waits (await)
    await newContact.save();

    // Respond with success
    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been received. 📩",
    });
  } catch (error) {
    // If something went wrong (e.g., DB error), send a 500 error
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "Server error. Please try again later.",
    });
  }
});

// ──────────────────────────────────────────────
// GET /api/contact
// Returns all messages (useful for admin view)
// ──────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    // .find({}) fetches ALL documents from the contacts collection
    // .sort({ createdAt: -1 }) orders newest first
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error." });
  }
});

// Export the router so server.js can use it
module.exports = router;
