import React from "react";
import "../css/Colaboradores.css";
import logo from "../../ImgCampanas/BrandLogos.png"; 
import { useTranslation } from "react-i18next";

export default function Colaboradores() {
  const { t } = useTranslation();

  return (
    <section className="colaboradores-section">
      <div className="colaboradores-single-image">
        <h1>{t("partners.title")}</h1>
        <img src={logo} alt={t("partners.alt")} />
      </div>
    </section>
  );
}