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

const timelineData = [
  { year: 2017, image: dino1 },
  { year: 2018, image: dino2 },
  { year: 2019, image: dino3 },
  { year: 2020, image: dino4 },
  { year: 2021, image: dino5 },
  { year: 2022, image: dino6 },
  { year: 2023, image: dino7 },
  { year: 2024, image: dino8 },
  { year: 2025, image: dino9 }
];

export default function LineaTiempo() {
  const { t } = useTranslation();
  const trackData = useMemo(() => [...timelineData, ...timelineData], []);

  return (
    <section className="timeline-section" aria-label="Major Discoveries Timeline">
      <h2 className="timeline-title">{t("timeline.title")}</h2>

      <div className="timeline-viewport">
        <div className="timeline-line" aria-hidden="true" />

        <div className="timeline-track">
          {trackData.map((item, index) => (
            <div key={`${item.year}-${index}`} className="timeline-item" role="group" aria-label={`Año ${item.year}`}>
              
              <div className={`timeline-info ${index % 2 === 0 ? "top" : "bottom"}`}>
                <span className="timeline-year">{item.year}</span>
              </div>

              <div className="timeline-node">
                <img src={item.image} alt={`Campaña ${item.year}`} />
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