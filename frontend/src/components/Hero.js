// ============================================================
// Hero.js — Landing/Hero Section Component
//
// Features:
//   - Typewriter effect using react-type-animation
//   - Animated entry (CSS animations)
//   - Download CV buttons (PDF + DOCX via backend)
//   - Social links
// ============================================================

import React from "react";
// TypeAnimation creates the typewriter text effect
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

// Backend URL — our Express server
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Decorative animated background layers */}
      <div className="hero-bg"></div>
      <div className="hero-dots"></div>

      {/* Main content */}
      <div className="hero-content">

        {/* Small greeting badge */}
        <div className="hero-greeting">
          <span>👋</span>
          <span>Hello, World!</span>
        </div>

        {/* Name in large gradient text */}
        <h1 className="hero-name">Diksha Shekhawat</h1>

        {/* 
          TypeAnimation creates the typewriter effect.
          sequence = array of [text, pause, text, pause, ...]
          wrapper = the HTML tag to use
          repeat  = Infinity means it loops forever
        */}
        <div className="hero-role">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",  2000,
              "MERN Stack Developer",  2000,
              "CS Student @ JKLU",     2000,
              "IIT Kanpur Exchange",   2000,
              "Problem Solver",        2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            className="highlight"
          />
        </div>

        {/* Short bio */}
        <p className="hero-bio">
          B.Tech Computer Science student at JK Lakshmipat University (CGPA 9.016) 
          with a Semester Exchange at IIT Kanpur. Passionate about building 
          full-stack applications and solving complex problems.
        </p>

        {/* 
          CTA Buttons — clicking triggers a download from our backend.
          window.open() opens the URL in a new tab, which starts the download.
        */}
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => window.open(`${BACKEND_URL}/api/resume/pdf`, "_blank")}
          >
            ⬇️ Download CV (PDF)
          </button>
          <button
            className="btn btn-outline"
            onClick={() => window.open(`${BACKEND_URL}/api/resume/docx`, "_blank")}
          >
            📄 Download CV (Word)
          </button>
        </div>

        {/* Social / profile links */}
        <div className="hero-socials">
          <a
            className="social-link"
            href="https://github.com/diksha-shekhawat"
            target="_blank"
            rel="noreferrer"
          >
            <span>⚡</span> GitHub
          </a>
          <a
            className="social-link"
            href="https://linkedin.com/in/diksha-shekhawat-082643322"
            target="_blank"
            rel="noreferrer"
          >
            <span>💼</span> LinkedIn
          </a>
          <a
            className="social-link"
            href="https://leetcode.com/u/diksha_shekhawat"
            target="_blank"
            rel="noreferrer"
          >
            <span>🔢</span> LeetCode
          </a>
          <a
            className="social-link"
            href="https://dikshashekhawat.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <span>🌐</span> Portfolio
          </a>
        </div>
      </div>

      {/* Scroll down hint */}
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <span>↓</span>
      </div>
    </section>
  );
}

export default Hero;
