import React from "react";
import { useTranslation } from "react-i18next";
import "../css/ParrafoWelcome.css";
import dinoBrush from "../../ImgCampanas/portadaNature.png";
import dinoBrush2 from "../../ImgCampanas/portadaNature2.jpeg";
import dinoBrush3 from "../../ImgCampanas/portadaNature3.jpeg";
import dinoBrush4 from "../../ImgCampanas/portadaNature4.jpeg";

export default function ParrafoWelcome() {
  const { t } = useTranslation();

  return (
    <section className="parrafo-welcome-grid container">
      <div className="parrafo-texto">
        <h2 className="parrafo-titulo">
          {t("welcome.title")}{" "}
          <span className="underline">{t("welcome.titleHighlight")}</span>
        </h2>
        <p className="parrafo-descripcion">{t("welcome.p1")}</p>
        <p className="parrafo-descripcion">
          {t("welcome.p2")}{" "}
          <u>
            <span className="green-bold">{t("welcome.p4")}</span>
          </u>{" "}
        </p>
      </div>

      {/* Desktop: imágenes en cascada */}
      <div className="parrafo-imagenes desktop-only">
        <img
          src={dinoBrush}
          className="cascada-img img1"
          alt="Nature cover 1"
        />
        <img
          src={dinoBrush2}
          className="cascada-img img2"
          alt="Nature cover 2"
        />
        <img
          src={dinoBrush3}
          className="cascada-img img3"
          alt="Nature cover 3"
        />
        <img
          src={dinoBrush4}
          className="cascada-img img4"
          alt="Nature cover 4"
        />
      </div>

      {/* Mobile: carrusel Bootstrap */}
      <div className="carousel-mobile-only">
        <div
          id="carouselNature"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Mobile: carrusel Bootstrap automático */}
          <div className="carousel-mobile-only">
            <div
              id="carouselNature"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="2500"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={dinoBrush}
                    className="d-block w-100 carousel-img"
                    alt="Nature cover 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={dinoBrush2}
                    className="d-block w-100 carousel-img"
                    alt="Nature cover 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={dinoBrush3}
                    className="d-block w-100 carousel-img"
                    alt="Nature cover 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={dinoBrush4}
                    className="d-block w-100 carousel-img"
                    alt="Nature cover 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
