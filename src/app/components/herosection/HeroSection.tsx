'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="content-wrapper">
        {/* Text Content with animations */}
        <div className="text-content">
          <motion.p
            className="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Empowering your business with cutting-edge technology
          </motion.p>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            At CosmoTech, we specialize in delivering innovative, tailored solutions that drive growth and transform businesses.
          </motion.p>

          <div className="buttons">
            <motion.div
              className="primaryButton"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <Link href="#about" className='underline'>Learn More</Link>
            </motion.div>

            <motion.div
              className="secondaryButton"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            >
              <Link href="#services" className='underline'>Explore Services</Link>
            </motion.div>
          </div>
        </div>

        {/* Image Content */}
        <motion.div
          className="image-content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/images/maccode.avif"
            alt="Tech Illustration"
            width={500}
            height={400}
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
