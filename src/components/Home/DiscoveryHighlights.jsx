// src/components/Home/DiscoveryHighlights.jsx
import React, { useState } from "react";
import "../../css/sections/DiscoveryHighlights.css";
import Tyrannotitan from "../../ImgCampanas/encontrados/Tyrannotitan.jpeg"; // Imagen provisoria

const discoveries = [
  {
    name: "Maip macrothorax",
    image: Tyrannotitan,
    description: "Depredador gigante de 10 metros hallado en el sur extremo de Argentina.",
    year: 2021,
  },
  {
    name: "Patagorhynchus",
    image: Tyrannotitan,
    description: "El primer ornitorrinco prehistórico de América del Sur. Descubrimiento inédito.",
    year: 2023,
  },
  {
    name: "Taurovenator",
    image: Tyrannotitan,
    description: "Dinosaurio carnívoro con cuernos, nombrado por su apariencia de toro.",
    year: 2016,
  },
  {
    name: "Renacuajo más antiguo",
    image: Tyrannotitan,
    description: "El registro más antiguo de un renacuajo fósil en Sudamérica.",
    year: 2022,
  },
];

const lacevDiscoveries = [
  "Puertasaurus reuili", "Tyrannotitan chubutensis", "Buitreraptor gonzalezorum",
  "Neuquenraptor argentinus", "Mapusaurus roseae", "Aniksosaurus darwini",
  "Macrogryphosaurus gondwanicus", "Orkoraptor burkei", "Austroraptor cabazai",
  "Skorpiovenator bustingorryi", "Bonapartenykus ultimus", "Bicentenaria argentina",
  "Dreadnoughtus schrani", "Sarmientosaurus musacchioi", "Taurovenator violantei",
  "Aoniraptor libertatem", "Notocolossus gonzalezparejasi", "Niebla antiqua",
  "Menucocelsior arriagadai", "Maip macrothorax", "Kelumapusaura machi",
  "Patagopelta cristata", "Guemesia ochoai", "Chakisaurus nekul",
  "Koleken inakayali", "Chadititan calvoi", "Cienciargentina sanchezi",
  "Llukalkan aliocranianus", "Isasicursor santacrucensis", "Tralkasaurus cuyi",
  "Overoraptor chimentoi", "Lucianovenator bonoi", "Chilesaurus diegosuarezi",
];

export default function DiscoveryHighlights() {
  const [open, setOpen] = useState(false);

  return (
    <section className="discoveries-section container">
<h2 className="discoveries-title text-center display-5 fw-bold text-success-emphasis mb-5">
  <span className="border-bottom border-3 pb-1 border-success"> Descubrimientos destacados</span>
</h2>
      {/* Carousel Bootstrap */}
      <div id="dinoCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {discoveries.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row align-items-center g-4">
                <div className="col-md-6 text-center">
                  <img
                    src={item.image}
                    className="d-block w-100 rounded discovery-image"
                    alt={item.name}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6">
                  <h3 className="discovery-name">{item.name}</h3>
                  <p className="discovery-desc">{item.description}</p>
                  <p className="discovery-year">🗓️ {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#dinoCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#dinoCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Acordeón con estado */}
      <div className="accordion my-5" id="lacevAccordion">
        <div className="accordion-item border-0 shadow-sm">
          <h2 className="accordion-header" id="headingLacev">
            <button
              className={`accordion-button ${open ? "" : "collapsed"} bg-success-subtle fw-semibold text-dark`}
              type="button"
              onClick={() => setOpen(!open)}
            >
              📚 Nuestro legado paleontológico — 
              <span className="ms-2 text-muted">
                {open ? "Ocultar descubrimientos" : "Haz clic para ver los 33 descubrimientos"}
              </span>
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${open ? "show" : ""}`} aria-labelledby="headingLacev">
            <div className="accordion-body bg-light rounded-bottom">
              <p>
                El equipo de <strong>LACEV</strong> ha descubierto y nombrado <strong>{lacevDiscoveries.length}</strong> dinosaurios,
                lo cual representa un impresionante <strong>22%</strong> de todas las especies conocidas en Argentina.
              </p>
              <ul className="list-group list-group-flush mt-3">
                {lacevDiscoveries.map((dino, i) => (
                  <li key={i} className="list-group-item d-flex align-items-center">
                    <span className="me-2">🦕</span>
                    <span>{dino}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}