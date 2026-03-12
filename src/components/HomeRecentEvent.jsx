import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../data/eventsData";
import "../styles/Events.css";

export default function RecentEvents() {

  const [events, setEvents] = useState([]);

  const today = new Date();

  useEffect(() => {

    getEvents().then(data => {
      setEvents(data);
    });

  }, []);

  const getStatus = (date) => {
    return new Date(date) > today ? "Upcoming" : "Completed";
  };

  // latest 3 events
  const recentEvents = [...events].slice(0, 3);

  return (
    <section className="home-events">

      {/* SECTION TITLE */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>

        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#2b5ea7",
            marginBottom: "10px"
          }}
        >
          Recent & Upcoming Events
        </h2>

        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#2aa198",
            margin: "0 auto 15px auto",
            borderRadius: "10px"
          }}
        ></div>

        <p
          style={{
            fontSize: "18px",
            color: "#555"
          }}
        >
          Discover our latest community programs and initiatives.
        </p>

      </div>

      {/* EVENTS CARDS */}
      <div className="events-container">

        {recentEvents.map((event) => {

          const status = getStatus(event.date);
          const formattedDate = new Date(event.date).toLocaleDateString();

          return (
            <div className="event-card" key={event.id}>

              <div className="event-image">

                <img src={event.cover_image} alt={event.title} />

                <div className={`date-badge ${status.toLowerCase()}`}>
                  {formattedDate}
                </div>

                <div className={`status-badge ${status.toLowerCase()}`}>
                  {status}
                </div>

              </div>

              <div className="event-body">

                <h3>{event.title}</h3>

                <p>{event.short_description}</p>

                <Link to={`/events/${event.id}`} className="event-btn">
                  Read Full Details →
                </Link>

              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
}