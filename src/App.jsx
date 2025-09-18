// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Expedition from "./pages/Expedition";
import Impact from "./pages/Impact";
import Press from "./pages/Press";
import LivePreview from "./components/Home/LivePreview";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expedition" element={<Expedition />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/press" element={<Press />} />
          <Route path="/live" element={<LivePreview />} />
        </Routes>
      </div>
    </>
  );
}