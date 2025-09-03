// src/pages/componentes/ImpactoComunidad.jsx
import React from "react";
import "../css/impact.css";
import impactoImg from "../../src/ImgCampanas/impacto.png";

export default function Impact() {
  return (
    <section className="impacto-comunidad">
      <div className="impacto-contenedor">
        <div className="impacto-texto">
          <h2 className="impacto-titulo">SCIENCE COMMUNITY IMPACT</h2>
          <p>
            With over <strong>200 outreach initiatives</strong> between 2005 and 2025, our team has made science
            accessible to the public and contributed to educational development.
          </p>
          <ul>
            <li><strong>50+ talks and lectures</strong> delivered in schools, universities, and cultural events.</li>
            <li><strong>11 workshops and training sessions</strong> for teachers and professionals on innovative tools for teaching paleontology.</li>
            <li><strong>12 articles published in renowned outlets</strong>, including National Geographic and specialized magazines.</li>
            <li><strong>Broad media presence</strong>: documentaries, television appearances on Canal Encuentro (Argentina), NHK (Japan), National Geographic Kids (USA), and Paka Paka (Argentina).</li>
            <li><strong>100+ news features</strong> across international media in multiple languages.</li>
            <li><strong>3 books published</strong> on paleontology and its history, with a fourth one currently in production about the dinosaurs of Patagonia.</li>
            <li><strong>50+ life-sized skeletal replicas</strong> created for museums in Japan, the United States, Chile, and Argentina.</li>
          </ul>
        </div>
        <div className="impacto-imagen">
          <img src={impactoImg} alt="Dinosaur skeleton in museum" />
        </div>
      </div>
    </section>
  );
}