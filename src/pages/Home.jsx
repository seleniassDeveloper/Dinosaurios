// src/pages/HomeDinosaurios.jsx
import "../css/Home.css";

// Importa tus PNGs desde ImgCampanas (con espacios y paréntesis)
import trex from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (2).png";
import allo from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com.png";
import hadrosaur from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (3).png";
import ceratops from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (1).png";

export default function HomeDinosaurios(){
  return (
    <div className="d-flex justify-content-center">
      {/* HERO */}
      <section className="section hero">
        <div className="" style={{textAlign:"center"}}>
          <div className="kicker">Science powered by exploration</div>
          <h1 className="h1">Descubramos nuevas especies en la próxima expedición</h1>
          <p className="lead" style={{margin:"0 auto 18px"}}>
            Equipo: 11 investigadores, 5 técnicos, 2 educadores y 10+ estudiantes. Con sede en el
            Museo Bernardino Rivadavia (Buenos Aires). 5 portadas en <em>Nature</em> y 400+ publicaciones.
            En los últimos 20 años: 35 especies en Argentina y 5 en Antártida/LatAm (40 en total).
          </p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginTop:8}}>
            <a className="btn btn-primary" href="/donate">Donar ahora</a>
            <a className="btn btn-ghost" href="/expedition">Ver plan de expedición</a>
          </div>
        </div>

        <div className="hero-stage container">
          {/* Dino PNG sin fondo */}
          <img className="hero-dino" src={trex} alt="Tyrannosaurus rex" />
          <div className="hero-panel">
            <div className="kicker">Objetivo 2025</div>
            <h3 style={{margin:"6px 0 8px"}}>Publicar un nuevo artículo en <em>Nature</em></h3>
            <p className="lead" style={{margin:0}}>
              Expediciones 2027–2032 en Antártida (IAA &amp; CONICET) para hallar dinosaurios de hace 70 Ma.
            </p>
            <div className="hero-badges" style={{marginTop:10}}>
              <span className="badge"><span className="dot"></span> National Geographic (4)</span>
              <span className="badge"><span className="dot"></span> Explorers Club (3)</span>
              <span className="badge"><span className="dot"></span> Jurassic Foundation (3)</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="section">
        <div className="container kpis">
          <div className="kpi"><div className="n">5×</div><div className="l">Portadas en Nature</div></div>
          <div className="kpi"><div className="n">400+</div><div className="l">Artículos publicados</div></div>
          <div className="kpi"><div className="n">40</div><div className="l">Nuevas especies (20 años)</div></div>
          <div className="kpi"><div className="n">200+</div><div className="l">Iniciativas de divulgación</div></div>
        </div>
      </section>

      {/* BLOQUES STICKER */}
      <section className="section">
        <div className="container sticker-block">
          <img className="sticker" src={allo} alt="Allosauroidea" />
          <div className="info">
            <h2 className="h2">Carnívoro con tejidos blandos</h2>
            <p>Primera evidencia de músculos y sangre en dinosaurios de Sudamérica. Publicación prevista para fines de 2025.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sticker-block alt">
          <img className="sticker" src={hadrosaur} alt="Hadrosaurio" />
          <div className="info">
            <h2 className="h2">Raptor de alta latitud</h2>
            <p>Claves sobre ecosistemas patagónicos y adaptación al frío extremo.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sticker-block">
          <img className="sticker" src={ceratops} alt="Ceratopsio" />
          <div className="info">
            <h2 className="h2">Primer nido de terópodo</h2>
            <p>90 Ma. 7 huevos con restos de serpiente enroscada: ¿depredadora o habitante del nido?</p>
          </div>
        </div>
      </section>

      {/* CTA DONACIÓN */}
      <section className="section">
        <div className="container cta">
          <h2 className="h2" style={{marginTop:0}}>Haz historia con nosotros</h2>
          <p className="lead" style={{margin:"6px auto 12px"}}>
            Cumplimos la Ley Nacional Argentina y contamos con permisos oficiales. Laboratorio propio para preparación.
          </p>
          <div className="amounts">
            <span className="amount">$100</span>
            <span className="amount">$250</span>
            <span className="amount">$500</span>
            <span className="amount">$1,000</span>
            <span className="amount">Otro</span>
          </div>
          <a className="btn btn-primary" href="/donate">Donar ahora</a>
        </div>
      </section>
    </div>
  );
}