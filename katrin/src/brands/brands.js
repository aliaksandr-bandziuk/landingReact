import React from "react";

import './brands.scss';
import image1 from './brand1.png';
import image2 from './brand2.png';
import image3 from './brand3.png';
import image4 from './brand4.png';
import image5 from './brand5.png';


const Brands = () => {
  return(
    <section className="brands">
    <div className="container">
      <div className="brands-wrapper">
        <h2 className="brands-title" id="brands">Brands</h2>
        <p className="brands-text">Brands that trust me</p>
        <div className="brands-items">
          <div className="brands-item">
            <img src={image1} className="brands-item__img" alt=""></img>
          </div>
          <div className="brands-item">
            <img src={image2} className="brands-item__img" alt=""></img>
          </div>
          <div className="brands-item">
            <img src={image5} className="brands-item__img" alt=""></img>
          </div>
          <div className="brands-item">
            <img src={image4} className="brands-item__img" alt=""></img>
          </div>
          <div className="brands-item">
            <img src={image3} className="brands-item__img" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Brands;