import React from "react";
import "../css/Colaboradores.css";
import logo from "../../ImgCampanas/BrandLogos.png"; 

export default function Colaboradores() {
  return (
    <section className="colaboradores-section">
    
      <div className="colaboradores-single-image">
        <img src={logo} alt="Featured logos" />
      </div>
    </section>
  );
}