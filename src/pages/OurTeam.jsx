import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./OurTeam.css";

export default function OurTeam() {
  return (
    <section className="team-page">

      {/* ================= HERO ================= */}
      <div className="team-hero">
        <h1>Leadership & Core Team</h1>
        <p>
          Experienced professionals committed to building sustainable social
          impact through structured programs and strong execution.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="team-content">

        {/* ===== LEADERSHIP (FOUNDER + INZAM) ===== */}
        <div className="leader-grid">

          {/* Founder */}
          <div className="leader-card">
            <img src="/team/mustafa.jpg" alt="Mr. Mustafa Kamal" />
            <h3>Mr. Mustafa Kamal</h3>
            <span className="role">Founder, Managing Director & CEO</span>
            <span className="exp">10+ Years Experience</span>

            <p>
              Finance and rural development leader driving large-scale literacy,
              empowerment and impact programs across communities.
            </p>

            <div className="leader-stats">
              <div><strong>10+</strong><span>Years</span></div>
              <div><strong>15+</strong><span>Programs</span></div>
              <div><strong>3L+</strong><span>People</span></div>
            </div>

            <div className="social-btns">
              <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          {/* Inzam (MOVED HERE) */}
          <div className="leader-card">
            <img src="/team/inzamam.jpg" alt="Dr. Inzam Uddin" />
            <h3>Dr. Inzam Uddin</h3>
            <span className="role">Co-Founder, Director & COO</span>
            <span className="exp">8+ Years · Healthcare & Ops</span>

            <p>
              Leads healthcare initiatives, operational planning and grassroots
              execution with strong public health expertise.
            </p>

            <div className="social-btns">
              <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* ===== CORE TEAM GRID ===== */}
        <div className="team-grid">

          {/* Sarfaraz (MOVED HERE) */}
          <div className="team-card">
            <img src="/team/sarfaraz.jpg" alt="Mr. Md. Sarfaraz Alam" />
            <h4>Mr. Md. Sarfaraz Alam</h4>
            <span>Chairman & Joint Secretary</span>
            <span className="exp">10+ Years · Social Leadership</span>
            <p>
              A dedicated social leader and community representative known for
              integrity, social justice and empowering marginalized communities.
            </p>

            <div className="social-btns">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div className="team-card">
            <img src="/team/gulab.jpg" alt="Mr. Md Gulab" />
            <h4>Mr. Md Gulab</h4>
            <span>IT Head</span>
            <span className="exp">5+ Years · Technology</span>
            <p>
              Responsible for digital systems, IT infrastructure and
              technology-driven growth at VRSF.
            </p>

            <div className="social-btns">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div className="team-card">
            <img src="/team/noor.jpg" alt="Md Noor Alam" />
            <h4>Md Noor Alam</h4>
            <span>Media & Communication Head</span>
            <span className="exp">6+ Years · Media & PR</span>
            <p>
              Handles media strategy, communication campaigns and public outreach
              initiatives.
            </p>

            <div className="social-btns">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div className="team-card">
            <img src="/team/jayram.jpg" alt="Mr. Jayram Thakur" />
            <h4>Mr. Jayram Thakur</h4>
            <span>Project Manager</span>
            <span className="exp">4+ Years · Operations</span>
            <p>
              Oversees field operations, project execution and on-ground team
              coordination.
            </p>

            <div className="social-btns">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div className="team-card">
            <img src="/team/ankit.jpg" alt="Mr. Ankit Kumar" />
            <h4>Mr. Ankit Kumar</h4>
            <span>Project Incharge</span>
            <span className="exp">3+ Years · Field Programs</span>
            <p>
              Manages rural outreach initiatives and ensures smooth execution at
              the grassroots level.
            </p>

            <div className="social-btns">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}