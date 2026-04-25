import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "5f5f69a2-aee4-4a54-a341-5220870c6bc7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className='contact'>


      <div className='contact-card'>
        <h3 className='contact-heading'>
          Send Us a Message <img src={msg_icon} alt="Message Icon" className='msg-icon' />
        </h3>
        <p className='contact-description'>
          Have a question, suggestion, or just want to say hello?
          <br />
          We’d love to hear from you! Reach out and our team will get back to you as soon as possible.
        </p>
        <ul className='contact-info'>
          <li>
            <img src={mail_icon} alt="Mail icon" className='icon' />
            <strong>Email:</strong> eduspark.edi.9@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone icon" className='icon' />
            <strong>Phone:</strong> +91 98765 43210
          </li>
          <li>
            <strong>Address:</strong><br />
            EduSity HQ, 4th Floor,<br />
            Knowledge Park, Bengaluru, India
          </li>
        </ul>
      </div>


      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="message">Write Your Message*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here..."
            required
          ></textarea>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
        {result && <span className="form-result">{result}</span>}
      </div>
    </div>
  );
};

export default Contact;
