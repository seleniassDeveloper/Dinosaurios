import covers from "../data/covers.json";

export default function NatureCoversCarousel(){
  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Nature Covers</div>
        <div className="carousel">
          {covers.map((c,i)=>(
            <div key={i} className="cover">
              <img src={`/assets/covers/${c.image}`} alt={c.title} />
              <div className="cap">{c.year} · {c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}