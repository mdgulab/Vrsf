import { useRef } from "react";
import "./JoinSection.css";
import VolunteerPopup from "./PopUp/VolunteerPopup";

export default function JoinSection() {
  const volunteerRef = useRef(); // 👈 ref create

  return (
    <section className="join-section">
      <div className="join-overlay">
        <div className="join-content">
          <span className="join-tag">COME JOIN US</span>

          <div className="join-divider"></div>

          <h2>
            Be a part of the change — <br />
            <span>Join VRSF Today</span>
          </h2>

          {/* 🔥 YAHI BUTTON SE POPUP OPEN HOGA */}
          <button
            className="join-btn"
            onClick={() => volunteerRef.current.openPopup()}
          >
            Become a Volunteer →
          </button>
        </div>
      </div>

      {/* 🔽 Popup yahin mount rahega (hidden until open) */}
      <VolunteerPopup ref={volunteerRef} />
    </section>
  );
}