'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import './HeroSection.css';
import { MovingBorderDemo } from '../movingborder/movingborder';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      {/* Ensure space below the navbar */}
      <div className="content-wrapper">
        {/* Text Content */}
        <div className="text-content">
          <p className="intro">
            Turning Your Tech Woes Into Wows-One Click at a Time!
          </p>

          <p className="description">
            At CosmoTech, we’re the caffeine your business needs—always awake, always ahead. Fixing bugs, building solutions, or making tech behave, we turn ‘oh no’ into ‘oh wow!’ Let’s rewrite your story, minus the errors!
          </p>

          <div className="buttons">
            <div className="secondaryButton">
              <Link href="#about" className="learn-more">
                Learn More
              </Link>
            </div>

            <div className="primaryButton">
              <Link href="#services" className="explore-services">
                <MovingBorderDemo />
              </Link>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <motion.div
          className="image-content"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/astronaut.png"
            alt="Tech Illustration"
            width={500}
            height={500}
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
