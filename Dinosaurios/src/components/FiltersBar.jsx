import { useState, useEffect } from "react";

export default function FiltersBar({ onChange, years=[], types=[], countries=[] }){
  const [q,setQ] = useState("");
  const [year,setYear] = useState("");
  const [type,setType] = useState("");
  const [country,setCountry] = useState("");

  useEffect(()=>{ onChange?.({q,year,type,country}); },[q,year,type,country]);

  return (
    <div className="container">
      <div className="filters">
        <input placeholder="Buscar…" value={q} onChange={e=>setQ(e.target.value)} />
        {!!types.length && (
          <select value={type} onChange={e=>setType(e.target.value)}>
            <option value="">Tipo</option>
            {types.map(t=><option key={t} value={t}>{t}</option>)}
          </select>
        )}
        {!!countries.length && (
          <select value={country} onChange={e=>setCountry(e.target.value)}>
            <option value="">País</option>
            {countries.map(t=><option key={t} value={t}>{t}</option>)}
          </select>
        )}
        {!!years.length && (
          <select value={year} onChange={e=>setYear(e.target.value)}>
            <option value="">Año</option>
            {years.map(y=><option key={y} value={y}>{y}</option>)}
          </select>
        )}
        <button className="btn btn-ghost clear" onClick={()=>{setQ("");setYear("");setType("");setCountry("");}}>Limpiar</button>
      </div>
    </div>
  );
}