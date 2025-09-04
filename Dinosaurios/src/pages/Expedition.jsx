import "bootstrap/dist/css/bootstrap.min.css";
import "../css/expedition.css";

import maip1 from "../../src/ImgCampanas/expedition.jpeg";
import maip2 from "../../src/imgCampanas/expedition2.jpg";
import trex1 from "../../src/ImgCampanas/expedition3.jpeg";
import trex2 from "../../src/ImgCampanas/expedition4.jpg";

import ProjectHighlight from "../components/ProjectHighlight";
import MainSection from "../components/Home/mainSection";
import DiscoveryHighlights from "../components/Home/DiscoveryHighlights";
import HeroSection from "../components/Home/HeroSection";
import LivePreview from "../components/Home/LivePreview";
import { IconsManifest } from "react-icons/lib";
import WhatWereDoing from "../components/Home/WhatWereDoing";
import WhyItMatters from "../components/Home/WhyItMatters";
import CardDiscovery from "../components/CardDiscovery";
import YourRole from "../components/Home/YourRole";
import CardMedia from "../components/CardMedia";
import Impact from "./Impact";
import LineaTiempo from "../components/lineaTiempo";

export default function Discoveries() {
  return (
    <>
      {/* ===== 1) HERO con fondo ===== */}
      <section
        className="disc-hero-bg"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${maip1})`,
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-extrabold mb-3 text-white lh-tight">
            world-class <br />
            discoveries
          </h1>
          <h2 className="h5 text-white-50 fw-semibold mb-3">
            at 1/30th - 1/100th the cost <br />
            with the highest success rate in the world
          </h2>
          <p className="lead text-white mb-0">
            Our team’s deep expertise and the richness of potential discoveries
            in Patagonia (where fossils often lie above ground) have allowed for
            a <strong>70-80% success rate</strong> in finding new species or
            major discoveries with every excavation.
          </p>
        </div>
      </section>

      <section className="disc-statement text-center py-5">
        <div className="container">
          <p className="statement-text">
            Every <strong>$5,000 EXCAVATION</strong> we <strong>EXECUTE</strong>{" "}
            has a <strong>70–80% chance</strong> of yielding{" "}
            <strong>NEW SPECIES</strong> or ground-breaking{" "}
            <strong>DISCOVERIES!</strong>
          </p>
        </div>
      </section>

      {/* ===== 2) Discovery highlight + cascada de imágenes ===== */}
      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-lg-6">
            <p className="text-uppercase small fw-bold text-warning mb-2">
              Discovery highlight #1
            </p>
            <h2 className="display-6 fw-bold mb-1 text-dark">
              Maip <span className="text-success">macrothorax</span>
            </h2>
            <h3 className="h5 fw-semibold text-dark-50">
              The Largest Megaraptor Ever Discovered
            </h3>

            <div className="mt-4 text-body-secondary">
              <p>
                In 2019, near El Calafate in Patagonia, our team uncovered the
                remains of a predator unlike any seen before:{" "}
                <strong>Maip macrothorax</strong>.
              </p>
              <p>
                At <strong>10 meters (33 feet)</strong> long and{" "}
                <strong>over five tons</strong>, with{" "}
                <strong>claws up to 40 cm (16 in)</strong>, it was built for{" "}
                <strong>lethal speed and power</strong>.
              </p>
              <p>
                Nicknamed the “Shadow of Death,” Maip was named after an
                Aonikenk spirit said to kill with icy winds. Its second name,{" "}
                <em>macrothorax</em>, reflects its enormous{" "}
                <strong>1.2-meter-wide chest cavity</strong>. Unlike the bulky
                T. Rex, Maip was lightweight, agile, and fast, making it the
                apex predator of southern Patagonia about{" "}
                <strong>70 million years ago</strong>.
              </p>
              <p className="mb-0">
                The discovery helped solve key mysteries about megaraptors — a
                family of carnivores spread across South America, Asia, and
                Australia — and revealed one of the largest and southernmost
                megaraptors ever found.
              </p>
            </div>
          </div>

          {/* Cascada de imágenes tipo “Nature covers” */}
          <div className="col-lg-6">
            <div className="cascade">
              <img className="cascade-img img-a" src={maip2} alt="Cover A" />
              <img className="cascade-img img-b" src={trex1} alt="Cover B" />
              <img className="cascade-img img-c" src={trex2} alt="Cover C" />
              <img className="cascade-img img-d" src={maip1} alt="Cover D" />
              <div className="cascade-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3) Tu bloque existente con carrusel + otros componentes ===== */}
      <section className="discoveries-layout container py-5">
        <div className="row align-items-center g-5">
          {/* Texto editorial (puedes ajustar o dejar así) */}
          <div className="col-lg-6">
            <p className="text-uppercase small fw-bold text-warning mb-2">
              Discovery Highlight #1
            </p>
            <h1 className="display-5 fw-bold text-white">
              Maip <span className="color">Macrothorax</span>
            </h1>
            <h2 className="h5 fw-semibold text-light">
              The Largest Megaraptor Ever Discovered
            </h2>

            <p className="text-light mt-4">
              In 2019, near El Calafate in Patagonia, our team uncovered the
              remains of a predator unlike any seen before:{" "}
              <strong>Maip macrothorax</strong>.
            </p>
            <p className="text-light">
              At <strong>10 meters (33 feet)</strong> long and{" "}
              <strong>over five tons</strong>, with{" "}
              <strong>claws up to 40 cm (16 in)</strong>, it was built for{" "}
              <strong>lethal speed and power</strong>.
            </p>
            <p className="text-light">
              Our team’s deep expertise and the richness of potential
              discoveries in Patagonia (where fossils often lie above ground)
              have allowed for a <strong>70–80% success rate</strong> in finding
              new species or major discoveries with every excavation.
            </p>
          </div>

          {/* Carrusel Bootstrap con 4 imágenes */}
          <div className="col-lg-6">
            <div
              id="maipCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded shadow">
                <div className="carousel-item active">
                  <img
                    src={maip1}
                    className="d-block w-100 carousel-img"
                    alt="Maip Macrothorax 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={maip2}
                    className="d-block w-100 carousel-img"
                    alt="Maip Macrothorax 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={trex1}
                    className="d-block w-100 carousel-img"
                    alt="Expedition Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={trex2}
                    className="d-block w-100 carousel-img"
                    alt="Expedition Image 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#maipCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#maipCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secciones adicionales que ya usas */}
        <div className="mt-5">
          <DiscoveryHighlights />
        </div>
      </section>

      {/* <Impact /> si quieres mostrar impacto debajo */}
      <div>
        <LineaTiempo />
      </div>
    </>
  );
}
