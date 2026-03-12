import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaLeaf, FaHeartbeat, FaUserShield, FaChalkboardTeacher, FaHandsHelping, FaSeedling } from "react-icons/fa";
import "./InitiativesSection.css";

const initiatives = [
    {
    title: "Health & Hygiene",
    desc: "To promote public health and hygiene through awareness programs, preventive healthcare initiatives, medical camps, nutrition awareness, sanitation campaigns, and community health development activities.",
    icon: <FaHeartbeat />,
    img: "/init3.png"
  },
  {
    title: "Women & Child Welfare",
    desc: "To promote the education, safety, and empowerment of women and children through awareness programs, educational initiatives, training programs, and community development activities.",
    icon: <FaUserShield />,
    img: "/init5.png"
  },
   {
    title: "Environmental Care",
    desc: "To undertake environmental protection and sustainability initiatives including tree plantation drives, environmental awareness programs, climate awareness campaigns, and waste management initiatives.",
    icon: <FaLeaf />,
    img: "/init4.png"
  },
   {
    title: "Skill Development",
    desc: "MTo organize skill development programs, vocational training workshops, digital literacy initiatives, employability training, and livelihood development programs for youth and underserved communities.",
    icon: <FaSeedling />,
    img: "/init6.png"
  },
  {
    title: "Social Awareness",
    desc: "To conduct awareness campaigns, seminars, workshops, and community outreach programs addressing social issues, civic responsibility, and community development.",
    icon: <FaHandsHelping />,
    img: "/init1.png"
  },
  {
    title: "Financial Literacy",
    desc: "To promote financial literacy, banking awareness, savings education, digital financial knowledge, and responsible financial practices through training and awareness initiatives.",
    icon: <FaChalkboardTeacher />,
    img: "/init2.png"
  },

 
  
 
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
