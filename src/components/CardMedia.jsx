export default function CardMedia({ type, title, outlet, brief, year, authors=[], url }){
  return (
    <article className="card">
      <div className="kicker">{type} · {year}</div>
      <h3 className="h2" style={{fontSize:"1.2rem"}}>{title}</h3>
      <div className="meta">{outlet}{authors?.length ? ` — ${authors.join(", ")}` : ""}</div>
      {brief && <p style={{marginTop:8}}>{brief}</p>}
      {url && <p style={{marginTop:6}}><a className="btn btn-ghost" href={url} target="_blank" rel="noreferrer">Ver</a></p>}
    </article>
  );
}