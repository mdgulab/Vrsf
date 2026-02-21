import "./Campaigns.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Campaigns() {
  const [ref, visible] = useScrollReveal();

  const campaigns = [
    {
      title: "Environment Care Drive",
      date: "5 Feb 2026",
      desc: "Save Earth, Grow Green initiative conducted in rural schools.",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d"
    }
  ];

  return (
    <section
      ref={ref}
      className={`campaigns reveal ${visible ? "active" : ""}`}
    >
      <h2>Latest Campaigns</h2>

      <div className="campaign-grid">
        {campaigns.map((item, index) => (
          <div key={index} className="campaign-card">
            <div
              className="campaign-image"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="campaign-date">{item.date}</span>
            </div>

            <div className="campaign-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
