export default function CardDiscovery({ name, year, country, type, highlight, images=[] , source }){
  return (
    <article className="card">
      <div className="kicker">{country} · {year}</div>
      <h3 className="h2" style={{fontSize:"1.25rem"}}>{name}</h3>
      <div className="meta">{type}</div>
      {highlight && <p style={{marginTop:8}}>{highlight}</p>}
      {!!images.length && <img src={`/assets/discoveries/${images[0]}`} alt={name} style={{width:"100%",borderRadius:12,marginTop:8}}/>}
      {source && <p style={{marginTop:8}}><a className="btn btn-ghost" href={source} target="_blank" rel="noreferrer">Fuente</a></p>}
    </article>
  );
}