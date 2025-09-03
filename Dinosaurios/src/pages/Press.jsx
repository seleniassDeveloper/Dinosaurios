import React from "react";
import "../css/Press.css";

export default function Press() {
  const articles = [
    {
      title: "El ‘cocodrilo feroz’ que devoraba dinosaurios en la Patagonia",
      source: "El País",
      summary: "Descubrimiento del peirosaurio terrestre Kostensuchus atrox; vivió hace 70 millones de años en la Patagonia y habría cazado dinosaurios.",
      date: "Ago 28, 2025",
    },
    {
      title: "70‐million‐year‐old herbivore dinosaur fossil found in Argentina",
      source: "Times of India",
      summary: "Fósil de dinosaurio herbívoro de cuello largo de hace 94 millones de años encontrado en Argentina, aportando claves evolutivas.",
      date: "May 19, 2025",
    },
  ];

  return (
    <section className="press-section">
      <h1>Prensa</h1>
      <p>Notas, apariciones y recursos para medios sobre hallazgos paleontológicos en Argentina.</p>

      <div className="articles-list">
        {articles.map((art, i) => (
          <article key={i} className="press-article">
            <h2>{art.title}</h2>
            <p className="press-source-date">
              <span className="press-source">{art.source}</span> • <span className="press-date">{art.date}</span>
            </p>
            <p className="press-summary">{art.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}