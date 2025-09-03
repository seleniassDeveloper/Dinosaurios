// src/pages/Expedition.jsx
import React from "react";
import "../css/Expedition.css";
import { FaUserTie, FaMountain, FaBalanceScale, FaDollarSign } from "react-icons/fa";

export default function Expedition() {
  return (
    <section className="expedition-section">

      {/* HERO */}
      <div className="exp-hero">
        <h1>World-Class Discoveries at 1/20th the Cost</h1>
        <p>
          In Argentina, $5,000 funds a 15+ person, 3-week campaign that produces new species or breakthroughs
          70–80% of the time. In the US or Europe, similar digs cost $100k+ with far lower discovery rates.
        </p>
      </div>

      {/* COMPARACIÓN */}
      <div className="exp-comparison">
        <div className="comparison-box">
          <h3>🇦🇷 LACEV – Patagonia</h3>
          <ul>
            <li>💰 Cost: $5,000</li>
            <li>⏳ Duration: 3 weeks, 15+ people</li>
            <li>📈 Discovery Rate: 70–80%</li>
            <li>🏆 Track Record:
              <ul>
                <li>Maip macrothorax</li>
                <li>Patagorhynchus</li>
                <li>Oldest tadpole fossil</li>
                <li>First theropod nest in South America</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="comparison-box">
          <h3>🇺🇸/🇪🇺 US & Europe</h3>
          <ul>
            <li>💰 Cost: $75,000–$150,000</li>
            <li>📅 High-profile: $130k–$250k</li>
            <li>📉 Discovery Rate: Mostly known species</li>
            <li>🔧 Often funds:
              <ul>
                <li>Machinery</li>
                <li>Land leases</li>
                <li>Insurance</li>
                <li>Donor amenities</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* FRASE DESTACADA */}
      <div className="exp-highlight">
        👉 1 new species per $5k vs. 1 per $500k
      </div>

      {/* POR QUÉ ARGENTINA */}
      <div className="exp-icons">
        <div className="icon-box">
          <FaUserTie />
          <p><strong>Talent Advantage</strong><br />Salaried paleontologists at top institutions.</p>
        </div>
        <div className="icon-box">
          <FaMountain />
          <p><strong>Geology Advantage</strong><br />Surface fossils – no bulldozers required.</p>
        </div>
        <div className="icon-box">
          <FaBalanceScale />
          <p><strong>Legal Advantage</strong><br />Public fossil ownership avoids land conflicts.</p>
        </div>
        <div className="icon-box">
          <FaDollarSign />
          <p><strong>Cost Advantage</strong><br />Low logistics, no insurance burdens.</p>
        </div>
      </div>

      {/* IMPACTO */}
      <div className="exp-impact">
        “Every $5,000 campaign we run has a 70–80% chance of yielding a new dinosaur, mammal, or world-first fossil.”
      </div>

      {/* CASOS */}
      <div className="exp-cases">
        <div className="case-card">$5k → Maip macrothorax (Nature cover)</div>
        <div className="case-card">$5k → Patagorhynchus pascuali (oldest platypus)</div>
        <div className="case-card">$5k → World’s oldest tadpole (161 Mya)</div>
        <div className="case-card">$100k+ US/Europe → Often partial skeletons</div>
        <div className="case-card">China–Canada Project ($15M, 5 years) → ~11 new species</div>
      </div>

      {/* CTA FINAL */}
      <div className="exp-cta">
        “In the US or Europe, $100,000 might fund one week in the field — with no guarantee of a new species.
        <br />
        <strong>
          In Patagonia, $5,000 funds an entire expedition, almost always resulting in a discovery worthy of the world’s top journals.
        </strong>
        <br />
        Your support here doesn’t just go farther — it rewrites the history of life on Earth.”
      </div>

    </section>
  );
}