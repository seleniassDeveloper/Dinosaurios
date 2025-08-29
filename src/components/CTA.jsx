export default function CTA(){
  return (
    <section className="section">
      <div className="container cta">
        <h2 className="h2" style={{marginTop:0}}>Haz historia con nosotros</h2>
        <p className="lead" style={{margin:"6px auto 12px",maxWidth:760}}>
          Cumplimos la Ley Nacional Argentina y contamos con permisos oficiales. Laboratorio propio para preparación.
        </p>
        <div className="amounts">
          {["$100","$250","$500","$1.000","Otro"].map(a=><span key={a} className="amount">{a}</span>)}
        </div>
        <a className="btn btn-primary" href="/donate">Donar ahora</a>
      </div>
    </section>
  );
}