// ============================================================
// Contact.js — Contact Form Section
//
// The form sends data to our Express backend via axios.
// useState manages each field + form submission state.
// ============================================================

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// axios is an HTTP client — we use it to POST to our backend
import axios from "axios";
import "./Contact.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ──────────────────────────────────────────────
  // FORM STATE — one useState for each form field
  // ──────────────────────────────────────────────

  // formData holds all field values as one object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Status of the form submission
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  // Message to show the user after submit
  const [statusMsg, setStatusMsg] = useState("");

  // ──────────────────────────────────────────────
  // HANDLE INPUT CHANGE
  // This single function handles ALL inputs.
  // e.target.name = the input's name attribute
  // e.target.value = what the user typed
  // Spread (...) keeps the other fields unchanged
  // ──────────────────────────────────────────────
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ──────────────────────────────────────────────
  // HANDLE FORM SUBMIT
  // Sends a POST request to our backend with the form data.
  // async/await = wait for the network request to finish.
  // ──────────────────────────────────────────────
  const handleSubmit = async (e) => {
    // Prevent the default page reload on form submit
    e.preventDefault();

    // Basic frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMsg("Please fill in all fields.");
      return;
    }

    // Set loading state — disables the button
    setStatus("loading");

    try {
      // axios.post sends a POST request to the backend
      // The second argument is the body (req.body in Express)
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);

      if (response.data.success) {
        setStatus("success");
        setStatusMsg("✅ Message sent! I'll get back to you soon.");
        // Reset form fields to empty
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("error");
      setStatusMsg("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container" ref={ref}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Let's build something together</p>

        <div className="contact-grid">

          {/* LEFT — Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3>Send me a message 📩</h3>
            <p>
              Have a project in mind, want to collaborate, or just want to say hi?
              Fill out the form below and I'll respond as soon as possible!
            </p>

            {/* The HTML form */}
            <form className="contact-form" onSubmit={handleSubmit}>

              {/* Name field */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"               // matches e.target.name in handleChange
                  value={formData.name}     // controlled input — value comes from state
                  onChange={handleChange}   // update state on every keystroke
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>

              {/* Email field */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>

              {/* Message textarea */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="submit-btn"
                disabled={status === "loading"}
              >
                {/* Show different text based on status */}
                {status === "loading" ? "⏳ Sending..." : "Send Message 🚀"}
              </button>

              {/* Success or error message */}
              {(status === "success" || status === "error") && (
                <div className={`form-message ${status}`}>{statusMsg}</div>
              )}
            </form>
          </motion.div>

          {/* RIGHT — Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Info</h3>

            {/* Each info item */}
            {[
              { icon: "📧", label: "Email", value: "dikshashekhawat623@gmail.com", href: "mailto:dikshashekhawat623@gmail.com" },
              { icon: "📱", label: "Phone", value: "+91 8114491796", href: "tel:+918114491796" },
              { icon: "💼", label: "LinkedIn", value: "diksha-shekhawat-082643322", href: "https://linkedin.com/in/diksha-shekhawat-082643322" },
              { icon: "⚡", label: "GitHub", value: "diksha-shekhawat", href: "https://github.com/diksha-shekhawat" },
              { icon: "🔢", label: "LeetCode", value: "diksha_shekhawat", href: "https://leetcode.com/u/diksha_shekhawat" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >
                <div className="contact-info-icon">{item.icon}</div>
                <div className="contact-info-text">
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
