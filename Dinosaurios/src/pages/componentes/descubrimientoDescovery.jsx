// src/pages/DescubrimientoDescovery.jsx
import React from "react";
import "../css/descubrimientos.css";
import disco1 from "../../ImgCampanas/disco1.jpg";
import disco2 from "../../ImgCampanas/disco2.jpg";
import disco3 from "../../ImgCampanas/disco3.jpg";
import { useTranslation } from "react-i18next";

export function DescubrimientoDescovery() {
  const { t } = useTranslation();

  return (
    <section className="pd-wrap">
      {/* Top tape */}
      <div className="pd-tape" aria-hidden="true" />

      <article className="pd-container">
        {/* Left column: collage */}
        <aside className="pd-gallery" aria-label="Image gallery">
          <figure className="pd-polaroid tilt-l">
            <img src={disco1} alt={t("discoveries.0.images.0.alt")} loading="lazy" />
          </figure>

          <figure className="pd-polaroid tilt-r">
            <img src={disco2} alt={t("discoveries.0.images.1.alt")} loading="lazy" />
          </figure>

          <figure className="pd-polaroid tilt-s">
            <img src={disco3} alt={t("discoveries.0.images.2.alt")} loading="lazy" />
          </figure>
        </aside>

        {/* Right column: text */}
        <main className="pd-text">
          <header className="pd-head">
            <span className="pd-label">{t("discoveries.0.subtitle")}</span>
            <h2 className="pd-title">{t("discoveries.0.name")}</h2>
            <h3 className="pd-sub">{t("discoveries.0.title")}</h3>
          </header>

          <section className="pd-card">
            <p>{t("discoveries.0.paragraphs.0")}</p>
          </section>

          <section className="pd-card">
            <p>{t("discoveries.0.paragraphs.1")}</p>
          </section>

          <section className="pd-card grid2">
            <p>{t("discoveries.0.paragraphs.2")}</p>
          </section>

          <section className="pd-highlight">
            <p>
              {t("discoveries.0.paragraphs.3")}
            </p>
          </section>

        </main>
      </article>
    </section>
  );
}

export default DescubrimientoDescovery;