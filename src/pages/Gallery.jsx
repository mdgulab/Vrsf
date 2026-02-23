import DonateBanner from "../components/DonateBanner";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1584515933487-779824d29309",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
  ];

  return (
    <section className="gallery-page">
      <h1>Our Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt="Gallery" />
            
          </div>
        ))}
        
      </div>
      
            
    </section>
    
  );
  
}
