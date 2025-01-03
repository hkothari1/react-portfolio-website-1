import React from 'react'
import './about.css'
import me_about from '../../assets/me-about.jpg'
import { FaAward, FaItalic } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import { MdWork } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me_about} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Professional Experience</h5>
              <small>~2 years</small>
            </article>
            <article className="about__card">
              <PiStudentDuotone className="about__icon" />
              <h5>Degree</h5>
              <small>Software Engineering Co-op at University of Alberta</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Full-Time Job Availability</h5>
              <small>Starting May 2025</small>
            </article>
          </div>

          <p>
            My name is Heet Kothari and I'm a 5th year Software Engineering
            student at the University of Alberta. I love programming because it
            allows me to develop meaningful and impactful software. I made this
            website using my skills in front-end development and to tell
            everyone a little bit about myself. In addition to my passion for
            programming, I enjoy playing video games, watching movies and shows,
            and going out with friends and family. I'm a huge fan of Sci-Fi
            movies, with my favourite one being <i>Interstellar</i>. My
            favourite series of video games is NBA 2K and I usually play this on
            my Xbox. If you would like to learn more about me, please feel free
            to reach out to me using the button below!
          </p>

          <a href="#contact" className="btn btn-primary">
            Chat with Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About