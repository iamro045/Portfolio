import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(), // Sends current date & time string
    };

    emailjs.send(
      'service_cbg2cqt',         // Your EmailJS Service ID
      'template_q7tmvrn',        // Your EmailJS Template ID
      emailData,
      'cvmILTka32Ip-Chv0'        // Your EmailJS Public Key (User ID)
    )
    .then(() => {
      alert(`Thank you, ${formData.name}! Your message has been sent.`);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('An error occurred. Please try again later.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
        <button type="submit">Send Message</button>
        {submitted && <p className="success-message">Message sent successfully!</p>}
      </form>
    </section>
  );
};

export default Contact;
