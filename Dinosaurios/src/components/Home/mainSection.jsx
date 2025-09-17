import React from "react";
import { useTranslation } from "react-i18next";
import trex from "../../ImgCampanas/dinorex.png";

export default function MainSection() {
  const { t } = useTranslation();

  return (
    <section className="mag-hero">
      <div className="mag-veil" />

      <div className="mag-hero-inner">
        <p className="mag-kicker">{t("mainSection.kicker")}</p>

        <h1 className="mag-title">
          {t("mainSection.titleStart")}{" "}
          <span className="resaltado">{t("mainSection.titleHighlight")}</span>{" "}
          {t("mainSection.titleEnd")}
        </h1>
      </div>

    <div className="mag-dino d-none d-md-block">
        <img src={trex} alt="Tyrannosaurus rex" />
      </div>
    </section>
  );
}