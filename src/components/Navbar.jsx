import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    
    <header className="navbar-modern">
      
      <div className="nav-wrapper">

        

        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
  <img src="/header/image.png" alt="VRSF Logo" />
</NavLink>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>

          <div className="dropdown-item">
            <div
              className="dropdown-title"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About <FaChevronDown />
            </div>

            {aboutOpen && (
              <div className="dropdown-menu">
                <NavLink to="/about" onClick={closeMenu}>
                  About VRSF
                </NavLink>
                <NavLink to="/ourteam" onClick={closeMenu}>
                  Our Team
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/Initiatives" onClick={closeMenu}>
            Our Initiatives
          </NavLink>
          <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <button className="support-btn" onClick={() => window.location.href = "https://pages.razorpay.com/veyonicrisesocialfoundation"}>
            Support Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}