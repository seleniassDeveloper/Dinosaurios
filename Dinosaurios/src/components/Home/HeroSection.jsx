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
    <section className="hero-magazine my-5 pt-5">
      {/* Imagen con texto encima */}
      <div className="hero-left">
        <img src={trex} alt="Excavación" className="hero-img" />
        <div className="hero-text-overlay">
          <h2 className="hero-overlay-title">
            Excavación en vivo: <br />
            <span className="highlight">descubre una nueva especie</span> con
            nosotros
          </h2>
        </div>
      </div>

      {/* Texto y elementos interactivos */}
      <div className="hero-right pb-3">
        <p className="hero-description">
          We will be broadcasting live from Río Negro, Argentina, where our team
          will be searching for entirely new dinosaur species. For the first
          time ever, you can witness the excavation as it happens—every bone,
          every discovery—while directly supporting one of the world’s most
          breakthrough-driven paleontology campaigns. Join us to watch history
          being uncovered in real time.
        </p>
        <p className="hero-quote">
          Con más de 30 especies descubiertas, nuestra ONG lidera la
          paleontología en América del Sur.
        </p>
        <p className="hero-urgency">
          ⏳ ¡Quedan <strong>7 días</strong> para participar en el sorteo de
          fósiles originales!
        </p>
        <div className="d-flex">
          <CountdownTimer targetDate="2025-09-08T12:00:00" />
          {/* <Redes /> */}
        </div>
        <div className="hero-buttons">
          <a href="/donate" className="hero-btn primary">
            Ver lifestream
          </a>
          <a href="/expedition" className="hero-btn secondary">
            {t("hero.cta2")}
          </a>
        </div>{" "}
        <Redes />
      </div>
    </section>
  );
}
