import React from "react";

function ImagePopup(props) {
	function handleOverlayClick(evt) {
		if (evt.target.classList.contains("popup_role_show")) {
			props.onClose();
		}
	}
	const card = props.card;
	return (
		<div
			className={`popup popup_background_dark js-popup-picture ${
				props.isOpen ? "popup_role_show" : "popup_role_fade-out"
			}`}
			onClick={handleOverlayClick}
		>
			<div className="popup__container popup__container_type_picture">
				<button
					className="popup__btn-close button"
					type="button"
					onClick={props.onClose}
				></button>
				<img className="popup__image" src={card.link} alt={card.name} />
				<h2 className="popup__subtitle">{card.name}</h2>
			</div>
		</div>
	);
}

export default ImagePopup;
