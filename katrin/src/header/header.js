import React from "react";

import './header.scss';

const Header = () => {
  return(
    <header className="header">
    <div className="container">
  
      <div className="mobile-menu">
        <div className="mobile-menu__img mobile-menu__img-open">
        </div> 
        <div className="mobile-menu__list mobile-menu__list-hidden">
          <ul className="mobile-menu__items">
            <li className="mobile-menu__item"><a href="#hero">Home</a></li>
            <li className="mobile-menu__item"><a href="#about">About me</a></li>
            <li className="mobile-menu__item"><a href="#brands">Brands</a></li>
            <li className="mobile-menu__item"><a href="#portfolio">Portfolio</a></li>
            <li className="mobile-menu__item"><a href="#contacts">Contacts</a></li>
          </ul>
        </div>   
      </div>
  
      <div className="header-wrapper">
        <ul className="header-list">
          <li className="header-list__item"><a href="#hero">Home</a></li>
          <li className="header-list__item"><a href="#about">About me</a></li>
          <li className="header-list__item"><a href="#brands">Brands</a></li>
          <li className="header-list__item"><a href="#portfolio">Portfolio</a></li>
          <li className="header-list__item"><a href="#contacts">Contacts</a></li>
        </ul>
        <span className="underline"></span>
      </div>
  
    </div>
  </header>
  )
}

export default Header;