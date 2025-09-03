// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo1 from "../ImgCampanas/logoAPASUR.jpeg";
import logo2 from "../ImgCampanas/logoblancoverDino.jpeg";
import "../css/Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const isActive = (to) => pathname === to ? "nav-link nav-link-active" : "nav-link";
  const changeLang = (lng) => i18n.language !== lng && i18n.changeLanguage(lng);

  return (
    <header className="navbar-container">
      <div className="navbar-content">

        {/* Logo izquierda */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src={logo1} alt="Logo APA SUR" className="logo-img" />
            <img src={logo2} alt="Logo LACEV" className="logo-img" />
          </Link>
        </div>

        {/* Links centro */}
        <nav className="navbar-links">
          <Link className={isActive("/")} to="/">{t("nav.home") || "Home"}</Link>
          <Link className={isActive("/about")} to="/about">{t("nav.about") || "About Us"}</Link>
          <Link className={isActive("/expedition")} to="/expedition">{t("nav.expedition") || "Discoveries"}</Link>
          <Link className={isActive("/live")} to="/live">{t("nav.live") || "Live Dig Hub"}</Link>
          <Link className={isActive("/press")} to="/press">{t("nav.press") || "Press"}</Link>
        </nav>

        {/* Switch de idioma derecha */}
        <div className="navbar-lang">
          <button className={`lang-btn ${i18n.language.startsWith("es") ? "active-lang" : ""}`} onClick={() => changeLang("es")}>ES</button>
          <button className={`lang-btn ${i18n.language.startsWith("en") ? "active-lang" : ""}`} onClick={() => changeLang("en")}>EN</button>
        </div>

      </div>
    </header>
  );
}