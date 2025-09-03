// src/pages/LineaTiempo.jsx
import "../css/Timeline.css";

import dino1 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio.png";
import dino2 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio2.jpeg";
import dino3 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio3.png";
import dino4 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio4.png";
import dino5 from "../ImgCampanas/imgDibujosDinosaurios/dinosaurio5.png";

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
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className={`timeline-info ${index % 2 === 0 ? "top" : "bottom"}`}>
              <h3>{item.year}</h3>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>

            <div className="timeline-node">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}