import React from "react";
function Form(props) {
	return (
		<form
			className="form"
			action="#"
			noValidate
			name={props.name}
			onSubmit={props.onSubmit}
		>
			{props.children}
			{props.name && <button
				className={`form__submit-btn ${
					props.name === "login" || props.name === "register"
						? "form__submit-btn_theme_light"
						: "form__submit-btn_theme_dark"
				}`}
				type="submit"
				data-text="Save"
				onSubmit={props.onSubmit}
			>
				{props.buttonText}
			</button>}
		</form>
	);
}
export default Form;
