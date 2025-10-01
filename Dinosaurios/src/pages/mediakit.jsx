// src/pages/MediaKit.jsx
import React from "react";
import "./MediaKit.css";
import { useTranslation } from "react-i18next";

// Imágenes locales (para las tarjetas)
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
      description: "Click to open the English version of the Media Kit.",
      tag: "ENGLISH",
      driveUrl:
        "https://drive.google.com/file/d/1Nw6Dti8UsJNoKkjwWLY6Iyd8SJmGThO8/view",
    },
    {
      id: "mk-es",
      src: mediaKitEs,
      fileName: "APASUR-MediaKit-ES.png",
      alt: "APASUR Media Kit (Español)",
      caption: "Media Kit (Español)",
      description: "Haz clic para abrir la versión en español del Media Kit.",
      tag: "ESPAÑOL",
      driveUrl:
        "https://drive.google.com/file/d/1j3QJclvWDTpsXKJO6nX5Ehh252S0_i97/view",
    },
  ];

  const handleOpen = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="media-kit container" aria-labelledby="mediakit-title">
      <header className="mk-head">
        <h2 id="mediakit-title" className="mk-title">
          {t("press.title")?.toUpperCase?.() ||
            "MEDIA KIT – IMÁGENES DESCARGABLES"}
        </h2>
      </header>

      <div className="mk-grid">
        {items.map((item, i) => {
          const isEnglish = item.tag === "ENGLISH";
          const verb = isEnglish ? "Open " : "Abrir ";

          return (
            <article key={item.id} className="mk-card">
              <button
                className={`mk-sticker ${i % 2 ? "tilt-l" : "tilt-r"}`}
                onClick={() => handleOpen(item.driveUrl)}
                aria-label={`${verb}${item.caption}`}
              >
                <figure className="mk-figure">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption className="mk-caption">
                    {/* Puedes mostrar el caption o dejarlo vacío si no lo quieres visible */}
                  </figcaption>

                  {/* Chip con idioma (sin banderas) */}
                  <span className="mk-chip" aria-hidden="true">
                    {verb}
                    {item.tag}
                  </span>
                </figure>

                {/* Cinta adhesiva */}
                <span className="mk-tape" aria-hidden="true" />
              </button>

          
            </article>
          );
        })}
      </div>
    </section>
  );
}