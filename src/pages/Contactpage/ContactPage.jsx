import React, { useState } from 'react';
import './ContactPage.scss';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="contact-input"
          required
        />

        <label htmlFor="email" className="contact-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="contact-input"
          required
        />

        <label htmlFor="inquiryType" className="contact-label">Inquiry Type:</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleInputChange}
          className="contact-select"
          required
        >
          <option value="">Select an option</option>
          <option value="General">General Inquiry</option>
          <option value="Support">Customer Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="contact-textarea"
          required
        ></textarea>

        <input type="submit" value="Send Message" className="contact-submit" />
      </form>
    </div>
  );
}

export default ContactPage;
