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
        <Link to="/" className="navbar-logo-link">
          <img src={logo1} alt="Logo APA SUR" className="logo-img" />
          <img src={logo2} alt="Logo LACEV" className="logo-img" />
        </Link>

        {/* Language selector */}
        <div className="lang-switcher">
          <button
            className={`lang-btn ${i18n.language.startsWith("es") ? "active-lang" : ""}`}
            onClick={() => changeLang("es")}
          >
            ES
          </button>
          <span className="lang-separator">/</span>
          <button
            className={`lang-btn ${i18n.language.startsWith("en") ? "active-lang" : ""}`}
            onClick={() => changeLang("en")}
          >
            EN
          </button>
        </div>

        {/* Burger icon */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link className={isActive("/")} to="/" onClick={() => setMenuOpen(false)}>{t("nav.home")}</Link>
        <Link className={isActive("/about")} to="/about" onClick={() => setMenuOpen(false)}>{t("nav.about")}</Link>
        <Link className={isActive("/expedition")} to="/expedition" onClick={() => setMenuOpen(false)}>{t("nav.expedition")}</Link>
        <Link className={isActive("/live")} to="/live" onClick={() => setMenuOpen(false)}>{t("nav.live")}</Link>
        <Link className={isActive("/press")} to="/press" onClick={() => setMenuOpen(false)}>{t("nav.press")}</Link>
      </nav>
    </header>
  );
}