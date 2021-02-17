import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {
	const [avatar, setAvatar] = useState("");
	function handleSubmit(e) {
		e.preventDefault();

		props.onUpdateAvatar({
			avatar,
		});
		setAvatar("");
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
				value={avatar}
				onChange={(e) => setAvatar(e.target.value)}
				required
			/>
			<span></span>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
