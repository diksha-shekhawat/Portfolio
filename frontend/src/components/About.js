// ============================================================
// About.js — About Me Section Component
//
// Uses Framer Motion for scroll-triggered animations.
// Framer Motion is a React animation library.
// ============================================================

import React from "react";
// motion = animate HTML elements
// useInView = detect when element enters the viewport
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

// ──────────────────────────────────────────────
// ANIMATION VARIANTS
// Define animation states: hidden → visible
// Framer Motion reads these to know how to animate
// ──────────────────────────────────────────────
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },   // Start: invisible, 60px to the left
  visible: { opacity: 1, x: 0 },    // End: visible, in normal position
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },    // Start: invisible, 60px to the right
  visible: { opacity: 1, x: 0 },
};

function About() {
  // useInView returns a [ref, inView] pair
  // ref    = attach this to the element you want to watch
  // inView = true when that element is visible in the browser window
  // triggerOnce = only animate once (not every time you scroll past)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section about" id="about">
      <div className="container">

        {/* Section heading */}
        <h2 className="section-title">About Me</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Get to know me a little better</p>

        {/* 
          ref={ref} tells useInView to watch this element.
          motion.div applies Framer Motion animations.
          animate = inView ? "visible" : "hidden" → switch states on scroll
          transition = how long/smooth the animation is
        */}
        <div className="about-grid" ref={ref}>

          {/* LEFT — Profile photo */}
          <motion.div
            className="about-photo-wrapper"
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Spinning decorative ring */}
            <div className="about-photo-ring"></div>

            {/* Avatar emoji (replace with a real <img> if you have a photo) */}
            <div className="about-avatar">👩‍💻</div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            className="about-text"
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h2>Diksha Shekhawat</h2>
            <p className="about-role">
              &lt; B.Tech CS @ JKLU · Semester Exchange @ IIT Kanpur /&gt;
            </p>

            <p className="about-bio">
              I'm a Computer Science student passionate about building real-world 
              applications using the MERN stack. Currently on a semester exchange at 
              <strong> IIT Kanpur</strong>, I've built systems ranging from multimodal 
              AI monitoring pipelines to geospatial backend architectures. I love 
              turning ideas into clean, functional, and well-designed software.
            </p>

            {/* Info chips */}
            <div className="about-info">
              <div className="info-chip">
                <span className="chip-icon">📍</span>
                <span>Jaipur / Kanpur, India</span>
              </div>
              <div className="info-chip">
                <span className="chip-icon">🎓</span>
                <strong>CGPA 9.016 / 10</strong>
              </div>
              <div className="info-chip">
                <span className="chip-icon">📧</span>
                <span>dikshashekhawat623@gmail.com</span>
              </div>
              <div className="info-chip">
                <span className="chip-icon">🚀</span>
                <span>Open to Opportunities</span>
              </div>
            </div>

            {/* Quick stats */}
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-value">9.016</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2+</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
