"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"; 
import './footer.css'
// Use Next.js Link for client-side navigation

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Wavy SVG at the top */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
        >
           <path
    fill=""
    d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,85.3C672,96,768,160,864,160C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <h1 className="footer-logo">Cosmotech</h1>
          <p className="footer-description">
            Empowering businesses with innovative solutions. Let's build
            something amazing together.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cosmotech. All rights reserved.</p>
      </div>
    </footer>
  );
};
