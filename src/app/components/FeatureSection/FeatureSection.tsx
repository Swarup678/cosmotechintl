// components/FeaturesSection.tsx
'use client'
import './FeatureSection.css'
import React from 'react';
import { motion } from 'framer-motion'; // For animation
import Link from 'next/link'; // For navigation

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Why Choose Cosmotech ?</h2>
      <div className="features-cards">
        {/* Card 1 */}
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="icon" style={{ backgroundImage: 'url(/images/softdev.webp)' }} />
          <h3>Software Development</h3>
          <p>Custom-built software solutions for your unique needs, ensuring scalability and performance.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="icon" style={{ backgroundImage: 'url(/images/cloud.png)' }} />
          <h3>Cloud Solutions</h3>
          <p>Leverage the power of the cloud to streamline operations, enhance security, and reduce costs.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="icon " style={{ backgroundImage: 'url(/images/ai.png)' }} />
          <h3>AI & Machine Learning</h3>
          <p>Transform your business with intelligent automation and data-driven insights using AI/ML technologies.</p>
        </motion.div>
      </div>

      <div className="cta" id="about">
        <Link href="#contact" className='cta-button'>
          Get in Touch
        </Link>
      </div>

    </section>
  );
};

export default FeaturesSection;
