// src/components/Home/WhatWereDoing.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../css/sections/WhatWereDoing.css";

export default function WhatWereDoing() {
  return (
    <section className="section container py-3 px-3 my-5 what-were-doing">
      <h2 className="h2 text-success fw-bold mb-3">Quiénes somos</h2>
      <p className="text-muted lead">
        Somos un equipo de investigadores y educadores con base en el Museo Argentino de Ciencias Naturales, responsables del 27% de los descubrimientos de dinosaurios en Sudamérica en los últimos 20 años. Nuestra misión: llevar la paleontología más allá del laboratorio.
      </p>
      <Link to="/about" className="btn btn-success mt-3">
        Conocé nuestra historia →
      </Link>
    </section>
  );
}