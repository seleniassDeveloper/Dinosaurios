// src/pages/LineaTiempo.jsx
import "../css/Timeline.css";

// Imágenes (ajustá las rutas si las cambiaste)
import dino1 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio.png";
import dino2 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio2.jpeg";
import dino3 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio3.png";
import dino4 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio4.png";
import dino5 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio5.png";

// Datos
const timelineData = [
  {
    year: "2016",
    image: dino1,
    title: "Taurovenator",
    description: "Apex predator, 11m long. Found in Río Negro."
  },
  {
    year: "2019",
    image: dino3,
    title: "Maip macrothorax",
    description: "Largest megaraptor. 10m long, 5 tons. Found in El Calafate."
  },
  {
    year: "2023",
    image: dino2,
    title: "Patagorhynchus",
    description: "Oldest platypus fossil in South America. 70 million years old."
  },
  {
    year: "2025",
    image: dino4,
    title: "Antarctic Project",
    description: "First vertebrate fossils uncovered in Antarctica by our team."
  },
  {
    year: "2027",
    image: dino5,
    title: "Next Expedition",
    description: "New sites in Southern Patagonia to be explored in 2027–2028."
  }
];

export default function LineaTiempo() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Major Discoveries by Year</h2>
      <div className="timeline-container">
        <div className="timeline-line" />

        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            {/* Título arriba */}
            <div className="timeline-title-top">
              <h3>{item.title}</h3>
            </div>

            {/* Nodo central con imagen y año */}
            <div className="timeline-node">
              <img src={item.image} alt={item.title} className="timeline-image" />
              <div className="timeline-year">{item.year}</div>
            </div>

            {/* Descripción abajo */}
            <div className="timeline-info-bottom">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}