// ============================================================
// Footer.js — The bottom footer of the portfolio
// ============================================================

import React from "react";

// Inline styles — small component, simple enough for inline
const styles = {
  footer: {
    background: "var(--bg-secondary)",
    borderTop: "1px solid var(--border)",
    padding: "40px 24px",
    textAlign: "center",
  },
  inner: {
    maxWidth: "var(--container-width)",
    margin: "0 auto",
  },
  logo: {
    fontFamily: "var(--font-code)",
    fontSize: "1.5rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "12px",
  },
  text: {
    color: "var(--text-muted)",
    fontSize: "0.85rem",
    lineHeight: "1.8",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "16px",
    flexWrap: "wrap",
  },
  link: {
    color: "var(--text-secondary)",
    fontSize: "0.85rem",
    fontWeight: "500",
    transition: "color 0.3s",
    textDecoration: "none",
  },
};

function Footer() {
  // Get the current year dynamically
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        {/* Logo */}
        <div style={styles.logo}>&lt;DS /&gt;</div>

        {/* Copyright */}
        <p style={styles.text}>
          Designed & Built with ❤️ by <strong>Diksha Shekhawat</strong>
          <br />
          © {year} · All Rights Reserved
        </p>

        {/* Quick links */}
        <div style={styles.links}>
          {[
            { label: "GitHub", href: "https://github.com/diksha-shekhawat" },
            { label: "LinkedIn", href: "https://linkedin.com/in/diksha-shekhawat-082643322" },
            { label: "Portfolio", href: "https://dikshashekhawat.vercel.app" },
            { label: "LeetCode", href: "https://leetcode.com/u/diksha_shekhawat" },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={styles.link}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
