import React from "react";
// import maip1 from "../../src/ImgCampanas/expedition.jpeg";
// import maip2 from "../../src/imgCampanas/expedition2.jpg";

import "../css/outPerforms.css";
import { useTranslation } from "react-i18next";
import mainImg from "../ImgCampanas/mainP.JPG";
import cuadro from "../ImgCampanas/cuadro.jpg";
import cuadro2 from "../ImgCampanas/cuadro2.jpg";
import cuadro3 from "../ImgCampanas/cuadro3.jpg";

export function Outperforms() {
  const { t } = useTranslation();
  return (
    <main className="whyar-page py-4 dino-theme container">
      {/* Title */}
      <header className="mb-3 text-center">
        <h1 className="whyar-title">{t("outPerfoms.why")}</h1>
      </header>

      {/* Top grid (image + right column) */}
      <section className="row g-4 align-items-start">
        {/* Left: big image + thumbnails */}
        <div className="col-lg-7">
          <div className="whyar-hero-img">
            <img src={mainImg} alt="Fieldwork main" />
          </div>
          <div className="whyar-thumbs mt-3">
            <img src={cuadro} alt="thumb 1" />
            <img src={cuadro2} alt="thumb 2" />
            <img src={cuadro3} alt="thumb 3" />
          </div>
        </div>

        {/* Right: text meta + CTA */}
        <div className="col-lg-5">
          {/* Mini–stack (mismo texto) */}
          <div className="whyar-stats ">
            <div className="stat-chip ">
              <span className="stat-kicker">{t("outPerfoms.p1")}</span>
            </div>
            <p className="m-0">{t("outPerfoms.p2")}</p>
            <p className="m-0"></p>
            <p className="accent m-0">{t("outPerfoms.p3")}</p>
          </div>

          {/* Meta pills */}
          <div className="whyar-meta">
            <div className="whyar-meta-row">
              <span className="whyar-pill">
                {t("outPerfoms.discovery.0.pill")}
              </span>
              <span className="whyar-meta-label">
                {t("outPerfoms.discovery.0.label")}
              </span>
              {/* <p>{t("outPerfoms.discovery.0.description")}</p> */}
            </div>

            <div className="whyar-meta-row">
              <span className="whyar-pill">
                {t("outPerfoms.discovery.1.pill")}
              </span>
              <span className="whyar-meta-label">
                {t("outPerfoms.discovery.1.label")}
              </span>
              {/* <p>{t("outPerfoms.discovery.1.description")}</p> */}
            </div>

            <div className="whyar-meta-row">
              <span className="whyar-pill">
                {t("outPerfoms.discovery.2.pill")}
              </span>
              <span className="whyar-meta-label">
                {t("outPerfoms.discovery.2.label")}
              </span>
              {/* <p>{t("outPerfoms.discovery.2.description")}</p> */}
            </div>

            <div className="whyar-meta-row">
              <span className="whyar-pill">
                {t("outPerfoms.discovery.3.pill")}
              </span>
              <span className="whyar-meta-label">
                {t("outPerfoms.discovery.3.label")}
              </span>
              {/* <p>{t("outPerfoms.discovery.3.description")}</p> */}
            </div>
          </div>

          {/* CTA */}
          <div className="d-flex align-items-center gap-2 mt-3">
            <button className="btn-cta">{t("navbar.donate")}</button>
          </div>
        </div>
      </section>

      {/* Bottom: Description + compare */}
      <section className="row g-4 align-items-start mt-5">
        <div className="col-lg-12">
          <div className="whyar-block dino-card">
            {/* Fun Fact */}
            <div className="whyar-funfact v2 dino-funfact">
              <p className="m-0">
                <b className="me-2">{t("outPerfoms.fun")}:</b>
                {t("outPerfoms.factdes")}
              </p>
            </div>

            {/* Comparativa */}
            <div className="whyar-columns">
              {/* US & Europe */}
           <article className="compare-card v2 dino-card" data-accent="us">
  <header className="compare-head v2 dino-head">
    <span className="flag">{t("compare.us_eu.flag")}</span>
    <div className="head-text">
      <h4>{t("compare.us_eu.title")}</h4>
    </div>
  </header>

  <div className="compare-body">
    <div className="stat">
      <span className="clabel">{t("compare.us_eu.stats.cost.label")}</span>
      <div className="chips">
        <span className="chip">{t("compare.us_eu.stats.cost.chips.0")}</span>
        <span className="chip">{t("compare.us_eu.stats.cost.chips.1")}</span>
        <span className="chip">{t("compare.us_eu.stats.cost.chips.2")}</span>
      </div>
      <div className="notes tiny">
        {t("compare.us_eu.stats.cost.notes")}
      </div>
    </div>

    <div className="divider"></div>

    <div className="stat">
      <span className="clabel">{t("compare.us_eu.stats.discoveryRate.label")}</span>
      <p className="cvalue">
        {t("compare.us_eu.stats.discoveryRate.value")}
      </p>
    </div>

    <div className="stat">
      <span className="clabel">{t("compare.us_eu.stats.notes.label")}</span>
      <ul className="bullets">
        <li>{t("compare.us_eu.stats.notes.bullets.0")}</li>
        <li>{t("compare.us_eu.stats.notes.bullets.1")}</li>
        <li>{t("compare.us_eu.stats.notes.bullets.2")}</li>
      </ul>
    </div>
  </div>
</article>

              {/* Patagonia */}
           <article
  className="compare-card v2 dino-card"
  data-accent="patagonia"
>
  <header className="compare-head v2 dino-head">
    <span className="flag">{t("compare1.patagonia.flag")}</span>
    <div className="head-text">
      <h4>{t("compare1.patagonia.title")}</h4>
    </div>
  </header>

  <div className="compare-body">
    {/* Cost */}
    <div className="stat">
      <span className="clabel">{t("compare1.patagonia.stats.cost.label")}</span>
      <div className="chips">
        {t("compare1.patagonia.stats.cost.chips", { returnObjects: true }).map(
          (chip, index) => (
            <span key={index} className="chip emphasis">{chip}</span>
          )
        )}
      </div>
    </div>

    <div className="divider"></div>

    {/* Discovery Rate */}
    <div className="stat">
      <span className="clabel">{t("compare1.patagonia.stats.discoveryRate.label")}</span>
      <p className="cvalue">{t("compare1.patagonia.stats.discoveryRate.value")}</p>
    </div>

    {/* Notes */}
    <div className="stat">
      <span className="clabel">{t("compare1.patagonia.stats.notes.label")}</span>
      <ul className="bullets">
        {t("compare1.patagonia.stats.notes.bullets", { returnObjects: true }).map(
          (note, index) => (
            <li key={index}>{note}</li>
          )
        )}
      </ul>
    </div>
  </div>
</article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
