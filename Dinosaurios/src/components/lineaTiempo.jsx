// src/pages/LineaTiempo.jsx
import React, { useMemo } from "react";
import "../css/Timeline.css";

import dino1 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio.png";
import dino2 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio2.jpeg";
import dino3 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio3.png";
import dino4 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio4.png";
import dino5 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio5.png";

const timelineData = [
  { year: "2016", image: dino1, title: "Taurovenator", description: "Apex predator, 11m long. Found in Río Negro." },
  { year: "2019", image: dino3, title: "Maip macrothorax", description: "Largest megaraptor. 10m long, 5 tons. Found in El Calafate." },
  { year: "2023", image: dino2, title: "Patagorhynchus", description: "Oldest platypus fossil in South America. 70 million years old." },
  { year: "2025", image: dino4, title: "Antarctic Project", description: "First vertebrate fossils uncovered in Antarctica by our team." },
  { year: "2027", image: dino5, title: "Next Expedition", description: "New sites in Southern Patagonia to be explored in 2027–2028." },

  // 👉 Agrega más nodos si quieres:
  { year: "2028", image: dino1, title: "High-Latitude Raptor", description: "New raptor species; key high-latitude ecosystem clues." },
  { year: "2029", image: dino3, title: "Theropod Nest", description: "First theropod nest in South America published." },
];

export default function LineaTiempo() {
  // Duplicamos el array para un bucle visual sin cortes
  const trackData = useMemo(() => [...timelineData, ...timelineData], []);

  return (
    <section className="timeline-section" aria-label="Major Discoveries Timeline">
      <h2 className="timeline-title">Major Discoveries by Year</h2>

      <div className="timeline-viewport">
        {/* Línea base */}
        <div className="timeline-line" aria-hidden="true" />
        {/* Pista animada */}
        <div className="timeline-track">
          {trackData.map((item, index) => (
            <div key={`${item.year}-${index}`} className="timeline-item" role="group" aria-label={`${item.year} ${item.title}`}>
              <div className={`timeline-info ${index % 2 === 0 ? "top" : "bottom"}`}>
                <h3>{item.year}</h3>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
              <div className="timeline-node">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
        {/* Gradientes laterales para desvanecer los bordes */}
        <div className="fade-left" aria-hidden="true" />
        <div className="fade-right" aria-hidden="true" />
      </div>
    </section>
  );
}