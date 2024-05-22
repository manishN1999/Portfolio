import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./contact.css";

function Contact() {
  return (
    <section id="footer">
      <div className="container">
        <div className="header">
          <div className="heading">Contact Me</div>
          <div className="supportingText">
            Hire me to add value to your dream project.
          </div>
        </div>

        <div className="contentBox">
          <div className="box">
            <a
              className="color-white"
              href="https://wa.me/8249331572"
              target="_blank"
            >
            
              <FaWhatsapp size={40} />
            </a>
          </div>
          <div className="box">
            <a
              className="color-white"
              href="https://www.instagram.com/manish_nair108/"
              target="_blank"
            >
            
              <FaInstagram size={40} />
            </a>
          </div>
          <div className="box">
            <a
              className="color-white"
              href="mailto:mnair4429@gmail.com"
              target="_blank"
            >
           
              <HiOutlineMail size={40} />
            </a>
          </div>
          <div className="box">
            <a
              className="color-white"
              href="https://www.linkedin.com/in/s-manish-nair-52a5a8164/"
              target="_blank"
            >
              
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}

export default Contact;
