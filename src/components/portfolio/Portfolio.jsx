import React from 'react'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="potfolio_item_image"></div>
          <h3>Music Player</h3>
          <a
            href="https://github.com/hkothari1/JS-Music-Player"
            className="btn"
            target="_blank"
          >
            GitHub
          </a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio