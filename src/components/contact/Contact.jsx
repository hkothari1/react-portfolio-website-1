import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qbknh2n",
        "template_63d80yf",
        form.current,
        "Y4ZtQG4FjleurlSf2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__option-subheader">hkothari@ualberta.ca</h5>
            <a
              href="mailto:hkothari@ualberta.ca"
              target="_blank"
              className="contact__links"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BiLogoLinkedinSquare className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5 className="contact__option-subheader">Heet Kothari</h5>
            <a
              href="https://www.linkedin.com/in/heetkothari/"
              target="_blank"
              className="contact__links"
            >
              Connect with me
            </a>
          </article>
          <article className="contact__option">
            <FaGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5 className="contact__option-subheader">hkothari1</h5>
            <a
              href="https://github.com/hkothari1"
              target="_blank"
              className="contact__links"
            >
              Collaborate with me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact