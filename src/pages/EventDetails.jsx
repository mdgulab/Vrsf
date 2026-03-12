
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getEvents } from "../data/eventsData";
import "../styles/Events.css";

export default function EventDetails(){

const { id } = useParams();

const [event,setEvent] = useState(null);

useEffect(()=>{

async function loadEvent(){

const events = await getEvents();

const found = events.find(e => e.id == id);

setEvent(found);

}

loadEvent();

},[id]);

if(!event){

return <h2 style={{padding:"150px 20px"}}>Loading...</h2>;

}

return(

<section className="event-details">

<div className="event-hero">

<h1>{event.title}</h1>

</div>

<div className="event-container">


<div className="event-info">

<p><strong>Activity Name:</strong> {event.activity_name}</p>

<p><strong>Location:</strong> {event.location}</p>

<p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

<p><strong>Organized By:</strong> {event.organized_by}</p>

</div>


<h3>Objectives of the Program</h3>

<ul>

{event.objectives.map((obj,index)=>(

<li key={index}>{obj}</li>

))}

</ul>


<h3>Program Description</h3>

<p className="event-full-desc">

{event.program_description}

</p>


<h3>Dignitaries & Participants</h3>

<p>{event.dignitaries}</p>


<h3>Impact of the Program</h3>

<p>{event.impact}</p>


<h3>Official Documents</h3>

<div className="pdf-group">

{event.documents.declaration && (

<a href={event.documents.declaration} target="_blank" className="pdf-btn">

Declaration

</a>

)}

{event.documents.activityReport && (

<a href={event.documents.activityReport} target="_blank" className="pdf-btn">

Activity Report

</a>

)}

{event.documents.participationRecord && (

<a href={event.documents.participationRecord} target="_blank" className="pdf-btn">

Participation Record

</a>

)}

</div>


<h3>Event Gallery</h3>

<div className="gallery">

{event.gallery.map((img,index)=>(

<img key={index} src={img} alt="Event"/>

))}

</div>


</div>

</section>

);

}
