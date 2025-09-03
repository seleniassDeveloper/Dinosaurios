// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Expedition from "./pages/Expedition";
import Impact from "./pages/Impact";
import Press from "./pages/Press";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="px-5 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expedition" element={<Expedition />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </div>
    </>
  );
}