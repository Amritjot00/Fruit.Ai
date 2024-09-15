import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        {/* About Us Section */}
        <div className="section">
          <h2>About Fruit.AI</h2>
          <p>
            Welcome to Fruit.AI, your go-to platform for everything related to fruits! Whether you're interested in discovering the health benefits of different fruits or exploring our AI-powered chatbot and translation tools, we're here to make your experience delightful and informative.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            At Fruit.AI, we are committed to promoting healthy living by providing valuable insights into the nutritional benefits of fruits. We aim to use artificial intelligence to enhance user interactions, making it easy for everyone to access fruit-related knowledge and translations with just a few clicks.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="section contact-section">
          <h2>Contact Us</h2>
          <p>If you have any questions, feedback, or suggestions, feel free to reach out to us!</p>
          <ul>
            <li>Email: <a href="mailto:support@fruitai.com">support@fruitai.com</a></li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Fruit Lane, Orchard City, USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
