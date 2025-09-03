// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../ImgCampanas/logoAPASUR.jpeg";
import logoDino from "../ImgCampanas/logoblancoverDino.jpeg";



import "../css/Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const isActive = (to) => (pathname === to ? "active" : "");
  const changeLang = (lng) => i18n.language !== lng && i18n.changeLanguage(lng);

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" className="brand-link">
            <div className="d-flex justify-content-center imageneslogos">
            <img
              src={logo}
              alt="Logo Asociación Paleontológica"
              className="brand-logo"
            />
            <img src={logoDino} alt="" />
          </div>
          </Link>
        </div>



        <nav className="links">
          <Link className={`nav-link ${isActive("/")}`} to="/">{t("nav.home")}</Link>
          <Link className={`nav-link ${isActive("/about")}`} to="/about">{t("nav.about")}</Link>
          <Link className={`nav-link ${isActive("/expedition")}`} to="/expedition">{t("nav.expedition")}</Link>
          <Link className={`nav-link ${isActive("/impact")}`} to="/impact">{t("nav.impact")}</Link>
          <Link className={`nav-link ${isActive("/press")}`} to="/press">{t("nav.press")}</Link>
        </nav>

        <div className="actions">
          <a href="#donate" className="btn-donate">{t("nav.donate") || "Donar"}</a>

          <div className="lang-switch">
            <button className={`lang ${i18n.language.startsWith("es") ? "current" : ""}`} onClick={() => changeLang("es")}>ES</button>
            <button className={`lang ${i18n.language.startsWith("en") ? "current" : ""}`} onClick={() => changeLang("en")}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}