import React from 'react'
import "./portfolio.css"
import img1 from '../../assets/reactportfolio1.0.jpg'
import img2 from "../../assets/reactportfolio2.png"
import img3 from "../../assets/reactportfolio3.png"

const data = [
  {
    id: 1,
    image: img1,
    title: "Music Player",
    github: "https://github.com/hkothari1/JS-Music-Player",
  },
  {
    id: 2,
    image: img2,
    title: "Personal Website",
    github: "https://github.com/hkothari1/react-portfolio-website-1",
  },
  {
    id: 3,
    image: img3,
    title: "Multifunctional Discord Bot",
    github: "https://github.com/hkothari1/Heets_Discord_Bot",
  },
];



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img className="portfolio_img" src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="Github_link">
                  <a
                    href= {github}
                    className="btn btn-secondary"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            );
          })
        }
        {/* <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img className="portfolio_img" src={img1} alt="" />
          </div>
          <h3 className="project_title">Music Player</h3>
          <div className="Github_link">
            <a
              href="https://github.com/hkothari1/JS-Music-Player"
              className="btn btn-secondary"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img className="portfolio_img" src={img2} alt="" />
          </div>
          <h3 className="project_title">Personal Website</h3>
          <div class="Github_link">
            <a
              href="https://github.com/hkothari1/react-portfolio-website-1"
              className="btn btn-secondary"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img className="portfolio_img" src={img3} alt="" />
          </div>
          <h3 className="project_title">Multifunctional Discord Bot</h3>
          <div className="Github_link">
            <a
              href="https://github.com/hkothari1/Heets_Discord_Bot"
              className="btn btn-secondary"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Portfolio