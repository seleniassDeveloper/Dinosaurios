// src/pages/MediaKit.jsx
import React from "react";
import "./MediaKit.css";
import { useTranslation } from "react-i18next";

// Imágenes locales del Media Kit
import mediakitEn from "../../src/ImgCampanas/MediaKit(ENG).png";
import mediaKitEs from "../../src/ImgCampanas/MediaKitSPANISH.png";

export default function MediaKit() {
  const { t } = useTranslation();

  const items = [
    {
      id: "mk-en",
      src: mediakitEn,
      fileName: "APASUR-MediaKit-EN.png",
      alt: "APASUR Media Kit (English version)",
      caption: "Media Kit (English)",
      description:
        "Haz clic para descargar la versión en inglés del Media Kit.",
      tag: "EN",
    },
    {
      id: "mk-es",
      src: mediaKitEs,
      fileName: "APASUR-MediaKit-ES.png",
      alt: "APASUR Media Kit (Español)",
      caption: "Media Kit (Español)",
      description:
        "Haz clic para descargar la versión en español del Media Kit.",
      tag: "ES",
    },
  ];

  const handleDownload = (src, fileName) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = fileName || "download";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section className="media-kit container" aria-labelledby="mediakit-title">
      <header className="mk-head">
        <h2 id="mediakit-title" className="mk-title">
          {t("press.title")?.toUpperCase?.() || "MEDIA KIT – IMÁGENES DESCARGABLES"}
        </h2>
      
      </header>

      <div className="mk-grid">
        {items.map((item, i) => (
          <article key={item.id} className="mk-card">
            <button
              className={`mk-sticker ${i % 2 ? "tilt-l" : "tilt-r"}`}
              onClick={() => handleDownload(item.src, item.fileName)}
              aria-label={`Descargar ${item.caption}`}
            >
              <figure className="mk-figure">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="mk-caption">
              
               
                </figcaption>

                {/* Chip "Descargar" */}
                <span className="mk-chip" aria-hidden="true">
                  Descargar
                </span>
              </figure>

              {/* Cinta adhesiva */}
              <span className="mk-tape" aria-hidden="true" />
            </button>

            <div className="mk-meta">
              {/* <p className="mk-desc">{item.description}</p> */}
              <div className="mk-actions d-flex justify-content-center">
                <a
                  href={item.src}
                  download={item.fileName}
                  className="mk-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Descargar {item.caption}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}