import React from "react";
import maip1 from "../../src/ImgCampanas/expedition.jpeg";
import maip2 from "../../src/imgCampanas/expedition2.jpg";
import trex1 from "../../src/ImgCampanas/expedition3.jpeg";
import trex2 from "../../src/ImgCampanas/expedition4.jpg";
import "../css/outPerforms.css";

export function Outperforms() {
  return (
    <main className="whyar-page py-4 dino-theme container">
      {/* Title */}
      <header className="mb-3 text-center">
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
          <div className="whyar-stats ">
            <div className="stat-chip ">
              <span className="stat-kicker">$5,000 vs. $500,000</span>
            </div>
            <p className="m-0">
              In the US and Europe, a $150k campaign might uncover one or two
              scientifically interesting specimens — usually of known species.
            </p>
            <p className="m-0">
              In Patagonia, $5k funds a campaign that often results in
              world-first discoveries, published in top journals, and
              rewriting paleontological history.
            </p>
            <p className="accent m-0">
              Your support directly uncovers a new species with us.
            </p>
          </div>

          {/* Meta pills */}
          <div className="whyar-meta">
            <div className="whyar-meta-row">
              <span className="whyar-pill">Talent Advantage</span>
              <span className="whyar-meta-label">
                Salaried paleontologists
              </span>
            </div>
            <div className="whyar-meta-row">
              <span className="whyar-pill">Geology Advantage</span>
              <span className="whyar-meta-label">Fossils at surface</span>
            </div>
            <div className="whyar-meta-row">
              <span className="whyar-pill">Legal Advantage</span>
              <span className="whyar-meta-label">State fossil ownership</span>
            </div>
            <div className="whyar-meta-row">
              <span className="whyar-pill">Cost Advantage</span>
              <span className="whyar-meta-label">Lean logistics</span>
            </div>
          </div>

          {/* CTA */}
          <div className="d-flex align-items-center gap-2 mt-3">
            <button className="btn-cta">Donate</button>
          </div>
        </div>
      </section>

      {/* Bottom: Description + compare */}
      <section className="row g-4 align-items-start mt-5">
        <div className="col-lg-12">
          <div className="whyar-block dino-card">
            {/* Fun Fact */}
            <div className="whyar-funfact v2 dino-funfact">
              <p className="m-0">
                The historic China-Canada Dinosaur Project (1986 - 1991) costed
                roughly $11 million USD over the course of 6 years, resulting in
                11 new dinosaur species.
              </p>
            </div>

            {/* Comparativa */}
            <div className="whyar-columns">
              {/* US & Europe */}
              <article className="compare-card v2 dino-card" data-accent="us">
                <header className="compare-head v2 dino-head">
                  <span className="flag">🇺🇸/🇪🇺</span>
                  <div className="head-text">
                    <h4>US &amp; Europe</h4>
                    <span className="head-sub">Typical academic expedition</span>
                  </div>
                </header>

                <div className="compare-body">
                  <div className="stat">
                    <span className="clabel">Cost for 3 weeks/15+ people</span>
                    <div className="chips">
                      <span className="chip">$75k–$100k</span>
                      <span className="chip">$100k–$150k</span>
                      <span className="chip">$150k–$250k</span>
                    </div>
                    <div className="notes tiny">
                      Lean Academic / Standard Baseline / High Profile
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="stat">
                    <span className="clabel">Discovery Rate</span>
                    <p className="cvalue">
                      Mostly known species, fragments, or refinements;{" "}
                      <strong>new species are rare</strong>
                    </p>
                  </div>

                  <div className="stat">
                    <span className="clabel">Notes</span>
                    <ul className="bullets">
                      <li>Often funds heavy machinery</li>
                      <li>Land leases &amp; insurance</li>
                      <li>Donor amenities</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Patagonia */}
              <article
                className="compare-card v2 dino-card"
                data-accent="patagonia"
              >
                <header className="compare-head v2 dino-head">
                  <span className="flag">🇦🇷</span>
                  <div className="head-text">
                    <h4>APASUR/LACEV – Patagonia</h4>
                    <span className="head-sub">Lean, field-first expeditions</span>
                  </div>
                </header>

                <div className="compare-body">
                  <div className="stat">
                    <span className="clabel">Cost for 3 weeks/15+ people</span>
                    <div className="chips">
                      <span className="chip emphasis">$5,000~</span>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="stat">
                    <span className="clabel">Discovery Rate</span>
                    <p className="cvalue">
                      <strong>70–80%</strong> yield new species or breakthrough
                      fossils such as the first theropod nest in South America
                      or the oldest tadpole fossil (161 million years old)
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Narrativa */}
            <div className="whyar-narrative v2 fossil-sep px-5 py-5">
              <p>$5,000 vs. $500,000</p>
              <p>
                In the US and Europe, a $150k campaign might uncover one or two
                scientifically interesting specimens — usually of known species.
              </p>
              <p>
                In Patagonia, $5k funds a campaign that often results in
                world-first discoveries, published in top journals, and
                rewriting paleontological history.
              </p>
              <p>
                <em>Your support directly uncovers a new species with us.</em>
              </p>
            </div>
          </div>

          {/* ROI callout */}
          <div className="whyar-facts dino-card mt-3">
            <h4>Average “discovery ROI”</h4>
            <p className="m-0">
              $5k in Patagonia ≈ world-first discoveries; $150k in US/EU ≈
              known species.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}