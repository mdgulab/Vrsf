import { useState } from "react";
import "./Initiatives.css";

const initiatives = [
  {
    id: "01",
    title: "Social Awareness Programs",
    image: "/initiativs/SocialAwarenes.png",
    short:
      "Promoting awareness about education, equality, and social responsibility.",
    points: [
      "Education and literacy awareness",
      "Gender equality and social harmony",
      "Civic sense and community responsibility",
      "Interactive village-level sessions",
    ],
    description:
      "Through village visits, workshops, and group discussions, we engage directly with rural communities to raise awareness about education, equality, civic duties, and social harmony.",
  },
  {
    id: "02",
    title: "Financial Literacy & Facilitation",
    image: "/initiativs/financialLit.png",
    short:
      "Helping individuals understand savings, banking, loans, and schemes.",
    points: [
      "Banking and savings education",
      "Government schemes awareness",
      "Digital payments and fraud prevention",
      "Loan facilitation guidance",
    ],
    description:
      "Our financial literacy initiatives educate communities about managing money, understanding banking services, and avoiding digital fraud.",
  },
  {
    id: "03",
    title: "Health & Hygiene Camps",
    image: "/initiativs/healthHyg.png",
    short: "Providing healthcare support and hygiene awareness.",
    points: [
      "Free medical checkups",
      "Doctor consultations",
      "Basic medicine distribution",
      "Hygiene and sanitation awareness",
    ],
    description:
      "We organize health camps offering free checkups and educate families about hygiene and nutrition.",
  },
  {
    id: "04",
    title: "Environmental Care Drives",
    image: "/initiativs/EnvDrive.png",
    short: "Encouraging sustainable and eco-friendly practices.",
    points: [
      "Tree plantation drives",
      "Cleanliness campaigns",
      "Waste management awareness",
      "Nature conservation education",
    ],
    description:
      "Our environmental drives focus on sustainability, cleanliness, and conservation of natural resources.",
  },
  {
    id: "05",
    title: "Child Safety & Protection",
    image: "/initiativs/childEducation.png",
    short: "Ensuring safety, rights, and well-being of children.",
    points: [
      "Child rights awareness",
      "Safe learning environments",
      "Parental and community engagement",
      "Protection from exploitation",
    ],
    description:
      "We educate parents and communities about child safety, rights, and secure environments.",
  },
  {
    id: "06",
    title: "Skill Development for Youth",
    image: "/initiativs/SkillDev.png",
    short: "Equipping youth with skills for modern careers.",
    points: [
      "Career guidance sessions",
      "Digital and technical skills",
      "Modern technology exposure",
      "Alternative career pathways",
    ],
    description:
      "We offer skill development programs and career guidance to help youth become employable.",
  },
];

export default function Initiatives() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="corp-initiatives">
      {/* HERO */}
      <header className="corp-hero">
        <span className="hero-tag">OUR INITIATIVES</span>
        <h1>Driving Sustainable Social Impact</h1>
        <p>
          Purpose-driven programs aligned with community needs and long-term
          development goals.
        </p>
      </header>

      {/* GRID */}
      <div className="corp-grid">
        {initiatives.map((item) => (
          <article
            key={item.id}
            className={`corp-card ${openId === item.id ? "active" : ""}`}
          >
            <div
              className="corp-thumb"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="corp-content">
              <h3>{item.title}</h3>
              <p className="corp-short">{item.short}</p>

              <button
                className="corp-btn"
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
              >
                {openId === item.id ? "Hide Details" : "View Details"}
              </button>

              <div className="corp-details">
                <ul>
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <p className="corp-desc">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}