import React from "react";

import './contacts.scss';

import imgfb from './001-facebook.png';
import imginst from './011-instagram.png';
import imgtiktok from './016-tik tok.png';

const Contacts = () => {
  return(
    <footer className="contacts">
    <div className="container">
      <div className="footer-wrapper">
        <h2 className="footer-title" id="contacts">Contacts</h2>
        <p className="footer-description">
          Want to know more or just chat? 
        </p>
        <p className="footer-description">
          You are welcome!
        </p>
        <div className="footer-button">
          <button className="footer-button__send modal__open">Send message</button>
        </div>
        <div className="footer-social">
          <div className="footer-social__item">
            <a href="https://www.facebook.com/KatrinDith">
              <img src={imgfb} alt=""/>
            </a>
          </div>
          <div className="footer-social__item">
            <a href="https://www.instagram.com/katrindith/">
              <img src={imginst} alt="" />         
            </a>
          </div>
          <div className="footer-social__item">
            <a href="https://vm.tiktok.com/ZMdrRxGB3/">
              <img src={imgtiktok} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-subtext">
          <p className="footer-subtext__text">Like me on</p>
        <p className="footer-subtext__text">Facebook, Instagram, Tik Tok</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Contacts;