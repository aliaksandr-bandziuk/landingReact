import React from "react";

import './portfolio.scss';

import Swiper from "../swiper";

const Portfolio = () => {
  return(
  <section class="portfolio">
    <div class="container">
      <h2 class="portfolio-title" id="portfolio">Portfolio</h2>
      <Swiper/>
    </div>
  </section>
  )

}

export default Portfolio;