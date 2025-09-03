import React from "react";
import "../css/ParrafoWelcome.css";
import dinoBrush from "../../ImgCampanas/portadaNature.png";
import dinoBrush2 from "../../ImgCampanas/portadaNature2.jpeg";
import dinoBrush3 from "../../ImgCampanas/portadaNature3.jpeg";
import dinoBrush4 from "../../ImgCampanas/portadaNature4.jpeg";

export default function ParrafoWelcome() {
  return (
    <section className="parrafo-welcome-grid">
      <div className="parrafo-texto">
        <h2 className="parrafo-titulo">
          Science in Patagonia isn’t just studied — <span className="underline">it’s uncovered.</span>
        </h2>
        <p className="parrafo-descripcion">
          At <strong>LACEV</strong>, our team of paleontologists, professors, students, and naturalists has spent over <strong>20 years</strong> uncovering the ancient past—bone by bone.
        </p>
        <p className="parrafo-descripcion">
          From dust to discovery, we’ve led excavations, published over 400 papers, and graced the cover of <strong>Nature</strong> magazine <strong>five times</strong>.
        </p>
        <p className="parrafo-final">
          <span className="green-bold">27% of all new dinosaur species in South America</span> have been discovered by our team.
        </p>
      </div>

      <div className="parrafo-imagenes">
        <img src={dinoBrush} className="cascada-img img1" alt="Nature cover 1" />
        <img src={dinoBrush2} className="cascada-img img2" alt="Nature cover 2" />
        <img src={dinoBrush3} className="cascada-img img3" alt="Nature cover 3" />
        <img src={dinoBrush4} className="cascada-img img4" alt="Nature cover 4" />
      </div>
    </section>
  );
}

