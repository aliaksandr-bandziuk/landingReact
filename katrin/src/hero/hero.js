import React from "react";

import './hero.scss';

const Hero = () => {
  return(
  <section className="hero">
    <div className="container">
      <div className="hero-wrapper">
        <h1 className="hero-title typing-demo" id="hero">Katrin Dith</h1>
        <div className="hero-description">
          <p className="hero-description__text">Instagram blogger | Model</p>
          <p className="hero-description__text">Düsseldorf, Germany</p>
        </div>
        <div className="lang">
          <p className="lang-text"><span className="lang-active"><a href="/ru.html">RU</a></span> | ENG</p>
        </div>
      </div>
      <div className="hero-picture">
      </div>
    </div>
  </section>
  )
}

export default Hero;