import React from "react";

import './portfolio.scss';

import Swiper from "../swiper";

const Portfolio = () => {
  return(
  <section className="portfolio">
    <div className="container">
      <h2 className="portfolio-title" id="portfolio">Portfolio</h2>
      <Swiper/>
    </div>
  </section>
  )

}

export default Portfolio;