import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <h2>Contact us</h2>
      <div className="contact-info">
        <a href="mailto:contact@example.com">
          <FaEnvelope className="icon" /> lucas12alfredsson@gmail.com
        </a>
        <br />
        <br />
        <a href="tel:+123456789">
          <FaPhone className="icon" /> +123-456-789
        </a>
      </div>
    </div>
  );
};

export default Footer;
