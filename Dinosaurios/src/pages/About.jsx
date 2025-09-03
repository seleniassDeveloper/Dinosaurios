// src/pages/About.jsx
import React from "react";
import "../css/About.css";
import Grupo from "../../src/ImgCampanas/210.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about-team-section">
      <div className="container">
        {/* Hero Section */}
        <div className="team-photo-hero">
          <img src={Grupo} alt="Equipo APASUR" className="team-photo" />
          <div className="hero-overlay-text">
            <h1>{t("about.hero")}</h1>
          </div>
        </div>

        {/* About APASUR */}
        <div className="apasur-intro">
          <h2>{t("about.whoTitle")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("about.whoP1") }} />
          <p>{t("about.whoP2")}</p>
        </div>

        {/* Team Summary */}
        <div className="team-summary">
          <h3>{t("about.teamTitle")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("about.teamP1") }} />
          <p dangerouslySetInnerHTML={{ __html: t("about.teamP2") }} />
        </div>

        {/* Excavation Impact */}
        <div className="excavation-metrics">
          <p className="italic-highlight">{t("about.excavationP1")}</p>
          <p className="bold-metric">{t("about.excavationP2")}</p>
          <div className="cta-button">
            <button>{t("about.button")}</button>
          </div>
        </div>

        {/* Antarctica Section */}
        <div className="antarctica-section">
          <h3>{t("about.antarcticaTitle")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("about.antarcticaP1") }} />
          <p>
            <strong>{t("about.antarcticaMissionTitle")}</strong>{" "}
            {t("about.antarcticaMission")}
          </p>
        </div>

        {/* Community Impact */}
        <div className="team-impact">
          <h3>{t("about.impactTitle")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("about.impactP1") }} />
          <p>{t("about.impactP2")}</p>
        </div>
      </div>
    </section>
  );
}