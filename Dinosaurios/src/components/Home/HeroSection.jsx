// src/components/Home/HeroSection.jsx
import React from "react";
import "../../css/sections/HeroSection.css";
import CountdownTimer from "./CountdownTimer";
import Redes from "./redes";
import { useTranslation } from "react-i18next";
import trex from "../../ImgCampanas/foundNewSpecies.jpg";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-magazine  pt-5">
      {/* Imagen con texto encima */}
      <div className="hero-left">
        <img src={trex} alt={t("hero.alt")} className="hero-img" />
        <div className="hero-text-overlay">
          <h2 className="hero-overlay-title">
            {t("hero.title")} <br />
            <span className="highlight">{t("hero.highlight")}</span>
          </h2>
        </div>
      </div>

      {/* Texto y elementos interactivos */}
      <div className="hero-right pb-3">
        <p className="hero-description">{t("hero.description")}</p>
        <p className="hero-quote">{t("hero.quote")}</p>
        <p className="hero-urgency">
          {/* ⏳ {t("hero.urgency.prefix")} <strong>{t("hero.urgency.days")}</strong> {t("hero.urgency.suffix")} */}
        </p>
        <div className="d-flex">
<CountdownTimer targetDate="2025-09-25T12:00:00" />
        </div>
        <div className="hero-buttons">
          <a href="/donate" className="hero-btn primary">
            {t("hero.cta1")}
          </a>
          <a href="/expedition" className="hero-btn secondary">
            {t("hero.cta2")}
          </a>
        </div>
        <Redes />
      </div>
    </section>
  );
}