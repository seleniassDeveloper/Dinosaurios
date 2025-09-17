// src/pages/Outperforms.jsx
import React from "react";
import "../css/outPerforms.css";
import { useTranslation } from "react-i18next";
import mainImg from "../ImgCampanas/mainP.JPG";
import cuadro from "../ImgCampanas/cuadro.jpg";
import cuadro2 from "../ImgCampanas/cuadro2.jpg";
import cuadro3 from "../ImgCampanas/cuadro3.jpg";

export function Outperforms() {
  const { t } = useTranslation();

  return (
    <main className="whyar-page dino-theme container">
      {/* Title */}
      <header className="mb-3 text-center">
        <h1 className="whyar-title">{t("outPerfoms.why")}</h1>
      </header>

      {/* Top grid (image + right column) */}
      <section className="sectionsss">
        {/* Left: hero + thumbs */}
        <div className="col-lg-7">
          <figure className="whyar-hero-img dino-card">
            <img src={cuadro3} alt="Fieldwork main" loading="lazy" />
          </figure>

          <div className="whyar-thumbs">
            <img src={cuadro} alt="thumb 1" loading="lazy" />
            <img src={cuadro2} alt="thumb 2" loading="lazy" />
            <img src={mainImg} alt="thumb 3" loading="lazy" />
            <span></span>
          </div>
        </div>

      </section>

      {/* Bottom: Fun fact + compare */}
      <section className=" d-none mt-5">
        <div className="">
          <div className="">
            <div className="">
              <p className="m-0">
                <b className="me-2">{t("outPerfoms.fun")}:</b>
                {t("outPerfoms.factdes")}
              </p>
            </div>

            <div className="">
              {/* US & Europe */}
              <article className="" data-accent="us">
                <header className="">
                  <span className="flag">{t("compare.us_eu.flag")}</span>
                  <div className="head-text">
                    <h4>{t("compare.us_eu.title")}</h4>
                  </div>
                </header>

                <div className="">
                  <div className="">
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

                  <div className="stat">
                    <span className="clabel">{t("compare.us_eu.stats.discoveryRate.label")}</span>
                    <p className="cvalue">{t("compare.us_eu.stats.discoveryRate.value")}</p>
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
              <article className="" data-accent="patagonia">
                <header className="">
                  <span className="flag">{t("compare1.patagonia.flag")}</span>
                  <div className="head-text">
                    <h4>{t("compare1.patagonia.title")}</h4>
                  </div>
                </header>

                <div className="compare-body">
                  <div className="stat">
                    <span className="clabel">{t("compare1.patagonia.stats.cost.label")}</span>
                    <div className="chips">
                      {t("compare1.patagonia.stats.cost.chips", { returnObjects: true }).map(
                        (chip, idx) => (
                          <span key={idx} className="chip emphasis">{chip}</span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="stat">
                    <span className="clabel">{t("compare1.patagonia.stats.discoveryRate.label")}</span>
                    <p className="cvalue">{t("compare1.patagonia.stats.discoveryRate.value")}</p>
                  </div>

                  <div className="stat">
                    <span className="clabel">{t("compare1.patagonia.stats.notes.label")}</span>
                    <ul className="bullets">
                      {t("compare1.patagonia.stats.notes.bullets", { returnObjects: true }).map(
                        (note, idx) => <li key={idx}>{note}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            <div className="fossil-sep" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Outperforms;