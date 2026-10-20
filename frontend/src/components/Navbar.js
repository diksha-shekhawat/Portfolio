// ============================================================
// Navbar.js — The top navigation bar component
//
// Props received:
//   isDark     → boolean: is dark mode on?
//   toggleTheme → function: call to switch theme
// ============================================================

import React, { useState } from "react";
import "./Navbar.css";

// The nav items — each has a label and an id matching a section
const NAV_ITEMS = [
  { label: "About",          id: "about" },
  { label: "Skills",         id: "skills" },
  { label: "Projects",       id: "projects" },
  { label: "Timeline",       id: "timeline" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact",        id: "contact" },
];

function Navbar({ isDark, toggleTheme }) {
  // State to track if the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to a section when a nav link is clicked
  // document.getElementById(id) finds the element with that id
  // .scrollIntoView() scrolls the browser to that element
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="navbar">
      {/* Logo — click to scroll back to top */}
      <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        &lt;DS /&gt;
      </div>

      {/* Navigation links — className includes "open" when mobile menu is open */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {/* 
          .map() loops through NAV_ITEMS array and creates a button for each.
          The key prop helps React track items efficiently.
        */}
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="nav-link"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}

        {/* Theme toggle button */}
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {/* Show sun icon in dark mode, moon in light mode */}
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile hamburger icon — three horizontal bars */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
