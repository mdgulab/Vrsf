
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../data/eventsData";
import "../styles/Events.css";

export default function Events(){

const [events,setEvents] = useState([]);

useEffect(()=>{

async function loadEvents(){

const data = await getEvents();

setEvents(data);

}

loadEvents();

},[]);

const today = new Date();

function getStatus(date){

return new Date(date) > today ? "Upcoming" : "Completed";

}

return(

<section className="events-page">

<div className="events-hero">

<h1>Our Events</h1>

<p>Explore our community initiatives and impact activities.</p>

</div>


<div className="events-container">

{events.map(event=>{

const status = getStatus(event.date);

const formattedDate = new Date(event.date).toLocaleDateString();

return(

<div className="event-card" key={event.id}>

<div className="event-image">

<img src={event.cover_image} alt={event.title}/>

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
