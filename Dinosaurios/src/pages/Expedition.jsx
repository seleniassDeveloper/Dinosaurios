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

      {/* ===== Statement ===== */}
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

      {/* ===== 2) Discovery highlight #1 + cascada ===== */}
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

          {/* Cascada de imágenes (con animación) */}
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

      {/* ===== 3) Discovery highlight #2 — Notobatrachus ===== */}
<section className="container py-5 notob-section ">
  <div className="row align-items-start g-5">
    {/* Columna izquierda con imágenes */}
    <div className="col-lg-6 ">
      <div className="notob-gallery">
        <img src={trex1} alt="Notobatrachus support 1" />
        <img src={maip2} alt="Notobatrachus support 2" />
        <img src={trex2} alt="Notobatrachus support 3" />
      </div>
    </div>

    {/* Columna derecha con texto */}
    <div className="col-lg-6">
      <p className="text-uppercase small fw-bold text-warning mb-2">
        Discovery highlight #2
      </p>
      <h2 className="display-6 fw-bold mb-1 text-dark">notobatrachus</h2>
      <h3 className="h5 fw-semibold text-dark-50">
        The 161-Million-Year-Old Tadpole
      </h3>
      <p className="fw-semibold text-secondary mb-3">
        Discovered by accident during a game
      </p>

      <div className="text-body-secondary">
        <p>
          In the Jurassic wetlands of Patagonia, our team uncovered the
          world’s oldest known tadpole fossil, preserved for over{" "}
          <strong>161 million years</strong>. Measuring{" "}
          <strong>16 cm (6 in)</strong>, this giant tadpole belonged to{" "}
          <em>Notobatrachus degiustoi</em>, an extinct frog that lived
          alongside dinosaurs.
        </p>
        <p>
          The fossil is so exquisitely preserved that even delicate soft
          tissues — eyes, nerves, and traces of gills — remain visible,
          offering a rare snapshot of a creature caught just before its
          transformation into a frog.
        </p>
        <p>
          What makes the discovery even more remarkable is the way it
          happened. After a long day of digging for dinosaurs, members of
          our team were relaxing and tossing rocks when one noticed a
          stone with a strange imprint. That “funny-looking rock” turned
          out to be a scientific treasure: a <strong>161-million-year-old
          tadpole</strong>, pushing back evidence of frog metamorphosis by
          more than <strong>30 million years</strong>.
        </p>
        <p className="mb-2">
          The story highlights the richness of Patagonia’s fossil beds — a
          place where even casual moments can lead to world-changing
          discoveries.
        </p>
       
      </div>
    </div>
  </div>
</section>




{/* ===== 4) Discovery highlight #4 — Patagorhynchus ===== */}
<section className="container py-5 patago-section">
  <div className="row align-items-center g-5">
    {/* Texto a la izquierda */}
    <div className="col-lg-6">
      <p className="text-uppercase small fw-bold text-warning mb-2">
        Discovery highlight #4
      </p>
      <h2 className="display-6 fw-bold mb-1 text-dark">Patagorhynchus</h2>
      <h3 className="h5 fw-semibold text-dark-50">
        70-Million-Year-Old Egg-Layer Rewrites Evolution
      </h3>

      <div className="mt-4 text-body-secondary">
        <p>
          In 2019, our team unearthed a tiny molar in Patagonia’s Chorrillo
          Formation. It belonged to <em>Patagorhynchus pascuali</em>, the oldest
          platypus relative in South America, dating back{" "}
          <strong>70 million years</strong>.
        </p>
        <p>
          This discovery proved that monotremes — the egg-laying mammals that
          include today’s platypus and echidna — lived in South America far
          earlier than once believed (alongside dinosaurs). Previously,
          scientists thought they came only from Australia after the dinosaurs’
          extinction.
        </p>
        <p>
          Named for Argentine paleomammalogist Rosendo Pascual,
          Patagorhynchus lived in wetlands and likely fed on snails and insect
          larvae, much like its modern descendant. Its presence shows that
          monotremes once ranged across southern Gondwana, linking South
          America, Australia, and Antarctica.
        </p>
        <p className="mb-2">
          This single tooth didn’t just add to Patagonia’s fossil record — it{" "}
          <strong>rewrote the evolutionary history</strong> of monotremes,
          revealing that the ancestor of today’s platypus was Patagonian.
        </p>
        <p className="text-muted small mb-0">Artwork by Santiago Miner</p>
      </div>
    </div>

    {/* Carrusel con 3 imágenes a la derecha */}
    <div className="col-lg-6">
      <div
        id="patagoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img
              src={maip2}
              className="d-block w-100 carousel-img"
              alt="Patagorhynchus image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={trex1}
              className="d-block w-100 carousel-img"
              alt="Patagorhynchus image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={trex2}
              className="d-block w-100 carousel-img"
              alt="Patagorhynchus image 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#patagoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#patagoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</section>



      {/* Puedes seguir con más secciones o tus componentes */}
      {/* <Impact /> */}
      <div>
        <LineaTiempo />
      </div>
    </>
  );
}