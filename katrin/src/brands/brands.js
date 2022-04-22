import React from "react";

import './brands.scss';

const Brands = () => {
  return(
    <section className="brands">
    <div className="container">
      <div className="brands-wrapper">
        <h2 className="brands-title" id="brands">Brands</h2>
        <p className="brands-text">Brands that trust me</p>
        <div className="brands-items">
          <div className="brands-item">
            {/* <img src="img/brands/brand1.png" className="brands-item__img" alt=""> */}
          </div>
          <div className="brands-item">
            {/* <img src="img/brands/brand2.png" className="brands-item__img" alt=""> */}
          </div>
          <div className="brands-item">
            {/* <img src="img/brands/brand5.png" className="brands-item__img" alt=""> */}
          </div>
          <div className="brands-item">
            {/* <img src="img/brands/brand4.png" className="brands-item__img" alt=""> */}
          </div>
          <div className="brands-item">
            {/* <img src="img/brands/brand3.png" className="brands-item__img" alt=""> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Brands;