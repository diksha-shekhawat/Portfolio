// ============================================================
// Skills.js — Skills Section with Animated Progress Bars
//
// Shows skill categories with animated bars that fill up
// when the section scrolls into view.
// ============================================================

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

// ──────────────────────────────────────────────
// DATA — Skills organized by category
// percent = how much the bar should fill (0–100)
// ──────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Java",   emoji: "☕", percent: 80 },
      { name: "C++",    emoji: "⚙️", percent: 78 },
      { name: "Python", emoji: "🐍", percent: 75 },
      { name: "C",      emoji: "🔧", percent: 70 },
    ],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js",   emoji: "⚛️",  percent: 85 },
      { name: "JavaScript", emoji: "🟡", percent: 82 },
      { name: "HTML & CSS", emoji: "🌐", percent: 90 },
      { name: "Bootstrap",  emoji: "🅱️", percent: 75 },
      { name: "Three.js",   emoji: "🧊", percent: 60 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    skills: [
      { name: "Node.js",    emoji: "🟢", percent: 82 },
      { name: "Express.js", emoji: "🚂", percent: 80 },
      { name: "MongoDB",    emoji: "🍃", percent: 78 },
      { name: "Mongoose",   emoji: "📦", percent: 75 },
      { name: "REST APIs",  emoji: "🔌", percent: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub",  emoji: "📂", percent: 85 },
      { name: "Docker",        emoji: "🐳", percent: 65 },
      { name: "Kubernetes",    emoji: "☸️", percent: 55 },
      { name: "MediaPipe",     emoji: "👁️", percent: 70 },
      { name: "Linux",         emoji: "🐧", percent: 72 },
    ],
  },
];

// ──────────────────────────────────────────────
// SkillBar — A single skill with its progress bar
// Props: name, emoji, percent, animate (boolean)
// ──────────────────────────────────────────────
function SkillBar({ name, emoji, percent, animate }) {
  return (
    <div className="skill-bar-wrapper">
      {/* Top row: name and percentage */}
      <div className="skill-bar-header">
        <span className="skill-name">
          <span className="skill-emoji">{emoji}</span>
          {name}
        </span>
        <span className="skill-percent">{percent}%</span>
      </div>

      {/* Bar track (the grey background) */}
      <div className="skill-track">
        {/*
          The fill div starts at width: 0
          When animate = true, we set width to the actual percent.
          CSS transition: width 1.2s handles the smooth animation.
        */}
        <div
          className="skill-fill"
          style={{ width: animate ? `${percent}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// SkillCategory — A card with a category title + its bars
// ──────────────────────────────────────────────
function SkillCategory({ category, index, animate }) {
  return (
    /*
      motion.div = animated div from Framer Motion
      initial    = starting state
      whileInView is NOT used here — we use the parent "animate" prop instead
    */
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 40 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      // delay increases by 0.15s for each card (stagger effect)
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Category header */}
      <div className="category-header">
        <span className="category-icon">{category.icon}</span>
        <span className="category-title">{category.title}</span>
      </div>

      {/* Skill bars */}
      {category.skills.map((skill) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          emoji={skill.emoji}
          percent={skill.percent}
          animate={animate}
        />
      ))}
    </motion.div>
  );
}

// ──────────────────────────────────────────────
// Main Skills Component
// ──────────────────────────────────────────────
function Skills() {
  // Watch when the skills section enters the viewport
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section skills" id="skills">
      <div className="container" ref={ref}>
        <h2 className="section-title">Skills</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {/* Map over each category and render a card */}
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCategory
              key={cat.title}
              category={cat}
              index={i}
              animate={inView} // Pass inView so bars animate when visible
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
