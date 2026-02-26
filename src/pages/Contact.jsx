import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, subject, message } = formData;

    const whatsappMessage = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
    `;

    const phoneNumber = "917979969125";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We’re always here to listen, support, and collaborate with you.</p>
      </div>

      {/* OFFICE INFO */}
      <div className="office-strip">
        <div className="office-glass">
          <span className="tag">Regional Office</span>
          <h3>Patna, Bihar</h3>
          <p>H. No: 115, 3rd Floor, Petrol Line Nosha, Patna – 801505</p>
          <p>📞 +91 7905209467</p>
          <p>✉️ contact@vrsf.org.in</p>
        </div>

        <div className="office-glass">
          <span className="tag">Registered Office</span>
          <h3>Begusarai, Bihar</h3>
          <p>C/O Md Farid, Begusarai – 851211</p>
          <p>📞 +91 6201732721</p>
          <p>✉️ contact@vrsf.org.in</p>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form-wrapper">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <p className="form-sub">
            Fill the form and we’ll respond quickly via WhatsApp.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <label className="checkbox">
              <input type="checkbox" required />
              I agree to be contacted via WhatsApp
            </label>

            <button type="submit" className="contact-btn">
              Send via WhatsApp →
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}