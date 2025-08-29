// src/main.jsx
import "./i18n"; // <-- MUY IMPORTANTE: antes de usar cualquier hook de i18n
import 'bootstrap/dist/css/bootstrap.min.css';   // << CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // << JS (opcional)
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);