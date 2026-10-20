// ============================================================
// Certifications.js — Certifications & Achievements Section
// ============================================================

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Certifications.css";

// Certification data from resume
const CERTIFICATIONS = [
  {
    icon: "🏅",
    name: "Introduction to Backend Development",
    provider: "Meta",
    year: "2025",
    link: "#",
  },
  {
    icon: "🏅",
    name: "Introduction to Frontend Development",
    provider: "Meta",
    year: "2025",
    link: "#",
  },
  {
    icon: "🤖",
    name: "AI for Everyone",
    provider: "DeepLearning.AI",
    year: "2026",
    link: "#",
  },
  {
    icon: "🧠",
    name: "Machine Learning for Introduction for Everyone",
    provider: "IBM",
    year: "2026",
    link: "#",
  },
];

// Achievements & positions of responsibility
const ACHIEVEMENTS = [
  {
    medal: "🥉",
    title: "Swasth-a-thon Hackathon — 3rd Place",
    desc: "Built an app with a virtual AI mascot reminding the labour force about screen breaks, hydration, and acting as a wellness AI assistant.",
  },
  {
    medal: "👑",
    title: "Cohort Leader — Freshers' Orientation",
    desc: "JK Lakshmipat University. Led and mentored a cohort of incoming freshers during their orientation program.",
  },
  {
    medal: "🎭",
    title: "Stage & Venue Core — Sabrang Cultural Fest",
    desc: "JK Lakshmipat University. Core organizing member for the annual cultural festival.",
  },
  {
    medal: "📚",
    title: "General Secretary Academic Affairs",
    desc: "Student Council, JK Lakshmipat University. Represented student academic interests and coordinated academic programs.",
  },
];

function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section certifications" id="certifications">
      <div className="container" ref={ref}>
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Credentials and milestones</p>

        <div className="cert-layout">

          {/* LEFT — Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="cert-group-title">
              <span>📜</span> Certifications
            </div>

            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                // Stagger: each card animates 0.1s after the previous one
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-provider">{cert.provider}</div>
                  <div className="cert-year">📅 {cert.year}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cert-group-title">
              <span>🏆</span> Achievements
            </div>

            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div
                key={i}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <span className="achievement-medal">{ach.medal}</span>
                <div>
                  <div className="achievement-title">{ach.title}</div>
                  <div className="achievement-desc">{ach.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
