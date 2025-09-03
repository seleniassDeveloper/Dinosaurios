// src/pages/About.jsx
import React from "react";
import "../css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Grupo from "../../src/ImgCampanas/210.jpg";

export default function About() {
  const teamData = [
    {
      name: "Fernando Novas",
      role: "Paleontólogo Principal",
      img: "/img/team/novas.jpg",
      quote: "La ciencia es la mejor aventura.",
      linkedin: "https://www.linkedin.com/in/fernando-novas",
    },
    {
      name: "Andrea Arcucci",
      role: "Técnica de laboratorio",
      img: "/img/team/arcucci.jpg",
      quote: "Los huesos cuentan historias.",
      instagram: "https://www.instagram.com/andreaarcucci",
    },
    {
      name: "Sofía Calvo",
      role: "Educadora científica",
      img: "/img/team/sofia.jpg",
      linkedin: "https://www.linkedin.com/in/sofiacalvo",
      facebook: "https://www.facebook.com/sofia.calvo",
    },
    {
      name: "Julián Pereira",
      role: "Técnico de campo",
      img: "/img/team/julian.jpg",
      quote: "Excavar es leer el pasado.",
      instagram: "https://www.instagram.com/julianpaleo",
    },
    {
      name: "Lucía Gómez",
      role: "Estudiante avanzada",
      img: "/img/team/lucia.jpg",
    },
    {
      name: "Martín Silva",
      role: "Preparador de fósiles",
      img: "/img/team/martin.jpg",
      quote: "Cada hueso merece paciencia.",
      youtube: "https://www.youtube.com/@martinpaleo",
    },
  ];

  return (
    <section className="about-team-section">
      <div className="container">
        {/* Hero */}
        <div className="team-photo-hero">
          <img src={Grupo} alt="Equipo de Dinosaurios" className="team-photo" />
          <div className="hero-overlay-text">
            <h1>Exploración científica en el fin del mundo</h1>
         
          </div>
        </div>

        <h2 className="section-title">Nuestro equipo de exploradores científicos</h2>
        <p className="section-subtitle">
          Basados en el Museo de Ciencias Naturales Bernardino Rivadavia (Buenos Aires), somos un equipo de investigadores, técnicos y educadores con una misión clara: explorar y compartir los secretos de la vida prehistórica.
        </p>

        <div className="team-intro">
          <p>
            11 investigadores, 5 técnicos, 2 educadores y más de 10 estudiantes. Más de 400 publicaciones científicas, 5 portadas en <i>Nature</i>, y descubrimientos de más de 40 nuevas especies en Sudamérica. Nuestra próxima meta: publicar otro artículo en <i>Nature</i> antes de 2025.
          </p>
        </div>

        {/* Cards */}
        <div className="team-grid">
          {teamData.map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="team-info">
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                {member.quote && <p className="team-quote">"{member.quote}"</p>}
                <div className="team-links">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}
                  {member.youtube && (
                    <a href={member.youtube} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="team-card join-card">
            <h3>¡Súmate al equipo!</h3>
            <p>Participa en futuras expediciones científicas o apóyanos como donante.</p>
            <button>Unirme</button>
          </div>
        </div>

        {/* Impacto */}
        <div className="team-impact">
          <h3>Impacto comunitario y apoyo internacional</h3>
          <p>
            Apoyados por <strong>National Geographic</strong>, <strong>Explorers Club</strong>,
            <strong>Jurassic Foundation</strong> y otras instituciones, hemos realizado más de 200 actividades de divulgación, 50+ charlas educativas, publicaciones en medios globales y colaboraciones con museos y canales de TV internacionales.
          </p>
          <p>
            Actualmente trabajamos en descubrimientos inéditos: un nuevo dinosaurio con tejidos blandos, un nido de terópodo, un marsupial con colmillos de 20 cm y más de 60 huesos nuevos de especies ya conocidas.
          </p>
        </div>
      </div>
    </section>
  );
}