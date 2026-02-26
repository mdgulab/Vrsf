import { useState, forwardRef, useImperativeHandle } from "react";
import "./VolunteerPopup.css";

const VolunteerPopup = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    city: "",
    state: "",
    interest: "",
    availability: "",
    mode: "",
    experience: "",
  });

  useImperativeHandle(ref, () => ({
    openPopup() {
      setOpen(true);
    },
  }));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917979969125"; // 🔴 apna WhatsApp number

    const message = `*New Volunteer Registration* 👇

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
🎂 Age: ${form.age}
⚧ Gender: ${form.gender}

📍 City: ${form.city}
🗺 State: ${form.state}

🤝 Area of Interest: ${form.interest}
🕒 Availability: ${form.availability}
💻 Mode: ${form.mode}

📝 Experience:
${form.experience}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    setOpen(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      age: "",
      gender: "",
      city: "",
      state: "",
      interest: "",
      availability: "",
      mode: "",
      experience: "",
    });
  };

  if (!open) return null;

  return (
    <div className="volunteer-overlay">
      <div className="volunteer-popup">
        <span className="close-btn" onClick={() => setOpen(false)}>×</span>

        <h2>Join as Volunteer</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />

          <div className="two-col">
            <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
            <select name="gender" value={form.gender} onChange={handleChange} required>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="two-col">
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
            <input name="state" placeholder="State" value={form.state} onChange={handleChange} required />
          </div>

          <select name="interest" value={form.interest} onChange={handleChange} required>
            <option value="">Area of Interest</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Women Empowerment</option>
            <option>Child Welfare</option>
            <option>Environment</option>
            <option>Fundraising</option>
            <option>Field Work</option>
          </select>

          <select name="availability" value={form.availability} onChange={handleChange} required>
            <option value="">Availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Both</option>
          </select>

          <select name="mode" value={form.mode} onChange={handleChange} required>
            <option value="">Preferred Mode</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Both</option>
          </select>

          <textarea
            name="experience"
            placeholder="Previous volunteering experience (if any)"
            value={form.experience}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit & Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
});

export default VolunteerPopup;