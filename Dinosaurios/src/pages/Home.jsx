// src/pages/Home.jsx
import "../css/site.css";
import "../css/Home.css";

import ExpeditionLanding from "./componentes/ExpeditionLanding";
import KPIs from "../components/KPIs";
import HeroSection from "../components/Home/HeroSection";
import MainSection from "../components/Home/mainSection";
import ParrafoWelcome from "./componentes/parrafoWelcome";
import Colaboradores from "../components/Home/Colaboradores";

export default function Home() {
  return (
    <main className="with-fixed-nav ">
      <div>
        <MainSection />
      </div>
      <div className="pt-5">
        <HeroSection />
      </div>
      <div>
        <ParrafoWelcome />
      </div>
      <Colaboradores />
    </main>
  );
}
