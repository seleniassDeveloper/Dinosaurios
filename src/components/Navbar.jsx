// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const isActive = (to) => (pathname === to ? "active" : "");
  const changeLang = (lng) => i18n.language !== lng && i18n.changeLanguage(lng);

  return (
    <header className="navbar" role="banner">

        {/* CENTRO: links */}
        <div className="links  ">
          <Link className={`nav-link ${isActive("/")}`} to="/">{t("nav.home")}</Link>
          <Link className={`nav-link ${isActive("/about")}`} to="/about">{t("nav.about")}</Link>
          <Link className={`nav-link ${isActive("/expedition")}`} to="/expedition">{t("nav.expedition")}</Link>
          <Link className={`nav-link ${isActive("/impact")}`} to="/impact">{t("nav.impact")}</Link>
          <Link className={`nav-link ${isActive("/press")}`} to="/press">{t("nav.press")}</Link>
        </div>

        {/* DERECHA: Donar + Idiomas (siempre al final) */}
        <div className="action">
       
       
          <div className="lang-switch" role="group" aria-label={t("nav.language") || "Language"}>
            <button
              className={`lang ${i18n.language.startsWith("es") ? "current" : ""}`}
              onClick={() => changeLang("es")}
              aria-pressed={i18n.language.startsWith("es")}
            >ES</button>
            <button
              className={`lang ${i18n.language.startsWith("en") ? "current" : ""}`}
              onClick={() => changeLang("en")}
              aria-pressed={i18n.language.startsWith("en")}
            >EN</button>
          </div>
        </div>
  
    </header>
  );
}