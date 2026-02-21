import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaLeaf, FaHeartbeat, FaUserShield, FaChalkboardTeacher, FaHandsHelping, FaSeedling } from "react-icons/fa";
import "./InitiativesSection.css";

const initiatives = [
  {
    title: "Social Awareness",
    desc: "Spreading awareness about education, equality, civic duties and social harmony.",
    icon: <FaHandsHelping />,
    img: "/init1.png"
  },
  {
    title: "Financial Literacy",
    desc: "Workshops on savings, loans and digital safety.",
    icon: <FaChalkboardTeacher />,
    img: "/init2.png"
  },
  {
    title: "Health & Hygiene",
    desc: "Free checkups and hygiene awareness camps.",
    icon: <FaHeartbeat />,
    img: "/init3.png"
  },
  {
    title: "Environmental Care",
    desc: "Tree plantation and sustainability programs.",
    icon: <FaLeaf />,
    img: "/init4.png"
  },
  {
    title: "Child Protection",
    desc: "Promoting child safety and rights awareness.",
    icon: <FaUserShield />,
    img: "/init5.png"
  },
  {
    title: "Skill Development",
    desc: "Modern skill training and career guidance.",
    icon: <FaSeedling />,
    img: "/init6.png"
  }
];

export default function InitiativesSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="init-advanced-section">

      <div className="init-header">
        <h2>Our Initiatives</h2>
        <p>Bridging rural challenges with sustainable solutions.</p>
      </div>

      <div className="slider-wrapper">

        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="init-grid" ref={scrollRef}>
          {initiatives.map((item, index) => (
            <div className="init-card" key={index}>
              <div
                className="init-image"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="init-overlay">
                  <div className="init-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
}
