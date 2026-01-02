import React from "react";
import "../styles.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>📬 Get in Touch</h2>
      <p className="contact-subheading">I’d love to connect! Whether it’s for a project, a collaboration, or just a hello, feel free to drop a message.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message will be sent to p.sheena2020@gmail.com'); }}>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>📫 Contact Details</h3>
          <p><strong>Email:</strong> p.sheena2020@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/SHEENA2024" target="_blank" rel="noreferrer">SHEENA2024</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sheena-p-524647328/" target="_blank" rel="noreferrer">Sheena P</a></p>
          <p><strong>Location:</strong> India</p>
        </div>
      </div>
    </div>
  );
}

