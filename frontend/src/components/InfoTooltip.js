import React from 'react';
import successIcon from '../images/success-icon.svg';
import failIcon from '../images/fail-icon.svg';

function InfoTooltip(props) {

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container popup_type_confirm">
        <img className="popup__icon" src={props.status ? successIcon : failIcon} alt="" />
        <p className="popup__message">
          {props.status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
        <button type="button" className="popup__close" onClick={props.onClose} />
      </div>
    </div>
  )
}

export default InfoTooltip;