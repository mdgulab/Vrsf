import { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "./OurTeam.css";

export default function OurTeam() {
  const [activeMember, setActiveMember] = useState(null);

  const teamData = [
    {
      category: "Board of Directors",
      members: [
        {
          name: "Mr. Mustafa Kamal",
          role: "Founder, Managing Director & CEO",
          image: "/team/mustafa.jpg",
          short: "Finance & rural development leader.",
          full:
            "Brings 10+ years of experience in finance and rural literacy programs. Has led training initiatives and community empowerment projects.",
          timeline: [
            { year: "2015", detail: "Started Finance Career" },
            { year: "2018", detail: "Led Rural Literacy Program" },
            { year: "2022", detail: "Founded VRSF" }
          ]
        },
        {
          name: "Dr. Inzam Uddin",
          role: "Co-Founder, Director & COO",
          image: "/team/inzamam.jpg",
          short: "Healthcare & public outreach expert.",
          full:
            "Specialized in healthcare programs and grassroots initiatives. Actively involved in public health and community development.",
          timeline: [
            { year: "2016", detail: "Doctor of Pharmacy" },
            { year: "2019", detail: "Public Health Projects" },
            { year: "2022", detail: "Co-founded VRSF" }
          ]
        }
      ]
    },
    {
      category: "Management Team",
      members: [
        {
          name: "Mr. Md Gulab",
          role: "IT Head",
          image: "/team/gulab.jpg",
          short: "Technology & systems strategist.",
          full:
            "Responsible for IT systems, digital growth, and technological implementation within VRSF.",
          timeline: [
            { year: "2019", detail: "Joined IT Sector" },
            { year: "2023", detail: "IT Head at VRSF" }
          ]
        },
        {
          name: "Md Noor Alam",
          role: "Media & Communication Head",
          image: "/team/noor.jpg",
          short: "Media & public relations specialist.",
          full:
            "Handles public communication, social outreach campaigns, and brand representation.",
          timeline: [
            { year: "2020", detail: "Media Industry Entry" },
            { year: "2023", detail: "Joined VRSF Leadership" }
          ]
        }
      ]
    },
    {
      category: "Operations Team",
      members: [
        {
          name: "Mr. Jayram Thakur",
          role: "Project Manager",
          short: "Oversees ground operations & execution.",
          full:
            "Responsible for managing field projects, coordinating teams, and ensuring execution quality.",
          timeline: [
            { year: "2021", detail: "Operations Lead" }
          ]
        },
        {
          name: "Mr. Ankit Kumar",
          role: "Project Incharge",
          short: "On-ground coordination expert.",
          full:
            "Supervises rural outreach initiatives and ensures operational efficiency.",
          timeline: [
            { year: "2022", detail: "Field Coordination Lead" }
          ]
        }
      ]
    }
  ];

  return (
    <section className="team-corporate">

      <div className="team-hero">
        <h1>Our Leadership & Teams</h1>
        <p>Meet the professionals driving meaningful impact.</p>
      </div>

      {teamData.map((section, index) => (
        <div key={index} className="team-section">
          <h2>{section.category}</h2>

          <div className="team-grid">
            {section.members.map((member, i) => (
              <div key={i} className="team-card">
                {member.image && (
                  <img src={member.image} alt={member.name} />
                )}
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.short}</p>

                <div className="social-row">
                  <FaLinkedin className="linkedin" />
                  <FaTwitter />
                  <FaFacebook />
                </div>

                <button onClick={() => setActiveMember(member)}>
                  Read Full Profile →
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MODAL */}
      {activeMember && (
        <div className="modal-overlay" onClick={() => setActiveMember(null)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeMember.name}</h2>
            <span>{activeMember.role}</span>
            <p>{activeMember.full}</p>

            <div className="timeline">
              {activeMember.timeline.map((item, i) => (
                <div key={i} className="timeline-row">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-text">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="close-btn"
              onClick={() => setActiveMember(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}