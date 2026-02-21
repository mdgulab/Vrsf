import { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {

  const images = [
    "/init1.png",
    "/poster1.png",
    "/init5.png"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-vrsf">

      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left-content">
          <h1>VeyonicRise Social Foundation</h1>

          <p>
            VRSF focuses on six core areas of impact — Social Awareness Programs,
            Financial Literacy & Facilitation Workshops, Health & Hygiene Camps,
            Environmental Responsibilities Drives, Child Protection and Skill
            Development Trainings for youths.
          </p>

          <button className="hero-support-btn">
            SUPPORT US →
          </button>
        </div>

        {/* RIGHT QR */}
        <div className="hero-qr">
          <div className="qr-card">
            {/* <span>SCAN & PAY</span> */}
            <img src="/image.png" alt="QR Code" />
          </div>
        </div>

      </div>

    </section>
  );
}
