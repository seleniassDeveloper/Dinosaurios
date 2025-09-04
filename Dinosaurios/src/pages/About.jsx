// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../css/About.css";
import aboutUs from "../../src/ImgCampanas/abourUs2.jpg"
import Grupo from "../../src/ImgCampanas/210.JPG";
import antartida from "../../src/ImgCampanas/antantida2.png";
import hueso from "../../src/ImgCampanas/hueso1.JPG";

import Impact from "./Impact";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-team-section py-3">
        <div className="">
          {/* 1) HERO: imagen grande + título */}
          <header className="team-photo-hero">
            <img src={aboutUs} alt="APASUR Team" className="team-photo" />
           
          </header>
           <div className="hero-overlay-text">
              <h1>{t("about.hero")}</h1>
            </div>

          {/* 2) FEATURES (3 columnas) con imagen arriba */}
          <section className="about-columns container" id="features">
            <article className="column">
              <img
                src={hueso}
                alt="Excavation detail"
                className="column-image"
              />
              <h2 className="h2-uppercase">{t("about.whoTitle")}</h2>
              <p>{t("about.whoP2")}</p>
              <p>{t("about.whoP3")}</p>
            </article>

            <article className="column">
              <img src={Grupo} alt="APASUR Team" className="column-image" />
              <h3 className="h2-uppercase">{t("about.teamTitle")}</h3>
              <p>{t("about.teamP1")}</p>
              <p>{t("about.teamP3")}</p>
            </article>

            {/* <article className="column">
              <img src={hueso} alt="Excavation site" className="column-image" />
              <h3 className="h2-uppercase">{t("about.excavationTitle")}</h3>
              <p className="bold-metric">{t("about.excavationP1")}</p>
              <div className="cta-button">
                <button>{t("about.button")}</button>
              </div>
            </article> */}
          </section>

          {/* 3) TESTIMONIAL / QUOTE */}
          {/* 3) TESTIMONIAL / QUOTE */}
          <section className="about-quote container">
            <blockquote>
              <p className="bold-metric">{t("about.excavationP1")}</p>

              {/* Calcomanía (pegada sobre la banda) */}
              <a
                href="#impact"
                className="sticker-cta"
                aria-label={t("about.button")}
              >
                <span className="sticker-text">{t("about.button")}</span>
              </a>
            </blockquote>
          </section>

          {/* 4) SPLIT: imagen izquierda / texto derecha */}
          <section className="hueso2-section container">
            <img
              src={antartida}
              alt="Antarctica Expedition"
              className="hueso2-image"
            />
            <div className="hueso2-text">
              <h3>{t("about.antarcticaTitle").toUpperCase()}</h3>

              {/* <p>{t("about.antarcticaP1")}</p> */}
              {/* <p>
                <strong>{t("about.antarcticaMissionTitle")}</strong>{" "}
                {t("about.antarcticaMission")}
              </p> */}
              <p>
                We have signed an exclusive five-year agreement with the
                Argentine government to conduct paleontological expeditions in
                Antarctica (2027–2032) in partnership with the Argentine
                Antarctic Institute and CONICET.
              </p>
              <p>
                <b>Our Mission</b>: Uncover new dinosaur fossils that have lived
                70 million years ago on the frozen continent.
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* 5) IMPACT (debajo) */}
      <div id="impact">
        <Impact />
      </div>
    </>
  );
}
