// ============================================================
// Timeline.js — Education & Experience Timeline Section
// ============================================================

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Timeline.css";

// ──────────────────────────────────────────────
// TIMELINE DATA — from Diksha's resume
// ──────────────────────────────────────────────
const TIMELINE_ITEMS = [
  {
    type: "experience",
    title: "Backend Developer Intern",
    org: "Oeja Swasthasetu",
    period: "July 2026 — Ongoing",
    detail:
      "Building OejaRekha backend with Node.js, Express, MongoDB. Implemented OTP auth with JWT, geospatial 2dsphere indexing, care partner state machines, and scheduled Node-Cron jobs.",
  },
  {
    type: "education",
    title: "Semester Exchange Student",
    org: "Indian Institute of Technology, Kanpur",
    period: "Semester IV · 2026",
    detail:
      "Semester exchange at one of India's premier engineering institutions — IIT Kanpur.",
  },
  {
    type: "experience",
    title: "Research Intern",
    org: "Vicharanashala Lab, IIT Ropar",
    period: "15 May 2026 — 16 July 2026",
    detail:
      "Engineered a real-time multimodal monitoring pipeline with MediaPipe CV, Web Audio VAD, React frontend, and Node.js/MongoDB backend for lecture analytics.",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    org: "JK Lakshmipat University, Jaipur",
    period: "2023 — Present · CGPA 9.016",
    detail:
      "Sem I: 8.45 | Sem II: 9.50 | Sem III: 9.095. General Secretary Academic Affairs, Cohort Leader, Stage & Venue Core at Sabrang Fest.",
  },
  {
    type: "education",
    title: "Class XII (CBSE)",
    org: "St. Teresa's School, Jaipur",
    period: "2023 · 90.2%",
    detail: "Completed Class XII with 90.2% in PCM stream.",
  },
  {
    type: "education",
    title: "Class X (CBSE)",
    org: "St. Teresa's School, Jaipur",
    period: "2021 · 94.4%",
    detail: "Completed Class X with 94.4%.",
  },
];

// ──────────────────────────────────────────────
// Single Timeline Entry Component
// Props: item (data), index (for animation delay), isLeft
// ──────────────────────────────────────────────
function TimelineEntry({ item, index }) {
  // Each entry watches itself entering the viewport
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Odd items slide from left, even from right
  const direction = index % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: direction * 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* The dot on the central line */}
      <div className="timeline-dot"></div>

      {/* The card */}
      <div className="timeline-card">
        {/* Type badge */}
        <span className={`timeline-type type-${item.type}`}>
          {item.type === "education" ? "🎓 Education" : "💼 Experience"}
        </span>

        <div className="timeline-title">{item.title}</div>
        <div className="timeline-org">{item.org}</div>
        <div className="timeline-period">{item.period}</div>
        <div className="timeline-detail">{item.detail}</div>
      </div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────
// Main Timeline Component
// ──────────────────────────────────────────────
function Timeline() {
  return (
    <section className="section timeline-section" id="timeline">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        <div className="divider"></div>
        <p className="section-subtitle">My academic and professional journey</p>

        {/* Vertical timeline — each item animates on scroll */}
        <div className="timeline">
          {TIMELINE_ITEMS.map((item, i) => (
            <TimelineEntry key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
