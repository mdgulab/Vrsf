import { useState } from "react";
import "./Initiatives.css";

const initiatives = [
  {
    id: "01",
    title: "Social Awareness Programs",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    short:
      "Promoting awareness about education, equality, and social responsibility.",
    points: [
      "Education and literacy awareness",
      "Gender equality and social harmony",
      "Civic sense and community responsibility",
      "Interactive village-level sessions",
    ],
    description:
      "Through village visits, workshops, and group discussions, we engage directly with rural communities to raise awareness about education, equality, civic duties, and social harmony. These programs aim to create informed and responsible citizens who actively contribute to society.",
    icon: "🌍",
  },
  {
    id: "02",
    title: "Financial Literacy & Facilitation",
    image:
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
    short:
      "Helping individuals understand savings, banking, loans, and schemes.",
    points: [
      "Banking and savings education",
      "Government schemes awareness",
      "Digital payments and fraud prevention",
      "Loan facilitation guidance",
    ],
    description:
      "Our financial literacy initiatives educate communities about managing money, understanding banking services, avoiding digital fraud, and accessing government schemes. We also assist individuals in understanding loan processes and financial documentation.",
    icon: "💰",
  },
  {
    id: "03",
    title: "Health & Hygiene Camps",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
    short:
      "Providing healthcare support and hygiene awareness.",
    points: [
      "Free medical checkups",
      "Doctor consultations",
      "Basic medicine distribution",
      "Hygiene and sanitation awareness",
    ],
    description:
      "We organize health camps offering free checkups, consultations, and medicines. Alongside medical care, we educate families about hygiene, nutrition, and disease prevention to ensure long-term community well-being.",
    icon: "🩺",
  },
  {
    id: "04",
    title: "Environmental Care Drives",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    short:
      "Encouraging sustainable and eco-friendly practices.",
    points: [
      "Tree plantation drives",
      "Cleanliness campaigns",
      "Waste management awareness",
      "Nature conservation education",
    ],
    description:
      "Our environmental drives focus on spreading awareness about sustainability, tree protection, cleanliness, and conservation of natural resources, encouraging communities to adopt eco-friendly habits.",
    icon: "🌱",
  },
  {
    id: "05",
    title: "Child Safety & Protection",
    image:
      "https://images.unsplash.com/photo-1504151932400-72d4384f04b3",
    short:
      "Ensuring safety, rights, and well-being of children.",
    points: [
      "Child rights awareness",
      "Safe learning environments",
      "Parental and community engagement",
      "Protection from exploitation",
    ],
    description:
      "This initiative focuses on educating parents and communities about child safety, rights, and the importance of a secure environment. Our aim is to protect children and ensure their holistic development.",
    icon: "🧒",
  },
  {
    id: "06",
    title: "Skill Development for Youth",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    short:
      "Equipping youth with skills for modern careers.",
    points: [
      "Career guidance sessions",
      "Digital and technical skills",
      "Introduction to modern technologies",
      "Alternative career pathways",
    ],
    description:
      "We support youth by offering skill development programs, career guidance, and exposure to modern technologies. This helps them build employable skills and explore multiple career opportunities.",
    icon: "🚀",
  },
];

export default function Initiatives() {
  const [activeId, setActiveId] = useState(null);

  const handleFlip = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="initiatives-page">
      <div className="initiatives-hero">
        <h1>Our Key Initiatives</h1>
        <p>
          Click on an initiative to explore its impact and detailed
          description.
        </p>
      </div>

      <div className="initiatives-grid">
        {initiatives.map((item) => (
          <div
            key={item.id}
            className={`flip-card ${
              activeId === item.id ? "flipped" : ""
            }`}
            onClick={() => handleFlip(item.id)}
          >
            <div className="flip-inner">
              {/* FRONT */}
              <div
                className="flip-front"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="overlay" />
                <div className="front-content">
                  <span className="icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  <span className="hint">Click to read more</span>
                </div>
              </div>

              {/* BACK */}
              <div className="flip-back">
                <h3>{item.title}</h3>

                <ul>
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <p className="back-desc">{item.description}</p>
                <span className="hint">Click to go back</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}