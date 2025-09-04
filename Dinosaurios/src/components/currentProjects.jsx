import React from "react";
import "../css/currentProjects.css";
// import currentProject from "../../src/ImgCampanas/descubrimientos/currentProject.png"

export function CurrentProjects() {
  return (
    <section className="cp-wrap dino-theme">
      <header className="cp-hero">
        <h2 className="cp-title">
          Groundbreaking fossils under study today, the stories the world will hear tomorrow
        </h2>
        <p className="cp-kicker">THE NEXT CHAPTER OF DISCOVERY</p>
      </header>

      <div className="cp-grid">
        {/* Card 1 */}
        <article className="cp-card dino-card" data-status="unpublished">
          <p className="cp-text">
            90 million years old - seven eggs and the remains of a snake curled around them. Was it a predator or a nest inhabitant? Research is underway.
          </p>
        </article>

        {/* Card 2 */}
        <article className="cp-card dino-card" data-status="unpublished">
          <p className="cp-text">
            A new carnivorous dinosaur species with preserved muscles and blood tissues
          </p>
          <p className="cp-text">
            The first evidence of soft tissues in South American dinosaurs. Publication expected by late 2025
          </p>
        </article>

        {/* Card 3 */}
        <article className="cp-card dino-card" data-status="unpublished">
          <p className="cp-text">
            The first theropod nest in South AmericA
          </p>
          <p className="cp-text">1.09.2025</p>
          <p className="cp-note">Artwork by Mehmet Turgut Kirkgoz</p>
        </article>

        {/* Card 4 */}
        <article className="cp-card dino-card" data-status="unpublished">
          <p className="cp-text">
            A new raptor species from Patagonia
          </p>
          <p className="cp-text">
            Adding key insights into high-latitude ecosystems.
          </p>
        </article>
      </div>
    </section>
  );
}