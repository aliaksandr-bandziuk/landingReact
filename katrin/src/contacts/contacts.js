import React, { useState } from "react";

import Button from "../button";
import Form from "../form";

import './contacts.scss';

import imgfb from './001-facebook.png';
import imginst from './011-instagram.png';
import imgtiktok from './016-tik tok.png';
import { ModalBody } from "../form/form";
import close from '../contacts/close.png';

const Contacts = (props) => {

  const [showModal, setShowModal] = useState(false);

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
        <Button onClick={() => setShowModal(true)}>
          Send message
        </Button>
        <Form
          show={showModal}
        >
          <ModalBody>
          <button onClick={() => setShowModal(false)} type="button" className="modal__close modal__close-button">
            <img src={close} className="modal__close-img" alt=""/>
          </button>
          <form action="send.php" method="POST" className="contacts-form contactas-form__modal" id="form">
          <h4 className="form-title">What do you wanna tell me?</h4>
          <input type="text" className="input input-name _req" placeholder="Your name" name="name"/>
          <input type="text" className="input input-phone _req" placeholder="Your phone" name="phone"/>
          <input type="text" className="input input-text _req" placeholder="Your message" name="message"/>
          <input type="submit" className="button form-button" value="Sent"/>
          </form>
          </ModalBody>
        </Form>
        {/* <div className="footer-button">
          <button className="footer-button__send modal__open"
          onClick={ openModal }
          >
            Send message
          </button>
        </div> */}
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