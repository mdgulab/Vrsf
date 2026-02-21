import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="footer-premium">

        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-col">
            <img src="/footer/image.png" alt="VRSF Logo" className="footer-logo" />

            <p className="footer-small">
              A Section 8 Company, registered under the Companies Act, 2013.  
              CIN: U88900BR2025NPL079996
            </p>

            <p>
              VRSF focuses on six core areas of impact — Social Awareness,
              Financial Literacy, Health & Hygiene Camps, Environmental Drives,
              Child Safety and Skill Development.
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-row">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>

          </div>

          {/* CENTER */}
          <div className="footer-col subscribe-col">
            <h3>Stay Connected</h3>

            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email..." />
              <button>Subscribe</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-col">
            <h3>Our Policies</h3>
            <ul className="policy-list">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation Policy</li>
              <li>Donation / Fund Utilisation Policy</li>
              <li>Disclaimer</li>
              <li>Child Protection & Safeguarding Policy</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} VRSF — All Rights Reserved.
        </div>

      </footer>

      {/* Floating Back To Top */}
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </>
  );
}
