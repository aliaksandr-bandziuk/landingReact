import React from "react";
import { useEffect, useRef } from "react";

import './form.scss';

const Form = (props) => {

  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        props.setShowModal(false)
      }
    }
    window.addEventListener('click', clickOutsideContent);
    return () => {
      window.removeEventListener('click', clickOutsideContent);
    }
  }, [props])
  

  return(
    <div ref={modalRef} className={`modal ${props.show ? 'active' : ''}`}>
      <div className="modal__overlay"></div>
      <div className="modal__dialog">
        {props.children}
      </div>
    </div>
  )
}

export default Form;

export const ModalHeader = props => {
  return(
    <div className="modal__header">
      {props.children}
    </div>
  )
}

export const ModalBody = props => {
  return(
    <div className="modal__body">
      {props.children}
    </div>
  )
}

export const ModalFooter = props => {
  return(
    <div className="modal__footer">
      {props.children}
    </div>
  )
}