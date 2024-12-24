"use client";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}

      {/* Mission & Vision */}
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          At CosmoTech International, we are driven by a passion to innovate and
          provide technology solutions that drive growth, efficiency, and
          transformation. Our mission is to empower businesses to reach their
          full potential.
        </p>

        <h2>Our Vision</h2>
        <p>
          We aim to be a global leader in tech solutions, shaping the future
          with sustainable, cutting-edge technologies. Together, we will build a
          smarter, more efficient world.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2>Our Expertise</h2>
        <div className="tech-icons">
          <div className="tech-icon">
            <img src="/images/ai-icon.png" alt="AI" />
            <h3>AI & Machine Learning</h3>
            <p>Developing intelligent systems for real-time problem solving.</p>
          </div>
          <div className="tech-icon">
            <img src="/images/cloud-icon.png" alt="Cloud" />
            <h3>Cloud Solutions</h3>
            <p>Cloud computing for flexible, scalable, and secure applications.</p>
          </div>
          <div className="tech-icon">
            <img src="/images/blockchain-icon.png" alt="Blockchain" />
            <h3>Blockchain</h3>
            <p>Decentralized solutions for transparent and secure transactions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
