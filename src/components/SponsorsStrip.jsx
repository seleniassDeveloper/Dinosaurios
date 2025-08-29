import sponsors from "../data/sponsors.json";

export default function SponsorsStrip(){
  return (
    <section className="section">
      <div className="container sponsors">
        {sponsors.map((s,i)=>(
          <span key={i} className="sponsor">
            <strong>{s.name}</strong> &nbsp;({s.count})
          </span>
        ))}
      </div>
    </section>
  );
}