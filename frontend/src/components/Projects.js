// ============================================================
// Projects.js — Projects Showcase Section
//
// Shows project cards with tech filters.
// useState stores the currently selected filter.
// ============================================================

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

// ──────────────────────────────────────────────
// PROJECT DATA — edit this array to add projects
// ──────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    emoji: "🗄️",
    title: "Database Engine",
    desc: "A disk-based relational database engine built in C++ supporting SQL parsing, query execution, B+ tree indexing, buffer management, and concurrency control with transaction recovery mechanisms.",
    tags: ["C++", "SQL", "B+ Tree", "File I/O", "Concurrency"],
    github: "https://github.com/diksha-shekhawat",
    live: "#",
    featured: true,
    category: "Systems",
  },
  {
    id: 2,
    emoji: "🔒",
    title: "Network Intrusion Detection System",
    desc: "Real-time NIDS using Python and Scapy for packet inspection, TCP/UDP flow reconstruction, ML-based anomaly detection, and live alerting with attack classification and severity ratings.",
    tags: ["Python", "Scapy", "Machine Learning", "TCP/IP", "Linux"],
    github: "https://github.com/diksha-shekhawat",
    live: "#",
    featured: true,
    category: "ML",
  },
  {
    id: 3,
    emoji: "📹",
    title: "Multimodal Learning Monitor",
    desc: "React-based web app with real-time face detection, attention tracking, head-pose estimation via MediaPipe, and VAD using Web Audio APIs. Backend built with Node.js, Express, and MongoDB.",
    tags: ["React", "Node.js", "MediaPipe", "MongoDB", "WebAudio"],
    github: "https://github.com/diksha-shekhawat",
    live: "#",
    featured: true,
    category: "MERN",
  },
  {
    id: 4,
    emoji: "🏥",
    title: "OejaRekha — Care Platform Backend",
    desc: "Production backend for a healthcare platform with phone+OTP auth, JWT tokens, geospatial 2dsphere indexing, care partner onboarding state machines, and an append-only EventLog architecture.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
    github: "https://github.com/diksha-shekhawat",
    live: "#",
    featured: false,
    category: "MERN",
  },
  {
    id: 5,
    emoji: "🤖",
    title: "Swasth-a-thon App (Hackathon 3rd Place)",
    desc: "Mobile app with a virtual AI mascot that reminds the labour force about screen breaks, hydration, and acts as a personal AI wellness assistant. Won 3rd place at Swasth-a-thon Hackathon.",
    tags: ["AI", "React", "Node.js"],
    github: "https://github.com/diksha-shekhawat",
    live: "#",
    featured: false,
    category: "AI",
  },
];

// Get unique categories from projects + "All" option
const ALL_FILTERS = ["All", ...new Set(PROJECTS.map((p) => p.category))];

function Projects() {
  // State: which filter is selected (starts with "All")
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter the projects based on activeFilter
  // If "All" is selected, show every project
  // Otherwise show only projects where category matches
  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Things I've built</p>

        {/* Filter buttons */}
        <div className="filter-bar">
          {ALL_FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/*
          AnimatePresence = Framer Motion component that animates
          items when they are added/removed from the DOM.
          layout = tells motion to animate when grid changes.
        */}
        <div className="projects-grid">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card"
                // Entry animation
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                // Exit animation (when filtered out)
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                layout // Animate position when grid reflows
              >
                {/* Card header */}
                <div className="project-header">
                  <span className="project-emoji">{project.emoji}</span>
                  <span className="project-title">{project.title}</span>
                  {project.featured && (
                    <span className="project-featured">⭐ Featured</span>
                  )}
                </div>

                {/* Description */}
                <p className="project-desc">{project.desc}</p>

                {/* Tech stack tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    ⚡ GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
