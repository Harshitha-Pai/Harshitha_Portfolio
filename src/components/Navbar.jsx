import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav">
        <Link to="/" className="brand">Harshitha Pai</Link>
        <button className="burger" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <nav className={`menu ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
