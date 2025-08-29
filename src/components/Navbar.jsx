import { Link } from "react-router-dom";
import "../css/Navbar.css"; // usa el CSS de abajo

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <Link to="/expedition">Expedición</Link>
        <Link to="/impact">Impacto</Link>
        <Link to="/press">Prensa</Link>
        <Link to="/donate" className="donate">Donar</Link>
      </nav>
    </header>
  );
}