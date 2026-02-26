import {
  FaEye,
  FaBullseye,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import "./VisionMissionSection.css";

export default function VisionMissionSection() {
  return (
    <section className="vm-section">
      <div className="vm-container">
        {/* VISION */}
        <div
          className="vm-card"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/success-growth-concept-with-glowing-stairway-ladder-design-background_1017-45412.jpg?semt=ais_user_personalization&w=740&q=80)",
          }}
        >
          <div className="vm-overlay" />

          <FaEye className="vm-icon" />
          <h3>Vision</h3>
          <p>
            To empower 3 lakh individuals in rural and semi-urban India to live
            safer, healthier, and more self-reliant lives by 2030.
          </p>
        </div>

        {/* MISSION */}
        <div
          className="vm-card"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/technological-background-with-abstract-shapes_1201-956.jpg?semt=ais_user_personalization&w=740&q=80)",
          }}
        >
          <div className="vm-overlay" />

          <FaBullseye className="vm-icon" />
          <h3>Mission</h3>
          <p>
            To achieve this by delivering structured programs in social
            awareness, financial literacy, health and hygiene, environmental
            care, child safety and protection, and youth skill development at the
            grassroots level.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="values-section">
        <h2>Our Values</h2>

        <div className="values-grid">
          <div className="value-item">
            <FaUsers />
            <span>Community First</span>
          </div>

          <div className="value-item">
            <FaShieldAlt />
            <span>Integrity & Transparency</span>
          </div>

          <div className="value-item">
            <FaHandshake />
            <span>Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}