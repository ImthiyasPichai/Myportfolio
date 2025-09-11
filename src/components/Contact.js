import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const myNumber = "917975073656"; // e.g., 919876543210
    const text = `Hello! My name is ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact">
      <h2 className="contact-title">📬 Contact Me</h2>
      <form className="contact-form" onSubmit={sendWhatsApp}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send via WhatsApp 🚀</button>
      </form>
    </section>
  );
};

export default Contact;
