import kpis from "../data/kpis.json";

export default function KPIs(){
  return (
    <section className="section">
      <div className=" kpis">
        {kpis.map((k,i)=>(
          <div className="kpi" key={i}>
            <div className="n">{k.value}</div>
            <div className="l">{k.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}