// ============================================================
// index.js — The very first file React runs
//
// It finds the <div id="root"> in public/index.html and
// mounts our entire App component inside it.
// ============================================================

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // Load global styles first
import App from "./App"; // Import the root component

// ReactDOM.createRoot() sets up React 18's rendering engine
// document.getElementById("root") selects the div in public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render() tells React to draw our App into that div
root.render(
  // StrictMode = helps catch bugs during development
  // It renders components twice in dev mode to spot side effects
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
