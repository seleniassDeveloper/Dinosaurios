// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../css/About.css";
import Grupo from "../../src/ImgCampanas/210.JPG";
import antartida from "../../src/ImgCampanas/antantida2.png";
import Impact from "./Impact";
import hueso from "../../src/ImgCampanas/hueso1.JPG";
// import hueso2 from "../../src/ImgCampanas/hueso2.jpg";

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
            <h2 className="h2-uppercase">{t("about.whoTitle")}</h2>
            <p>{t("about.whoP2")}</p>
            <p>{t("about.whoP3")}</p>
          </div>

          <div className="floating-image-wrapper">
            <img
              src={hueso}
              alt="Excavation detail"
              className="floating-image"
            />
          </div>

          <div className="team-summary">
            <h3 className="h2-uppercase">{t("about.teamTitle")}</h3>
            <p>{t("about.teamP1")}</p>
              <p>{t("about.teamP3")}</p>
          </div>

     <div className="floating-image-wrapper">
            {/* <img
              src={hueso}
              alt="Excavation detail"
              className="floating-image"
            /> */}
          </div>
          {/* Excavaciones */}
          <div className="excavation-metrics">
            {/* <p className="italic-highlight">{t("about.excavationP1")}</p> */}
            <p className="bold-metric">{t("about.excavationP1")}</p>
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
