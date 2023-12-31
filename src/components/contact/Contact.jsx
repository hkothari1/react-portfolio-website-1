import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>hkothari@ualberta.ca</h5>
            <a href="mailto:hkothari@ualberta.ca">Send a message</a>
          </article>
          <article className="contact__option">
            <BiLogoLinkedinSquare />
            <h4>LinkedIn</h4>
            <h5>Heet Kothari</h5>
            <a href="https://www.linkedin.com/in/heetkothari/">
              Connect with me
            </a>
          </article>
        </div>
        <form></form>
      </div>
    </section>
  );
}

export default Contact