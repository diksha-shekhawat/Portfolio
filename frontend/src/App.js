// ============================================================
// App.js — Root component of the React application
//
// React Router is used here to enable Single Page Application
// (SPA) navigation — the page never fully reloads.
// ============================================================

import React, { useState } from "react";

// BrowserRouter = manages URL history
// Routes & Route = define which component shows for which URL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import CSS for global styles
import "./index.css";

// Import all our custom components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ──────────────────────────────────────────────
// App Component — The Root of Everything
// ──────────────────────────────────────────────
function App() {
  // useState hook: stores whether dark or light mode is active
  // Initial value = true = dark mode by default
  const [isDark, setIsDark] = useState(true);

  // Toggle function: flip isDark between true and false
  // Also add/remove "light" class on <body> for CSS variables
  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      // When next = false (light mode), add "light" class to body
      document.body.classList.toggle("light", next);
      return next;
    });
  };

  return (
    // Router wraps everything so React Router can work
    <Router>
      {/* 
        Navbar appears on every page.
        We pass isDark and toggleTheme as "props" so Navbar
        can show the correct icon and call the toggle.
      */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Routes decide which page component to show */}
      <Routes>
        {/* The "/" route shows our main single-page layout */}
        <Route
          path="/"
          element={
            <main>
              {/* Each section is a separate component */}
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Certifications />
              <Contact />
            </main>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

// Export so index.js can use this component
export default App;
