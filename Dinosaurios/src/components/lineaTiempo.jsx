// src/pages/LineaTiempo.jsx
import React, { useMemo } from "react";
import "../css/Timeline.css";
import { useTranslation } from "react-i18next";

import dino1 from "../ImgCampanas/2017.png";
import dino2 from "../ImgCampanas/2018.png";
import dino3 from "../ImgCampanas/2019.png";
import dino4 from "../ImgCampanas/2020.png";
import dino5 from "../ImgCampanas/2021.png";
import dino6 from "../ImgCampanas/2022.png";
import dino7 from "../ImgCampanas/2023.png";
import dino8 from "../ImgCampanas/2024.png";
import dino9 from "../ImgCampanas/2025.png";


const images = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8, dino9];

export default function LineaTiempo() {
  const { t } = useTranslation();

  // Creamos un array de 14 elementos con los datos traducidos
  const timelineData = useMemo(() => {
    return Array.from({ length: 14 }, (_, index) => ({
      year: t(`timeline.items.${index}.year`),
      title: t(`timeline.items.${index}.title`),
      description: t(`timeline.items.${index}.description`),
      image: images[index % images.length], // asigna imágenes cíclicamente
    }));
  }, [t]);

  // Duplicamos para animación infinita
  const trackData = [...timelineData, ...timelineData];

  return (
    <section className="timeline-section" aria-label={t("timeline.title")}>
      <h2 className="timeline-title">{t("timeline.title")}</h2>

      <div className="timeline-viewport">
        <div className="timeline-line" aria-hidden="true" />

        <div className="timeline-track">
          {trackData.map((item, index) => (
            <div
              key={`${item.year}-${index}`}
              className="timeline-item"
              role="group"
              aria-label={`${item.year} ${item.title}`}
            >
              <div className="timeline-info top">
                <h3>{item.year}</h3>
                <strong>{item.title}</strong>
              </div>

              <div className="timeline-node">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="timeline-info bottom">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-left" aria-hidden="true" />
        <div className="fade-right" aria-hidden="true" />
      </div>
    </section>
  );
}