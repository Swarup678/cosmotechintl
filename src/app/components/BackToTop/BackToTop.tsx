"use client"; // Required for client-side behavior like scroll detection

import React, { useState, useEffect } from "react";
import styles from "./BackToTop.module.scss";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className={styles.top} onClick={scrollToTop} aria-label="Back to Top">
        &#x2191;
      </button>
    )
  );
};

export default BackToTop;
