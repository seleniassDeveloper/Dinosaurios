// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo1 from "../ImgCampanas/logoAPASUR.jpeg";
import logo2 from "../ImgCampanas/logoblancoverDino.jpeg";
import "../css/Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (to) =>
    pathname === to ? "nav-link nav-link-active" : "nav-link";

  const changeLang = (lng) =>
    i18n.language !== lng && i18n.changeLanguage(lng);

  return (
    <header className="navbar-container">
      <div className="navbar-content">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src={logo1} alt="Logo APA SUR" className="logo-img" />
            <img src={logo2} alt="Logo LACEV" className="logo-img" />
          </Link>
        </div>

        {/* Botón hamburguesa en mobile */}
        <div>
               <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        </div>
   

        {/* Menú de navegación */}
        <nav className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <Link className={isActive("/")} to="/" onClick={() => setMenuOpen(false)}>
            {t("nav.home") || "Home"}
          </Link>
          <Link className={isActive("/about")} to="/about" onClick={() => setMenuOpen(false)}>
            {t("nav.about") || "About Us"}
          </Link>
          <Link className={isActive("/expedition")} to="/expedition" onClick={() => setMenuOpen(false)}>
            {t("nav.expedition") || "Discoveries"}
          </Link>
          <Link className={isActive("/live")} to="/live" onClick={() => setMenuOpen(false)}>
            {t("nav.live") || "Live Dig Hub"}
          </Link>
          <Link className={isActive("/press")} to="/press" onClick={() => setMenuOpen(false)}>
            {t("nav.press") || "Press"}
          </Link>
        </nav>

        {/* Idioma */}
        <div className="navbar-lang">
          <button
            className={`lang-btn ${i18n.language.startsWith("es") ? "active-lang" : ""}`}
            onClick={() => changeLang("es")}
          >
            ES
          </button>
          <button
            className={`lang-btn ${i18n.language.startsWith("en") ? "active-lang" : ""}`}
            onClick={() => changeLang("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}