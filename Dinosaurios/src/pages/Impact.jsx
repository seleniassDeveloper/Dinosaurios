import { useMemo, useState } from "react";
import "../css/Impact.css";
import { OUTREACH } from "../data/outreach";

const TIPOS = Array.from(new Set(OUTREACH.map(i => i.tipo))).sort();
const ANIOS = Array.from(new Set(OUTREACH.map(i => i.anio))).sort((a,b)=>String(b).localeCompare(String(a)));

export default function Impact() {
  const [q, setQ] = useState("");
  const [tipo, setTipo] = useState("Todos");
  const [anio, setAnio] = useState("Todos");

  const items = useMemo(() => {
    return OUTREACH.filter(i => {
      const matchQ = q.trim().length
        ? (i.titulo + " " + i.descripcion + " " + (i.organizador || "") + " " + (i.personas || ""))
            .toLowerCase().includes(q.toLowerCase())
        : true;
      const matchTipo = tipo === "Todos" ? true : i.tipo === tipo;
      const matchAnio = anio === "Todos" ? true : String(i.anio).includes(anio);
      return matchQ && matchTipo && matchAnio;
    });
  }, [q, tipo, anio]);

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-kicker">SCIENCE POWERED BY EXPLORATION</div>
        <h1 className="impact-title">Divulgación, prensa y comunidad</h1>
        <p className="impact-subtitle">Charlas, talleres, documentales, libros y noticias que conectan nuestra ciencia con el público.</p>

        {/* Controles */}
        <div className="impact-filters">
          <input
            className="impact-input"
            placeholder="Buscar por título, organización o persona..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <select className="impact-select" value={tipo} onChange={e => setTipo(e.target.value)}>
            <option>Todos</option>
            {TIPOS.map(t => <option key={t}>{t}</option>)}
          </select>
          <select className="impact-select" value={anio} onChange={e => setAnio(e.target.value)}>
            <option>Todos</option>
            {ANIOS.map(a => <option key={a}>{a}</option>)}
          </select>
        </div>

        {/* Lista */}
        <div className="impact-grid">
          {items.map((i, idx) => (
            <article key={idx} className="impact-card">
              <div className="impact-card-head">
                <span className="impact-badge">{i.tipo}</span>
                <span className="impact-pill">{i.anio}</span>
              </div>
              <h3 className="impact-card-title">{i.titulo}</h3>
              {i.organizador && <div className="impact-muted">• {i.organizador}</div>}
              {i.personas && <div className="impact-muted">• {i.personas}</div>}
              <p className="impact-desc">{i.descripcion}</p>
              {i.url && <a className="impact-btn" href={i.url} target="_blank" rel="noreferrer">Ver más</a>}
            </article>
          ))}
          {items.length === 0 && <div className="impact-muted">No hay resultados para tu búsqueda.</div>}
        </div>
      </div>
    </section>
  );
}