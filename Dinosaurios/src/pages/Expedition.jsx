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
                out to be a scientific treasure: a{" "}
                <strong>161-million-year-old tadpole</strong>, pushing back
                evidence of frog metamorphosis by more than{" "}
                <strong>30 million years</strong>.
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
                In 2019, our team unearthed a tiny molar in Patagonia’s
                Chorrillo Formation. It belonged to{" "}
                <em>Patagorhynchus pascuali</em>, the oldest platypus relative
                in South America, dating back <strong>70 million years</strong>.
              </p>
              <p>
                This discovery proved that monotremes — the egg-laying mammals
                that include today’s platypus and echidna — lived in South
                America far earlier than once believed (alongside dinosaurs).
                Previously, scientists thought they came only from Australia
                after the dinosaurs’ extinction.
              </p>
              <p>
                Named for Argentine paleomammalogist Rosendo Pascual,
                Patagorhynchus lived in wetlands and likely fed on snails and
                insect larvae, much like its modern descendant. Its presence
                shows that monotremes once ranged across southern Gondwana,
                linking South America, Australia, and Antarctica.
              </p>
              <p className="mb-2">
                This single tooth didn’t just add to Patagonia’s fossil record —
                it <strong>rewrote the evolutionary history</strong> of
                monotremes, revealing that the ancestor of today’s platypus was
                Patagonian.
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#patagoCarousel"
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
      </section>

      
      <div>
        <LineaTiempo />
      </div>

      {/* ===== 5) Why Argentina Outperforms ===== */}
      <main className="whyar-page container py-4">
  {/* Title */}
  <header className="mb-3">
    <h1 className="whyar-title">Why argentina outperforms</h1>
  </header>

  {/* Top grid (image + right column) */}
  <section className="row g-4 align-items-start">
    {/* Left: big image + thumbnails */}
    <div className="col-lg-7">
      <div className="whyar-hero-img">
        <img src={maip1} alt="Fieldwork main" />
      </div>
      <div className="whyar-thumbs mt-3">
        <img src={maip2} alt="thumb 1" />
        <img src={trex1} alt="thumb 2" />
        <img src={trex2} alt="thumb 3" />
      </div>
    </div>

    {/* Right: text meta + CTA */}
    <div className="col-lg-5">
      <h2 className="whyar-sub">1X new species</h2>

      {/* Mini–stack (mismo texto) */}
      <div className="whyar-stats">
        <div className="stat-chip">
          <span className="stat-kicker">$5,000 vs. $500,000</span>
        </div>
        <p className="m-0">
          In the US and Europe, a $150k campaign might uncover one or two scientifically
          interesting specimens — usually of known species.
        </p>
        <p className="m-0">
          In Patagonia, $5k funds a campaign that often results in world-first discoveries,
          published in top journals, and rewriting paleontological history.
        </p>
        <p className="accent m-0">Your support directly uncovers a new species with us.</p>
      </div>

      {/* Meta pills (mapeadas a tu texto) */}
      <div className="whyar-meta">
        <div className="whyar-meta-row">
          <span className="whyar-meta-label">Talent Advantage</span>
          <span className="whyar-pill">Salaried paleontologists</span>
        </div>
        <div className="whyar-meta-row">
          <span className="whyar-meta-label">Geology Advantage</span>
          <span className="whyar-pill">Fossils at surface</span>
        </div>
        <div className="whyar-meta-row">
          <span className="whyar-meta-label">Legal Advantage</span>
          <span className="whyar-pill">State fossil ownership</span>
        </div>
        <div className="whyar-meta-row">
          <span className="whyar-meta-label">Cost Advantage</span>
          <span className="whyar-pill">Lean logistics</span>
        </div>
      </div>

      {/* Quantity + CTA */}
      <div className="d-flex align-items-center gap-2 mt-3">
        <div className="qty">
          <button aria-label="decrease">−</button>
          <input type="text" value="1" readOnly aria-label="quantity" />
          <button aria-label="increase">+</button>
        </div>
        <button className="btn-cta">Support a $5k dig</button>
      </div>
    </div>
  </section>

  {/* Bottom: Description + side card */}
  <section className="row g-4 align-items-start mt-5">
    {/* Description (left) */}
    <div className="col-lg-8">
      <h3 className="whyar-h3">Description</h3>

      {/* Fun Fact */}
      <div className="whyar-funfact">
        <span className="ff-kicker">Fun Fact</span>
        <p className="m-0">
          The historic China-Canada Dinosaur Project (1986 - 1991) costed roughly $11 million USD over the course of 6 years, resulting in 11 new dinosaur species.
        </p>
      </div>

      {/* Comparativa en 2 columnas */}
      <div className="whyar-compare">
        {/* US & Europe */}
        <article className="compare-card">
          <header className="compare-head">
            <span className="flag">🇺🇸/🇪🇺</span>
            <h4>US &amp; Europe</h4>
          </header>
          <ul className="compare-list">
            <li>
              <span className="clabel">Cost for 3 weeks/15+ people</span>
              <div className="cvalue">
                $75k–$100k (Lean Academic)<br />
                $100k-$150k (Standard Baseline)<br />
                $150k - $250k (High Profile)
              </div>
            </li>
            <li>
              <span className="clabel">Discovery Rate</span>
              <div className="cvalue">
                Mostly known species, fragments, 
                or refinements; new species are rare
              </div>
            </li>
            <li>
              <span className="clabel">Notes</span>
              <div className="cvalue">
                Often funds heavy machinery, land leases, insurance, donor amenities
              </div>
            </li>
          </ul>
        </article>

        {/* Patagonia */}
        <article className="compare-card highlight">
          <header className="compare-head">
            <span className="flag">🇦🇷</span>
            <h4>APASUR/LACEV – Patagonia</h4>
          </header>
          <ul className="compare-list">
            <li>
              <span className="clabel">Cost for 3 weeks/15+ people</span>
              <div className="cvalue">$5,000~</div>
            </li>
            <li>
              <span className="clabel">Discovery Rate</span>
              <div className="cvalue">
                70–80% yield new species or breakthrough fossils such as the first theropod nest in South America or the oldest tadpole fossil (161 million years old)
              </div>
            </li>
          </ul>
        </article>
      </div>

      {/* Narrativa breve (mismo texto) */}
      <div className="whyar-narrative">
        <p>
          $5,000 vs. $500,000
        </p>
        <p>
          In the US and Europe, a $150k campaign might uncover one or two scientifically interesting specimens — usually of known species. 
        </p>
        <p>
          In Patagonia, $5k funds a campaign that often results in world-first discoveries, published in top journals, and rewriting paleontological history.
        </p>
        <p><em>Your support directly uncovers a new species with us.</em></p>
      </div>

      {/* ROI callout */}
      <div className="whyar-facts">
        <h4>Average “discovery ROI”</h4>
        <p className="m-0">
          $5k in Patagonia ≈ world-first discoveries; $150k in US/EU ≈ known species.
        </p>
      </div>
    </div>

    {/* Side media/card (right) */}
    <aside className="col-lg-4">
      <div className="whyar-sidecard">
        <img src={maip2} alt="support image" />
        <div className="sidecard-body">
          <h4>Direct impact</h4>
          <p className="m-0">Your support directly uncovers new species with us.</p>
        </div>
      </div>
    </aside>
  </section>
</main>


      {/* Puedes seguir con más secciones o tus componentes */}
      {/* <Impact /> */}
    </>
  );
}
