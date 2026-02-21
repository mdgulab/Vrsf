import "./HomeAboutSection.css";

export default function HomeAboutSection() {
  return (
    <section className="home-about">

      <div className="home-about-content">
        <h2>About VRSF</h2>

        <p>
          VRSF (VeyonicRise Social Foundation) is a purpose-driven, 
          Section 8 non-profit organization committed to creating meaningful 
          and sustainable change at the grassroots level. We believe that 
          real progress begins when communities are empowered with awareness, 
          education, health, safety, skills, and a clean environment.
        </p>
      </div>

      <div className="home-about-video">
        <iframe
          src="https://www.youtube.com/embed/5KdGqW1Kt60?si=p8dvsIYWHuJYRxI5"
          title="VRSF Introduction"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}
