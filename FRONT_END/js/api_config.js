// api_config.js — Centralized API Base URL for all frontend files
// Change DEPLOYED_BACKEND_URL to your Render/Railway backend URL when deploying.

const DEPLOYED_BACKEND_URL = "https://resume-craft-8b70.onrender.com/";

const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  ? "http://localhost:3000"
  : DEPLOYED_BACKEND_URL;
