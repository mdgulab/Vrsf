import { useState } from "react";
import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../styles/Events.css";

export default function Events() {

  const [statusFilter, setStatusFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");

  const today = new Date();

  const getStatus = (date) => {
    return new Date(date) > today ? "Upcoming" : "Completed";
  };

  const filteredEvents = eventsData.filter((event) => {
    const eventYear = new Date(event.date).getFullYear().toString();
    const status = getStatus(event.date);

    return (
      (statusFilter === "All" || status === statusFilter) &&
      (yearFilter === "All" || eventYear === yearFilter)
    );
  });

  const years = [
    "All",
    ...new Set(eventsData.map(e =>
      new Date(e.date).getFullYear().toString()
    ))
  ];

  return (
    <section className="events-page">

      <div className="events-hero">
        <h1>Our Events</h1>
        <p>Explore our community initiatives and impact activities.</p>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
        </select>

        <select onChange={(e) => setYearFilter(e.target.value)}>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year === "All" ? "All Years" : year}
            </option>
          ))}
        </select>

      </div>

      {/* CARDS */}
      <div className="events-container">
        {filteredEvents.map((event) => {
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

    </section>
    
  );
}