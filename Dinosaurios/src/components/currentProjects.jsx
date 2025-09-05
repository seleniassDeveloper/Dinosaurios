// src/pages/CurrentProjects.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../css/currentProjects.css";

// Fondos en orden (coinciden con ids cp1..cp6)
import uno from "../../src/ImgCampanas/1.jpeg";
import dos from "../../src/ImgCampanas/2.png";
import tres from "../../src/ImgCampanas/10.JPG";
import cuatro from "../../src/ImgCampanas/4.png";
import cinco from "../../src/ImgCampanas/5.jpeg";
import seis from "../../src/ImgCampanas/6.png";

const bgById = {
  cp1: uno,
  cp2: dos,
  cp3: tres,
  cp4: cuatro,
  cp5: cinco,
  cp6: seis,
};

export function CurrentProjects() {
  const { t } = useTranslation();

  // Trae el array ya estructurado desde i18n (EN/ES)
  const cards = t("currentProjects.cards", { returnObjects: true });

  return (
    <section className="cp-wrap dino-theme">
      <header className="cp-hero">
        <h2 className="cp-title">{t("currentProjects.title")}</h2>
        <p className="cp-kicker">{t("currentProjects.kicker")}</p>
      </header>

      <div className="cp-grid">
        {cards.map(({ id, heading, text }) => (
          <article
            key={id}
            className="cp-card dino-card"
            style={{ backgroundImage: `url(${bgById[id] || ""})` }}
            data-status="unpublished"
            aria-label={heading}
          >
            <div className="cp-overlay">
              <h3 className="cp-heading">{heading}</h3>
              <p className="cp-text">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CurrentProjects;