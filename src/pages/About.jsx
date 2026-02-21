import "./About.css";
import {
  FaHandsHelping,
  FaMoneyBillWave,
  FaHeartbeat,
  FaLeaf,
  FaChild,
  FaUserGraduate,
  FaEye,
  FaBullseye,
  FaUsers,
  FaShieldAlt,
  FaHandshake
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about-modern">

      {/* HERO */}
      <div className="about-hero">
        <h1>About VRSF</h1>
        <p>
          VRSF (VeyonicRise Social Foundation) is a purpose-driven,
          Section 8 non-profit organization committed to creating meaningful
          and sustainable change at the grassroots level.
        </p>
      </div>

      {/* INTRO */}
      <div className="about-container">
        <p className="about-intro">
          We believe that real progress begins when communities are empowered
          with awareness, education, health, safety, skills, and a clean environment.
        </p>
      </div>

      {/* CORE AREAS */}
      <div className="core-section">
        <h2>Our Core Areas</h2>

        <div className="core-grid">

          <div className="core-card">
            <FaHandsHelping className="core-icon" />
            <h3>Social Awareness Programs</h3>
            <p>Promoting education, rights, responsibilities, and social harmony.</p>
          </div>

          <div className="core-card">
            <FaMoneyBillWave className="core-icon" />
            <h3>Financial Literacy Workshops</h3>
            <p>Enabling individuals to make informed financial decisions.</p>
          </div>

          <div className="core-card">
            <FaHeartbeat className="core-icon" />
            <h3>Health & Hygiene Camps</h3>
            <p>Improving community well-being through preventive healthcare.</p>
          </div>

          <div className="core-card">
            <FaLeaf className="core-icon" />
            <h3>Environment Care Drives</h3>
            <p>Encouraging sustainable practices and protecting ecosystems.</p>
          </div>

          <div className="core-card">
            <FaChild className="core-icon" />
            <h3>Child Safety Programs</h3>
            <p>Creating safe environments for children to grow and learn.</p>
          </div>

          <div className="core-card">
            <FaUserGraduate className="core-icon" />
            <h3>Youth Skill Development</h3>
            <p>Empowering young minds with practical employment skills.</p>
          </div>

        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="vision-mission">

        <div className="vm-card">
          <FaEye className="vm-icon" />
          <h2>Vision</h2>
          <p>
            To empower 3 lakh individuals in rural and semi-urban India
            to live safer, healthier, and more self-reliant lives by 2030.
          </p>
        </div>

        <div className="vm-card">
          <FaBullseye className="vm-icon" />
          <h2>Mission</h2>
          <p>
            To deliver structured programs in awareness, literacy,
            health, environmental care, child safety and youth development.
          </p>
        </div>

      </div>

      {/* VALUES */}
      <div className="values-section">
        <h2>Our Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Community First</h3>
            <p>We prioritize the needs and well-being of communities.</p>
          </div>

          <div className="value-card">
            <FaShieldAlt className="value-icon" />
            <h3>Integrity & Transparency</h3>
            <p>We operate with honesty, accountability and openness.</p>
          </div>

          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h3>Collaboration</h3>
            <p>We believe collective effort creates lasting impact.</p>
          </div>

        </div>
      </div>

    </section>
  );
}