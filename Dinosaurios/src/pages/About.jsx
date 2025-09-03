// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../css/About.css";
import Grupo from "../../src/ImgCampanas/210.jpg";
import antartida from "../../src/ImgCampanas/antartida.jpg";
import Impact from "./Impact";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-team-section">
        <div className="container">
          {/* Hero Section */}
          <div className="team-photo-hero">
            <img src={Grupo} alt="APASUR Team" className="team-photo" />
            <div className="hero-overlay-text">
              <h1>{t("about.hero")}</h1>
            </div>
          </div>

          {/* ¿Quiénes somos? */}
          <div className="apasur-intro">
            <h2>{t("about.whoTitle")}</h2>
            <p>{t("about.whoP1")}</p>
            <p>{t("about.whoP2")}</p>
          </div>

          {/* Nuestro equipo */}
          <div className="team-summary">
            <h3>{t("about.teamTitle")}</h3>
            <p>{t("about.teamP1")}</p>
            <ul>
              <li>11+ {t("about.researchers", "researchers")}</li>
              <li>5+ {t("about.technicians", "technicians")}</li>
              <li>2+ {t("about.educators", "educators and communicators")}</li>
              <li>10+ {t("about.students", "students based at the museum")}</li>
            </ul>
            <p>{t("about.teamP2")}</p>
          </div>

          {/* Excavaciones */}
          <div className="excavation-metrics">
            <p className="italic-highlight">{t("about.excavationP1")}</p>
            <p className="bold-metric">{t("about.excavationP2")}</p>
            <div className="cta-button">
              <button>{t("about.button")}</button>
            </div>
          </div>

          {/* Antártida */}
          <div className="antarctica-section">
            <div className="antarctica-section-text">
              <h3>{t("about.antarcticaTitle")}</h3>
              <p>{t("about.antarcticaP1")}</p>
              <p>
                <strong>{t("about.antarcticaMissionTitle")}</strong>{" "}
                {t("about.antarcticaMission")}
              </p>
              <a href="#impacto" className="antarctica-button">
                {t("about.button")}
              </a>
            </div>
            <img
              src={antartida}
              alt="Antarctica Expedition"
              className="antarctica-section-image"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <div>
        <Impact />
      </div>
    </>
  );
}