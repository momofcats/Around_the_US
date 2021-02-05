import React from "react";
import Form from "./Form";

function PopupWithForm(props) {
	function handleOverlayClick(evt) {
		if (evt.target.classList.contains("popup_role_show")) {
			props.onClose();
		}
	}

	return (
		<div
			className={`popup js-popup-${props.name} ${
				props.isOpen
					? "popup_role_show popup_background_light"
					: "popup_role_fade-out"
			}`}
			onClick={handleOverlayClick}
		>
			<div className="popup__container popup__container_type_form">
				<h2 className="popup__title">{props.title}</h2>
				<button
					className="popup__btn-close button"
					type="button"
					onClick={props.onClose}
				></button>
				<Form name={props.name} onSubmit={props.onSubmit} buttonText={props.buttonText} >
					{props.children}
				</Form>
			</div>
		</div>
	);
}

export default PopupWithForm;
