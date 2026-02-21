import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="navbar-modern">
      <div className="nav-wrapper">

        <div className="logo">
          <img src="/logo.png" alt="VRSF Logo" />
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end>Home</NavLink>

          <div className="dropdown-item">
            <div
              className="dropdown-title"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About <FaChevronDown />
            </div>

            {aboutOpen && (
              <div className="dropdown-menu">
                <NavLink to="/about">About VRSF</NavLink><br />
                <br />
                <NavLink to="/ourteam">Our Team</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/Initiatives">Our Initiatives</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <button className="support-btn">Support Us</button>
        </nav>

        {/* Burger menu – ONLY mobile/tablet */}
        <div className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}