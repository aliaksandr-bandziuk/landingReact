import React from "react";

import './form.scss';

const Form = () => {
  return(
  <div className="modal">
    <div className="modal__overlay hidden"></div>
    <div className="modal__dialog hidden">
      <button type="button" className="modal__close modal__close-button">
        <img src="img/other/close.png" className="modal__close-img" alt=""/>
      </button>
      <form action="send.php" method="POST" className="contacts-form contactas-form__modal" id="form">
        <h4 className="form-title">What do you wanna tell me?</h4>
        <input type="text" className="input input-name _req" placeholder="Your name" name="name"/>
        <input type="text" className="input input-phone _req" placeholder="Your phone" name="phone"/>
        <input type="text" className="input input-text _req" placeholder="Your message" name="message"/>
        {/* <button type="submit" className="button form-button">Sent</button> */}
        <input type="submit" className="button form-button" value="Sent"/>
      </form>
    </div>
  </div>
  )
}

export default Form;