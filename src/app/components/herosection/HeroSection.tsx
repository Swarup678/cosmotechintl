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
           Turning Your Tech Woes Into Wows-One Click at a Time!
          </motion.p>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            At CosmoTech, we’re the caffeine your business needs—always awake, always ahead. Fixing bugs, building solutions, or making tech behave, we turn ‘oh no’ into ‘oh wow!’ Let’s rewrite your story, minus the errors!
          </motion.p>

          <div className="buttons">
            <motion.div
              className="secondaryButton"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <Link href="#about" className='learn-more'>Learn More</Link>
            </motion.div>

            <motion.div
              className="primaryButton"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            >
              <Link href="#services" className='explore-services'>Explore Services</Link>
            </motion.div>
          </div>
        </div>

        {/* Image Content */}
        <motion.div
          className="image-content"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [ '-10px', '10px' ] }}
          transition={{
            y:{
            duration: 2, 
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }
          }}
          // transition={{ duration: 1, ease: 'easeOut' }}
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
