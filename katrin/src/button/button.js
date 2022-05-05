import React from "react";

import './button.scss';

const Button = (props) => {
  return(
    <div className="footer-button">
    <button className="footer-button__send modal__open"
    onClick={ props.onClick }
    >
      {props.children}
    </button>
  </div>
  )
}

export default Button;