import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function RecentEvents() {

  const today = new Date();

  const getStatus = (date) => {
    return new Date(date) > today ? "Upcoming" : "Completed";
  };

  // last 3 events and latest first
  const recentEvents = [...eventsData].slice(-3).reverse();

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
          Recent Events
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
                <img src={event.coverImage} alt={event.title} />

                <div className={`date-badge ${status.toLowerCase()}`}>
                  {formattedDate}
                </div>

                <div className={`status-badge ${status.toLowerCase()}`}>
                  {status}
                </div>
              </div>

              <div className="event-body">
                <h3>{event.title}</h3>
                <p>{event.shortDescription}</p>

                <Link to={`/events/${event.id}`} className="event-btn">
                  Read Full Details →
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* VIEW ALL BUTTON */}

      {/* <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/events" className="event-btn">
          View All Events →
        </Link>
      </div> */}

    </section>
  );
}