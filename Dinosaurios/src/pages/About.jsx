// src/pages/About.jsx
import React from "react";
import "../css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Grupo from "../../src/ImgCampanas/210.jpg";

export default function About() {


  return (
    <section className="about-team-section">
      <div className="container">
        {/* Hero Section */}
        <div className="team-photo-hero">
          <img src={Grupo} alt="Equipo APASUR" className="team-photo" />
          <div className="hero-overlay-text">
            <h1>Scientific Exploration at the End of the World</h1>
          </div>
        </div>

        {/* About APASUR */}
        <div className="apasur-intro">
          <h2>Who Are We?</h2>
          <p>
            <strong>APASUR (La Asociación Paleontológica del Sur)</strong> is a non-profit
            organization created by the team of paleontologists and professionals from
            <strong> (LACEV-MACN)</strong> Laboratorio de Anatomía Comparada y Evolución de los Vertebrados del Museo Argentino de Ciencias Naturales.
          </p>
          <p>
            Its creation responds to the need for research promotion, investigation, public
            communication, and conservation projects for the paleontological heritage of Argentina and South America.
          </p>
        </div>

        {/* Team Summary */}
        <div className="team-summary">
          <h3>Our Team</h3>
          <p>
            We are one of the top Paleontology teams in Argentina, consisting of <strong>11+ researchers</strong>, <strong>5+ professional technicians</strong>, <strong>2+ science communicators</strong>, and <strong>10+ students</strong> based in the Bernardino Rivadavia Museum of Natural Science (Buenos Aires).
          </p>
          <p>
            With <strong>400+ research papers</strong> published in national & international journals and over <strong>20 years of experience</strong>, our team has discovered and named more than <strong>27% of all new dinosaur species in South America between 2005 - 2025</strong>.
          </p>
        </div>

        {/* Excavation Impact */}
        <div className="excavation-metrics">
          <p className="italic-highlight">
            We excavate world-class discoveries at 1/30th - 1/100th the cost with the highest success rate in the world.
          </p>
          <p className="bold-metric">
            70-80% OF OUR EXCAVATION CAMPAIGNS RESULTED IN NEW DINOSAUR SPECIES OR BREAKTHROUGH DISCOVERIES
          </p>
          <div className="cta-button">
            <button>SEE MORE</button>
          </div>
        </div>

        {/* Antarctica Section */}
        <div className="antarctica-section">
          <h3>Antarctica Excavations</h3>
          <p>
            We have signed an exclusive five-year agreement with the Argentine government to conduct paleontological expeditions in Antarctica <strong>(2027–2032)</strong> in partnership with the Argentine Antarctic Institute and CONICET.
          </p>
          <p>
            <strong>OUR MISSION:</strong> UNCOVER NEW DINOSAUR FOSSILS THAT HAVE LIVED 70 MILLION YEARS AGO ON THE FROZEN CONTINENT.
          </p>
        </div>

     

        {/* Community Impact */}
        <div className="team-impact">
          <h3>Community Impact & Global Support</h3>
          <p>
            Supported by <strong>National Geographic</strong>, <strong>Explorers Club</strong>, <strong>Jurassic Foundation</strong> and others, we’ve led 200+ science outreach activities, 50+ talks, and built collaborations with museums and international TV networks.
          </p>
          <p>
            Current research includes: a new dinosaur with preserved soft tissue, a theropod nest, a saber-toothed marsupial, and over 60 new bones from known species.
          </p>
        </div>
      </div>
    </section>
  );
}