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
    <>  <section className="discoveries-layout container py-5">
      <div className="row align-items-center g-5">
        {/* Texto editorial */}
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
            remains of a predator unlike any seen before:
            <strong> Maip macrothorax</strong>.
          </p>
          <p className="text-light">
            At <strong>10 meters (33 feet)</strong> long and{" "}
            <strong>over five tons</strong>, with
            <strong> claws up to 40 cm (16 in)</strong>, it was built for{" "}
            <strong>lethal speed and power</strong>.
          </p>
          <p className="text-light">
            Our team’s deep expertise and the richness of potential discoveries
            in Patagonia (where fossils often lie above ground) have allowed for
            a <strong>70–80% success rate</strong> in finding new species or
            major discoveries with every excavation.
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
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#maipCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <DiscoveryHighlights />
      </div>

   
    </section>
       {/* <div>
        <Impact />
      </div> */}

      <div>
        <LineaTiempo />
      </div>
    </>
  
  );
}
