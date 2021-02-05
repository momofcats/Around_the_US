import React from "react";
import PopupWithForm from "./PopupWithForm";

function InfoToolTip(props) {
	return (
		<PopupWithForm
			isOpen={props.isOpen}
      onClose={props.onClose}
		>
			<img src={props.icon} alt="success" className="popup__icon" />
  <p className="popup__title page__centered">{props.text}</p>
		</PopupWithForm>
	);
}

export default InfoToolTip;
