import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>MediConnect</strong>! We are dedicated to providing
        comprehensive medical services and resources to help you stay healthy.
      </p>
      <p>
        Our team of experienced healthcare professionals is committed to
        delivering the highest quality of care and support. We believe in
        empowering our patients with knowledge and resources to make informed
        decisions about their health.
      </p>
      <h3>Our Mission</h3>
      <p>
        To enhance the well-being of our community through accessible and
        compassionate healthcare services.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Integrity</li>
        <li>Compassion</li>
        <li>Excellence</li>
        <li>Innovation</li>
        <li>Collaboration</li>
      </ul>
      <p>
        Thank you for choosing <strong>MediConnect</strong>. We look forward to
        serving you!
      </p>
    </div>
  );
};

export default About;
