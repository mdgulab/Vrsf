import "./FounderSection.css";

export default function FounderSection() {
  return (
    <section className="founder">
      <div className="founder-container">
        
        <div className="founder-image">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf"
            alt="Founder"
          />
        </div>

        <div className="founder-content">
          <h2>Message From Our Founder</h2>
          <p className="founder-quote">
            "Our mission is to empower rural communities with awareness,
            education and sustainable opportunities."
          </p>

          <p>
            At VRSF, we believe real change begins at the grassroots level.
            Through social awareness programs, health initiatives and youth
            skill development, we aim to create a future filled with dignity
            and opportunity for every individual.
          </p>

          <button className="founder-btn">Read Full Story</button>
        </div>

      </div>
    </section>
  );
}
