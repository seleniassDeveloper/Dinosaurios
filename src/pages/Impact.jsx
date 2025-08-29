import { useMemo, useState } from "react";
import "../css/Home.css";              // reutilizamos paleta y utilidades
import { OUTREACH } from "../data/outreach";

const TIPOS = Array.from(new Set(OUTREACH.map(i => i.tipo))).sort();
const ANIOS = Array.from(new Set(OUTREACH.map(i => i.anio))).sort((a,b)=>String(b).localeCompare(String(a)));

export default function Impact(){
  const [q, setQ] = useState("");
  const [tipo, setTipo] = useState("Todos");
  const [anio, setAnio] = useState("Todos");

  const items = useMemo(()=>{
    return OUTREACH.filter(i=>{
      const matchQ = q.trim().length
        ? (i.titulo + " " + i.descripcion + " " + (i.organizador||"") + " " + (i.personas||""))
            .toLowerCase().includes(q.toLowerCase())
        : true;
      const matchTipo = tipo==="Todos" ? true : i.tipo===tipo;
      const matchAnio = anio==="Todos" ? true : String(i.anio).includes(anio);
      return matchQ && matchTipo && matchAnio;
    });
  },[q,tipo,anio]);

  return (
    <section className="section">
      <div className="">
        <div className="kicker">Science powered by exploration</div>
        <h1 className="h1">Divulgación, prensa y comunidad</h1>
        <p className="lead">Charlas, talleres, documentales, libros y noticias que conectan nuestra ciencia con el público.</p>

        {/* Controles */}
        <div className="filters">
          <input
            className="input"
            placeholder="Buscar por título, organización o persona…"
            value={q}
            onChange={e=>setQ(e.target.value)}
          />
          <select className="select" value={tipo} onChange={e=>setTipo(e.target.value)}>
            <option>Todos</option>
            {TIPOS.map(t=> <option key={t}>{t}</option>)}
          </select>
          <select className="select" value={anio} onChange={e=>setAnio(e.target.value)}>
            <option>Todos</option>
            {ANIOS.map(a=> <option key={a}>{a}</option>)}
          </select>
        </div>

        {/* Lista */}
        <div className="cards grid">
          {items.map((i,idx)=>(
            <article key={idx} className="card press">
              <div className="press-head">
                <span className="badge">{i.tipo}</span>
                <span className="pill">{i.anio}</span>
              </div>
              <h3 className="h3">{i.titulo}</h3>
              {i.organizador && <div className="muted">• {i.organizador}</div>}
              {i.personas && <div className="muted">• {i.personas}</div>}
              <p>{i.descripcion}</p>
              {i.url && <a className="btn btn-ghost" href={i.url} target="_blank" rel="noreferrer">Ver más</a>}
            </article>
          ))}
          {items.length===0 && <div className="muted">No hay resultados para tu búsqueda.</div>}
        </div>
      </div>
    </section>
  );
}