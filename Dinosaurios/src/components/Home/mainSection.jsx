// src/components/MainSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import trex from "../../ImgCampanas/dinorex.png";

export default function MainSection() {
  const { t } = useTranslation();

  return (
    <section className="mag-hero my-3">
      <div className="mag-veil" />

      <div className="mag-hero-inner ">
        <p className="mag-kicker">{t("hero.kicker")}</p>

        <h1 className="mag-title">
          {t("hero.titleBefore")}{" "} 
          <span className="resaltado">{t("hero.titleHighlight")}</span>{" "}
          {t("hero.titleAfter")}
        </h1>


      </div>

      <div className="mag-dino">
        <img src={trex} alt="Tyrannosaurus rex" />
      </div>
    </section>
  );
}