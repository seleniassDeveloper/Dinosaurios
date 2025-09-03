export default function Hero({ dinoImg, title, sub, ctas=[] }) {
  return (
    <section className="section hero">
      <div className="hero-inner container">
        <div className="kicker">Science powered by exploration</div>
        <h1 className="h1">{title}</h1>
        <p className="lead" style={{margin:"0 auto 18px"}}>{sub}</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginTop:8}}>
          {ctas.map((c,i)=>(
            <a key={i} className={`btn ${c.kind==='ghost'?'btn-ghost':'btn-primary'}`} href={c.href}>{c.label}</a>
          ))}
        </div>
      </div>

      <div className="hero-stage container">
        {dinoImg && <img className="hero-dino" src={dinoImg} alt="Dinosaur" />}
        <div className="hero-panel">
          <div className="kicker">Objetivo 2025</div>
          <h3 style={{margin:"6px 0 8px"}}>Publicar un nuevo artículo en <em>Nature</em></h3>
          <p className="lead" style={{margin:0}}>
            Expediciones 2027–2032 en Antártida (IAA &amp; CONICET) para hallar dinosaurios de hace 70 Ma.
          </p>
          <div className="badges">
            <span className="badge"><span className="dot"></span> National Geographic (4)</span>
            <span className="badge"><span className="dot"></span> Explorers Club (3)</span>
            <span className="badge"><span className="dot"></span> Jurassic Foundation (3)</span>
          </div>
        </div>
      </div>
    </section>
  );
}