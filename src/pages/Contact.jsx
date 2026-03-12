
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "https://vrsf.org.in/backend-project/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.status === "success") {

        alert("Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });

      } else {

        alert("Something went wrong");

      }

    } catch (error) {

      console.error(error);
      alert("Server error");

    }
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
            Fill the form and we will contact you soon.
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
              I agree to be contacted
            </label>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
