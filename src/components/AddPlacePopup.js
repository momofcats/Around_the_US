import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
	const linkInput = useRef(null);
	const nameInput = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		props.onAddPlace({
			name: nameInput.current.value,
			link: linkInput.current.value,
		});
	}

	return (
		<PopupWithForm
			name="photo-form"
			title="New Place"
			buttonText="Create"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				ref={nameInput}
				className="form__input form__input_theme_light js-input-title"
				name="name"
				placeholder="Title"
				minLength="1"
				maxLength="30"
				required
			/>
			<input
				ref={linkInput}
				type="url"
				className="form__input form__input_theme_light js-input-link"
				name="link"
				placeholder="Image link"
				required
			/>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
