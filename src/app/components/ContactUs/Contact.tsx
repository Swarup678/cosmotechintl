"use client";

import "./Contact.css";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="main">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">We’d love to hear from you!</p>
        <div className="content">
          <form className="form">
            <div className="inputGroup ">
              <label htmlFor="name" className=" ">
                Name
              </label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="inputGroup">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="button">
              Send
            </button>
          </form>
          <div className="info">
            <h2>Contact Information</h2>
            <div className="infoItem">
              <Image
                src="/assets/location.png"
                alt="Location"
                width={24}
                height={24}
              />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="infoItem">
              <Image
                src="/assets/email.png"
                alt="Email"
                width={24}
                height={24}
              />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="infoItem">
              <Image
                src="/assets/phone.png"
                alt="Phone"
                width={24}
                height={24}
              />
              <p>123-456-789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
