// src/pages/CurrentProjects.jsx
import React from "react";
import "../css/currentProjects.css";

// Imágenes en orden
import uno from "../../src/ImgCampanas/1.jpeg";
import dos from "../../src/ImgCampanas/2.png";
import tres from "../../src/ImgCampanas/10.JPG";
import cuatro from "../../src/ImgCampanas/4.png";
import cinco from "../../src/ImgCampanas/5.jpeg";
import seis from "../../src/ImgCampanas/6.png";

export function CurrentProjects() {
  return (
    <section className="cp-wrap dino-theme">
      <header className="cp-hero">
        <h2 className="cp-title">
          Groundbreaking Fossils Under Study Today, Preparing To Reshape Tomorrow’s Science
        </h2>
        <p className="cp-kicker">THE NEXT CHAPTER OF DISCOVERY</p>
      </header>

      <div className="cp-grid">
        {/* Card 1 - Theropod Nest */}
        <article
          className="cp-card dino-card"
          style={{ backgroundImage: `url(${uno})` }}
          data-status="unpublished"
        >
          <div className="cp-overlay">
            <h3 className="cp-heading">The First Theropod Nest in South America</h3>
            <p className="cp-text">
              90 million years old – seven eggs and the remains of a snake curled around them.
              Was it a predator or a nest inhabitant? Research is underway.
            </p>
          </div>
        </article>

        {/* Card 2 - Bonapartenykus */}
        <article
          className="cp-card dino-card"
          style={{ backgroundImage: `url(${dos})` }}
          data-status="unpublished"
        >
          <div className="cp-overlay">
            <h3 className="cp-heading">60+ New Bones of Bonapartenykus</h3>
            <p className="cp-text">
              A bizarre short-armed dinosaur, will help complete the skeletal reconstruction of this enigmatic species.
            </p>
          </div>
        </article>

        {/* Card 3 - Carnivorous Dino with Soft Tissues */}
        <article className="cp-card dino-card"  style={{ backgroundImage: `url(${tres})` }} data-status="unpublished">
          <div className="cp-overlay">
            <h3 className="cp-heading">
              A New Carnivorous Dinosaur Species With Preserved Muscles and Blood Tissues
            </h3>
            <p className="cp-text">
              The first evidence of soft tissues in South American dinosaurs. Publication expected by late 2025.
            </p>
          </div>
        </article>

        {/* Card 4 - Patagopelta */}
        <article
          className="cp-card dino-card"
          style={{ backgroundImage: `url(${cuatro})` }}
          data-status="unpublished"
        >
          <div className="cp-overlay">
            <h3 className="cp-heading">60+ New Bones of Patagopelta</h3>
            <p className="cp-text">
              A small-size Ankylosaurid and one of the most complete of the continent.
            </p>
          </div>
        </article>

        {/* Card 5 - Raptor Species */}
        <article
          className="cp-card dino-card"
          style={{ backgroundImage: `url(${cinco})` }}
          data-status="unpublished"
        >
          <div className="cp-overlay">
            <h3 className="cp-heading">A New Raptor Species from Patagonia</h3>
            <p className="cp-text">Adding key insights into high-latitude ecosystems.</p>
          </div>
        </article>

        {/* Card 6 - Saber-Toothed Marsupial */}
        <article
          className="cp-card dino-card"
          style={{ backgroundImage: `url(${seis})` }}
          data-status="unpublished"
        >
          <div className="cp-overlay">
            <h3 className="cp-heading">A Saber-Toothed Marsupial</h3>
            <p className="cp-text">
              The size of a lion with 20 cm canines, dating back 20 million years. Publication expected by late 2025.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CurrentProjects;