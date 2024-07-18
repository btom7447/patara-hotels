import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
        <h5>Get in touch</h5>
        <div className="form-group">
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            required
            />
        </div>
        <div className="form-group">
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            />
        </div>
        <div className="form-group">
            <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Number *"
            required
            />
        </div>
        <div className="form-group">
            <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
            required
            />
        </div>
            <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message *"
            required
            />
        <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

export default ContactForm;