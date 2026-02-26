import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function EventDetails() {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return <h2 style={{ padding: "150px 20px" }}>Event Not Found</h2>;
  }

  return (
    <section className="event-details">

      {/* ===== HERO ===== */}
      <div className="event-hero">
        <h1>{event.title}</h1>
      </div>

      <div className="event-container">

        {/* ===== BASIC INFORMATION ===== */}
        <div className="event-info">
          <p><strong>Activity Name:</strong> {event.activityName}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Organized By:</strong> {event.organizedBy}</p>
        </div>

        {/* ===== OBJECTIVES ===== */}
        <h3>Objectives of the Program</h3>
        <ul>
          {event.objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ===== PROGRAM DESCRIPTION ===== */}
        <h3>Program Description</h3>
        <p className="event-full-desc">{event.programDescription}</p>

        {/* ===== DIGNITARIES ===== */}
        <h3>Dignitaries & Participants</h3>
        <p>{event.dignitaries}</p>

        {/* ===== IMPACT ===== */}
        <h3>Impact of the Program</h3>
        <p>{event.impact}</p>

        {/* ===== DOCUMENTS ===== */}
        <h3>Official Documents</h3>
        <div className="pdf-group">
          <a href={event.documents.declaration} download className="pdf-btn">
            Declaration
          </a>
          <a href={event.documents.activityReport} download className="pdf-btn">
            Activity Report
          </a>
          <a href={event.documents.participationRecord} download className="pdf-btn">
            Participation Record
          </a>
        </div>

        {/* ===== GALLERY ===== */}
        <h3>Event Gallery</h3>
        <div className="gallery">
          {event.gallery.map((img, index) => (
            <img src={img} key={index} alt="Event" />
          ))}
        </div>

      </div>
    </section>
  );
}