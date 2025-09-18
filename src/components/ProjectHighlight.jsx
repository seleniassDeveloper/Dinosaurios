export default function ProjectHighlight({ image, title, brief, eta, right=false }){
  return (
    <article className="project-card" style={{gridTemplateColumns:right?'1fr 1fr':'1fr 1fr'}}>
      {!right && <img src={`/assets/dinos/${image}`} alt={title} />}
      <div>
        <div className="kicker">{eta?`ETA ${eta}`:"Proyecto"}</div>
        <h3 className="h2" style={{marginTop:6}}>{title}</h3>
        <p className="lead" style={{marginTop:6}}>{brief}</p>
      </div>
      {right && <img src={`/assets/dinos/${image}`} alt={title} />}
    </article>
  );
}