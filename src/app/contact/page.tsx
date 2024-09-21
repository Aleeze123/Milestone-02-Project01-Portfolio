import React from 'react'
import './Contact.css'
const Contact = () => {
  return (

    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>

      <form 
        className="contact-form" 
        action="https://formspree.io/f/xzzplglw" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Your Phone Number" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <input name="message" placeholder="Your Message" required></input>
        <button type="submit">Send Message</button>
      </form>
      <div className="footer-container">
     <p className="footer-text">© 2024 Aleeza | All Rights Reserved</p>
   </div>
    </div>
   

);
};

export default Contact