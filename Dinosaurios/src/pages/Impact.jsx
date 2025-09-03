// src/pages/componentes/ImpactoComunidad.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../css/impact.css";

export default function Impact() {
  const { t } = useTranslation();

  return (
    <section className="impacto-comunidad">
      <div className="impacto-contenedor">
        <div className="impacto-texto">
          <h2 className="impacto-titulo">{t("impact.title")}</h2>
          <p className="impacto-desc">{t("impact.description")}</p>
          <ul className="impacto-lista">
            <li>{t("impact.bullet1")}</li>
            <li>{t("impact.bullet2")}</li>
            <li>{t("impact.bullet3")}</li>
            <li>{t("impact.bullet4")}</li>
            <li>{t("impact.bullet5")}</li>
            <li>{t("impact.bullet6")}</li>
            <li>{t("impact.bullet7")}</li>
          </ul>
        </div>
       
      </div>
    </section>
  );
}