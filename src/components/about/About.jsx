import React from 'react'
import './about.css'
import me_about from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
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
              <small>~1 year</small>
            </article>
            <article className="about__card">
              <PiStudentDuotone className="about__icon" />
              <h5>Degree</h5>
              <small>Software Engineering Co-op at University of Alberta</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Internship/Co-op Availability</h5>
              <small>4 or 8 months starting May 2024</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi nesciunt laborum impedit praesentium veritatis a, nulla quibusdam quisquam cupiditate! Qui, dolores doloribus consequuntur vero expedita harum mollitia fugiat dolore.</p>

          <a href="#contact" className='btn btn-primary'>Chat with Me</a>
        </div>
      </div>
    </section>
  );
}

export default About