import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function EventDetails() {

  const { id } = useParams();
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return <h2 style={{padding: "150px 20px"}}>Event Not Found</h2>;
  }

  return (
    <section className="event-details">

      <div className="event-hero">
        <h1>{event.title}</h1>
      </div>

      <div className="event-container">

        <p className="event-full-desc">{event.fullDescription}</p>

        <a href={event.pdf} download className="pdf-btn">
          Download Report (PDF)
        </a>

        <div className="gallery">
          {event.gallery.map((img, index) => (
            <img src={img} key={index} alt="Event" />
          ))}
        </div>

      </div>

    </section>
  );
}