// src/pages/Home.jsx
import "../css/site.css";
import "../css/Home.css";
import { useTranslation } from "react-i18next";
import logo from "../ImgCampanas/logoAPASUR.jpeg"; // ✅ import correcto
import logoDino from "../ImgCampanas/logoblancoverDino.jpeg"; 

import trex from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (2).png";
import allo from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com.png";
import hadrosaur from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (3).png";
import ceratops from "../ImgCampanas/imgDibujosDinosaurios/pngwing.com (1).png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="with-fixed-nav ">
      {/* HERO */}
        
      <section className="mag-hero ">
        <div className="mag-veil " />
      
        <div className="mag-hero-inner">
           <div className="d-flex justify-content-center imageneslogos">
 <img src={logo} alt="Logo Asociación Paleontológica" className="brand-logo" />
 <img src={logoDino} alt="" />
        </div>

          <p className="mag-kicker">{t("hero.kicker")}</p>
          <h1 className="mag-title">
        <span className="descubramosTitulo"> {t("hero.title.line1")} </span>   <span className="mag-title-break" />
            {t("hero.title.line2")}
          </h1>
          <p className="mag-sub">{t("hero.subtitle")}</p>
          <div className="mag-ctas">
            <a className="btn-mg primary" href="/donate">{t("hero.cta1")}</a>
            <a className="btn-mg ghost" href="/expedition">{t("hero.cta2")}</a>
          </div>
        </div>
        <img className="mag-dino" src={trex} alt="Tyrannosaurus rex" />
      </section>

      {/* OBJETIVO 2025 */}
      <section className="mag-container pad-y">
        <div className="highlight-card">
          <p className="hlk">{t("goal.kicker")}</p>
          <h3 style={{ margin: "6px 0 8px" }}>{t("goal.title")}</h3>
          <p className="muted">{t("goal.subtitle")}</p>
          <div className="badges">
            <span className="badge"><span className="dot" /> {t("goal.badges.natgeo")}</span>
            <span className="badge"><span className="dot" /> {t("goal.badges.explorers")}</span>
            <span className="badge"><span className="dot" /> {t("goal.badges.jurassic")}</span>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="mag-container pad-b">
        <div className="kpis">
          <div className="kpi"><div className="n">5×</div><div className="l">{t("kpis.covers")}</div></div>
          <div className="kpi"><div className="n">400+</div><div className="l">{t("kpis.papers")}</div></div>
          <div className="kpi"><div className="n">40</div><div className="l">{t("kpis.species20")}</div></div>
          <div className="kpi"><div className="n">200+</div><div className="l">{t("kpis.outreach")}</div></div>
        </div>
      </section>

      {/* PROYECTOS (v2) */}
      <section className="mag-container pad-y">
        <div className="projects-grid">
          {/* Card 1 */}
          <article className="project-card v2">
            <header className="pc-head">
              <span className="pc-flag">{t("projects.flag")}</span>
              <span className="pc-ribbon">{t("projects.ribbon.eta2025")}</span>
            </header>
            <figure className="pc-art">
              <img src={allo} alt={t("projects.cards.softTissues.title")} />
            </figure>
            <div className="pc-body">
              <h3 className="pc-title">{t("projects.cards.softTissues.title")}</h3>
              <p className="pc-meta">{t("projects.cards.softTissues.meta")}</p>
              <div className="pc-chips">
                <span className="chip teal">{t("projects.tags.patagonia")}</span>
                <span className="chip gold">{t("projects.tags.cretaceous")}</span>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="project-card v2 alt">
            <header className="pc-head">
              <span className="pc-flag">{t("projects.flag")}</span>
              <span className="pc-ribbon">{t("projects.ribbon.ongoing")}</span>
            </header>
            <figure className="pc-art">
              <img src={hadrosaur} alt={t("projects.cards.raptor.title")} />
            </figure>
            <div className="pc-body">
              <h3 className="pc-title">{t("projects.cards.raptor.title")}</h3>
              <p className="pc-meta">{t("projects.cards.raptor.meta")}</p>
              <div className="pc-chips">
                <span className="chip teal">{t("projects.tags.south")}</span>
                <span className="chip gold">{t("projects.tags.ecology")}</span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="project-card v2">
            <header className="pc-head">
              <span className="pc-flag">{t("projects.flag")}</span>
              <span className="pc-ribbon">{t("projects.ribbon.analysis")}</span>
            </header>
            <figure className="pc-art">
              <img src={ceratops} alt={t("projects.cards.nest.title")} />
            </figure>
            <div className="pc-body">
              <h3 className="pc-title">{t("projects.cards.nest.title")}</h3>
              <p className="pc-meta">{t("projects.cards.nest.meta")}</p>
              <div className="pc-chips">
                <span className="chip gold">{t("projects.tags.nest")}</span>
                <span className="chip teal">{t("projects.tags.cretaceous")}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA DONACIÓN */}
      <section className="mag-container pad-y">
        <div className="cta">
          <h2 className="h2" style={{ marginTop: 0 }}>{t("cta.title")}</h2>
          <p className="muted">{t("cta.copy")}</p>
          <div className="amounts">
            <span className="amount">$100</span><span className="amount">$250</span>
            <span className="amount">$500</span><span className="amount">$1,000</span><span className="amount">{t("cta.other")}</span>
          </div>
          <a className="btn-mg primary" href="/donate">{t("cta.button")}</a>
        </div>
      </section>
    </main>
  );
}