import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";
import "./Footer.css";
import DonateBanner from "./DonateBanner";
import { Link } from "react-router-dom";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <DonateBanner />

      <footer className="footer-premium">

        {/* 🔥 BACKGROUND VIDEO */}
        <video
          className="footer-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./footer/videoplayback.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY (for readability) */}
        <div className="footer-overlay"></div>

        {/* TOP CTA */}
        <div className="footer-cta">
          <div>
            <span className="footer-tag">LET’S WORK TOGETHER</span>
            <h2>Creating Impact Through Purpose & Action</h2>
            <p>
              VRSF works across education, health, environment and skills to
              build a safer, aware and empowered society.
            </p>
          </div>

          <div className="footer-cta-actions">
            <button
              className="btn-primary"
              onClick={() =>
                window.location.href =
                  "https://pages.razorpay.com/veyonicrisesocialfoundation"
              }
            >
              Donate Now
            </button>
            <button className="btn-outline">Join as Volunteer</button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="footer-container">

          <div className="footer-col">
            <img src="/footer/image.png" alt="VRSF Logo" className="footer-logo" />
            <p className="footer-small">
              Section 8 Company (Companies Act, 2013) <br />
              CIN: U88900BR2025NPL079996
            </p>
            <p>
              VRSF is committed to social awareness, financial literacy,
              healthcare, environmental responsibility, child safety and
              skill development initiatives.
            </p>

            <div className="social-row">
              <a href="https://www.facebook.com/profile.php?id=61583877177113"><FaFacebookF /></a>
              <a href="https://www.instagram.com/veyonicrise/"><FaInstagram /></a>
              <a href="https://www.youtube.com/@VeyonicRiseSocialFoundation"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/veyonicrise-social-foundation-767b91391/"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Our Focus Areas</h3>
            <ul className="footer-links">
              <li>Social Awareness</li>
              <li>Financial Literacy</li>
              <li>Health & Hygiene Camps</li>
              <li>Environmental Drives</li>
              <li>Child Safety</li>
              <li>Skill Development</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Our Programs</li>
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact">
              <p><FaMapMarkerAlt /> H. No: 115, 3rd Floor, Petrol Line Nosha Patna, INDIA – 801505</p>
              <p><FaEnvelope /> support@vrsf.org</p>
              <p><FaPhoneAlt /> +91 7979969125</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} VRSF. All Rights Reserved.
          <div className="footer-policies">
            <Link to="/policies/privacy">Privacy Policy</Link>
            <Link to="/policies/terms">Terms of Use</Link>
            <Link to="/policies/refund">Refund Policy</Link>
            <Link to="/policies/disclaimer">Disclaimer</Link>
            <Link to="/policies/child">Data Protection</Link>
          </div>
        </div>

      </footer>

      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </>
  );
}