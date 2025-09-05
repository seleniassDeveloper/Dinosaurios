import "bootstrap/dist/css/bootstrap.min.css";
import "../css/expedition.css";

import maip1 from "../../src/ImgCampanas/discoveryImg/discovery5.jpeg";
import maip2 from "../../src/imgCampanas/discoveryImg/discovery6.webp";
import trex1 from "../../src/ImgCampanas/discoveryImg/discovery7.png";;
import trex2 from "../../src/ImgCampanas/expedition.jpeg";
import esqueleto from "../../src/ImgCampanas/esqueletodiscovery.jpg";


import disc1 from "../../src/ImgCampanas/discoveryImg/discovery7.png";
import disc2 from "../../src/ImgCampanas/discoveryImg/discovery8.jpg";
import disc4 from "../../src/ImgCampanas/discoveryImg/discovery9.jpg";

// import carusel1 from "../../src/ImgCampanas/discoveryImg/carousel1.JPG";
// import carusel2 from "../../src/ImgCampanas/discoveryImg/carousel2.jpg";
// import carusel3 from "../../src/ImgCampanas/discoveryImg/carousel3.jpg";
// import carusel4 from "../../src/ImgCampanas/discoveryImg/carousel4.jpg";






import LineaTiempo from "../components/lineaTiempo";
import { Outperforms } from "../components/outperforms";
import { CurrentProjects } from "../components/currentProjects";
import { useTranslation } from "react-i18next";

export default function Discoveries() {
  const { t } = useTranslation();

  return (
    <>
      {/* ===== 1) HERO con fondo ===== */}
      <section
        className="disc-hero-bg"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${esqueleto})`,
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-extrabold mb-3 text-white lh-tight">
            {t("discovery.hero.title1").toUpperCase()} <br />
            {t("discovery.hero.title2").toUpperCase()}
          </h1>
          <h2 className="h5 text-white-50 fw-semibold mb-3">
            {t("discovery.hero.subtitle_line1")} <br />
            {t("discovery.hero.subtitle_line2")}
          </h2>
          <p className="lead text-white mb-0">
            {t("discovery.hero.lead")}
          </p>
        </div>
      </section>

      {/* ===== Statement ===== */}
      <section className="disc-statement text-center py-5">
        <div className="container">
          <p className="statement-text">{t("discovery.statement.text")}</p>
        </div>
      </section>

      {/* ===== 2) Discovery highlight #1 + cascada ===== */}
      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-lg-6">
            <p className="text-uppercase small fw-bold text-warning mb-2">
              {t("discovery.maip.label")}
            </p>
            <h2 className="display-6 fw-bold mb-1 text-dark">
              {t("discovery.maip.title").split(" ")[0]}{" "}
              <span className="text-success">
                {t("discovery.maip.title").split(" ")[1]}
              </span>
            </h2>
            <h3 className="h5 fw-semibold text-dark-50">
              {t("discovery.maip.subtitle")}
            </h3>

            <div className="mt-4 text-body-secondary">
              <p>{t("discovery.maip.p1")}</p>
              <p>{t("discovery.maip.p2")}</p>
              <p>{t("discovery.maip.p3")}</p>
              <p className="mb-0">{t("discovery.maip.p4")}</p>
            </div>
          </div>

          {/* Cascada de imágenes */}
          <div className="col-lg-6">
            <div className="cascade">
              
              <img className="cascade-img img-a" src={maip2} alt="Cover A" />
              <img className="cascade-img img-b" src={trex1} alt="Cover B" />
              <img className="cascade-img img-c" src={trex2} alt="Cover C" />
              <img className="cascade-img img-d" src={maip1} alt="Cover D" />
              <div className="cascade-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3) Discovery highlight #2 — Notobatrachus ===== */}
      <section className="container py-5 notob-section ">
        <div className="row align-items-start g-5">
          <div className="col-lg-6 ">
            <div className="notob-gallery">
              <img src={disc1} alt="Notobatrachus support 1" />
              <img src={disc2} alt="Notobatrachus support 2" />
              <img src={disc4} alt="Notobatrachus support 3" />
            </div>
          </div>

          <div className="col-lg-6">
            <p className="text-uppercase small fw-bold text-warning mb-2">
              {t("discovery.notob.label")}
            </p>
            <h2 className="display-6 fw-bold mb-1 text-dark">
              {t("discovery.notob.title")}
            </h2>
            <h3 className="h5 fw-semibold text-dark-50">
              {t("discovery.notob.subtitle")}
            </h3>
            <p className="fw-semibold text-secondary mb-3">
              {t("discovery.notob.tag")}
            </p>

            <div className="text-body-secondary">
              <p>{t("discovery.notob.p1")}</p>
              <p>{t("discovery.notob.p2")}</p>
              <p>{t("discovery.notob.p3")}</p>
              <p className="mb-2">{t("discovery.notob.p4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4) Discovery highlight #4 — Patagorhynchus ===== */}
      <section className="container py-5 patago-section">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="text-uppercase small fw-bold text-warning mb-2">
              {t("discovery.patago.label")}
            </p>
            <h2 className="display-6 fw-bold mb-1 text-dark">
              {t("discovery.patago.title")}
            </h2>
            <h3 className="h5 fw-semibold text-dark-50">
              {t("discovery.patago.subtitle")}
            </h3>

            <div className="mt-4 text-body-secondary">
              <p>{t("discovery.patago.p1")}</p>
              <p>{t("discovery.patago.p2")}</p>
              <p>{t("discovery.patago.p3")}</p>
              <p className="mb-2">{t("discovery.patago.p4")}</p>
              {/* <p className="text-muted small mb-0">
                {t("discovery.patago.credit")}
              </p> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div id="patagoCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner rounded shadow">
                <div className="carousel-item active">
                  <img src={maip2} className="d-block w-100 carousel-img" alt="Patagorhynchus image 1" />
                </div>
                <div className="carousel-item">
                  <img src={trex1} className="d-block w-100 carousel-img" alt="Patagorhynchus image 2" />
                </div>
                <div className="carousel-item">
                  <img src={trex2} className="d-block w-100 carousel-img" alt="Patagorhynchus image 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#patagoCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#patagoCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>
        <LineaTiempo />
      </div>

      {/* ===== 5) Why Argentina Outperforms ===== */}
      <Outperforms />

      <CurrentProjects />
    </>
  );
}