// src/pages/Home.jsx
import "../css/site.css";
import "../css/Home.css";

import trex from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (2).png";
import allo from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com.png";
import hadrosaur from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (3).png";
import ceratops from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (1).png";

export default function Home() {
  return (
    <main className="with-fixed-nav">
      {/* HERO */}
      <section className="mag-hero">
        <div className="mag-veil" />
        <div className="mag-hero-inner">
          <p className="mag-kicker">Science powered by exploration</p>
          <h1 className="mag-title">
            Descubramos nuevas especies <span className="mag-title-break" />
            en la próxima expedición
          </h1>
          <p className="mag-sub">
            Equipo: 11 investigadores, 5 técnicos, 2 educadores y 10+ estudiantes. Con sede en el
            Museo Bernardino Rivadavia (Buenos Aires). 5 portadas en <i>Nature</i> y 400+ publicaciones.
            En los últimos 20 años: 35 especies en Argentina y 5 en Antártida/LatAm (40 en total).
          </p>
          <div className="mag-ctas">
            <a className="btn-mg primary" href="/donate">Donar ahora</a>
            <a className="btn-mg ghost" href="/expedition">Ver plan de expedición</a>
          </div>
        </div>
        <img className="mag-dino" src={trex} alt="Tyrannosaurus rex" />
      </section>

      {/* OBJETIVO 2025 */}
      <section className="mag-container pad-y">
        <div className="highlight-card">
          <p className="hlk">Objetivo 2025</p>
          <h3 style={{margin:"6px 0 8px"}}>Publicar un nuevo artículo en <i>Nature</i></h3>
          <p className="muted">
            Expediciones 2027–2032 en Antártida (IAA &amp; CONICET) para hallar dinosaurios de hace 70 Ma.
          </p>
          <div className="badges">
            <span className="badge"><span className="dot" /> National Geographic (4)</span>
            <span className="badge"><span className="dot" /> Explorers Club (3)</span>
            <span className="badge"><span className="dot" /> Jurassic Foundation (3)</span>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="mag-container pad-b">
        <div className="kpis">
          <div className="kpi"><div className="n">5×</div><div className="l">Portadas en Nature</div></div>
          <div className="kpi"><div className="n">400+</div><div className="l">Artículos publicados</div></div>
          <div className="kpi"><div className="n">40</div><div className="l">Nuevas especies (20 años)</div></div>
          <div className="kpi"><div className="n">200+</div><div className="l">Iniciativas de divulgación</div></div>
        </div>
      </section>

      {/* PROYECTOS (v2) */}
      <section className="mag-container pad-y">
        <div className="projects-grid">
          {/* Card 1 */}
          <article className="project-card v2">
            <header className="pc-head">
              <span className="pc-flag">Proyecto</span>
              <span className="pc-ribbon">ETA fines de 2025</span>
            </header>

            <figure className="pc-art">
              <img src={allo} alt="Carnívoro con tejidos blandos" />
            </figure>

            <div className="pc-body">
              <h3 className="pc-title">Carnívoro con tejidos blandos</h3>
              <p className="pc-meta">
                Primera evidencia de <b>músculos</b> y sangre en dinosaurios de Sudamérica.
              </p>
              <div className="pc-chips">
                <span className="chip teal">Patagonia</span>
                <span className="chip gold">Cretácico</span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="project-card v2 alt">
            <header className="pc-head">
              <span className="pc-flag">Proyecto</span>
              <span className="pc-ribbon">En curso</span>
            </header>

            <figure className="pc-art">
              <img src={hadrosaur} alt="Raptor de alta latitud" />
            </figure>

            <div className="pc-body">
              <h3 className="pc-title">Nuevo raptor de alta latitud</h3>
              <p className="pc-meta">Claves sobre ecosistemas patagónicos y adaptación al frío extremo.</p>
              <div className="pc-chips">
                <span className="chip teal">Sur</span>
                <span className="chip gold">Ecología</span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="project-card v2">
            <header className="pc-head">
              <span className="pc-flag">Proyecto</span>
              <span className="pc-ribbon">Análisis</span>
            </header>

            <figure className="pc-art">
              <img src={ceratops} alt="Primer nido de terópodo" />
            </figure>

            <div className="pc-body">
              <h3 className="pc-title">Primer nido de terópodo</h3>
              <p className="pc-meta">
                90 Ma. 7 huevos con restos de serpiente enroscada: ¿depredadora o habitante del nido?
              </p>
              <div className="pc-chips">
                <span className="chip gold">Nido</span>
                <span className="chip teal">Cretácico</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA DONACIÓN */}
      <section className="mag-container pad-y">
        <div className="cta">
          <h2 className="h2" style={{marginTop:0}}>Haz historia con nosotros</h2>
          <p className="muted">
            Cumplimos la Ley Nacional Argentina y contamos con permisos oficiales. Laboratorio propio para preparación.
          </p>
          <div className="amounts">
            <span className="amount">$100</span><span className="amount">$250</span>
            <span className="amount">$500</span><span className="amount">$1,000</span><span className="amount">Otro</span>
          </div>
          <a className="btn-mg primary" href="/donate">Donar ahora</a>
        </div>
      </section>
    </main>
  );
}