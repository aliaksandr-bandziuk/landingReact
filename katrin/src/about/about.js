import React from "react";

import './about.scss';

const About = () => {
  return(
    <section className="about">
    <div className="container">
      <h2 className="about-title" id="about">About me</h2>
      <div className="about-description">
        <p className="about-description__text">
          Hi, I'm Katrin – blogger and model. 
        </p>
        <p className="about-description__text">
          I was born in Belarus, but now I live in Duisburg, Germany. I have a wide audience — more than 120 thousands users.
        </p>
        <p className="about-description__text">
          Ready to implement excellent projects
          with wonderful people and brands.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About;