// src/pages/Impact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Impact.css";

export default function Impact() {
  const { t } = useTranslation();

  const bullets = [
    t("impact.bullet1"),
    t("impact.bullet2"),
    t("impact.bullet3"),
    t("impact.bullet4"),
    t("impact.bullet5"),
    t("impact.bullet6"),
    t("impact.bullet7"),
  ];

  return (
    <section className="impact-section">
      <h1>{t("impact.title")}</h1>
      <p>{t("impact.description")}</p>
      <ul>
        {bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}