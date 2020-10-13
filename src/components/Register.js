import React, { useState } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import "../blocks/authentication/authentication.css";

function Register(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const resetForm = () => {
		setEmail("");
		setPassword("");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onRegister({ email, password });
		resetForm();
	};

	return (
		<section className="authentication page__section">
			<div className="authentication__container">
				<h2 className="authentication__title">{props.title}</h2>
				<Form
					name="register"
					title="Sing up"
					buttonText="Sign up"
					onSubmit={handleSubmit}
				>
					<input
						name="email"
						className="form__input form__input_theme_dark"
						placeholder="Email"
						type="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						name="password"
						className="form__input form__input_theme_dark"
						placeholder="Password"
						type="password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form>
				<div className="authentication__nav">
					<span>Already a member?</span>
					<Link className="authentication__link" to="/signin">
						Login here!
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Register;
