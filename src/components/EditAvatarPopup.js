import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
	const input = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();

		props.onUpdateAvatar({
			avatar: input.current.value,
		});
	}

	return (
		<PopupWithForm
			name="change-avatar"
			title="Change profile picture"
			buttonText="Save"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<input
				type="url"
				className="form__input form__input_theme_light js-input-link"
				name="avatar"
				placeholder="Url"
				ref={input}
				required
			/>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
