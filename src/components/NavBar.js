import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
	return (
		<nav className="menu">
			{props.route === "/signup" && <NavLink className="menu__item" to="/signin">
				Log in
			</NavLink>}
			{props.route === "/signin" && <NavLink exact className="menu__item" to="/signup">
				Sign up
			</NavLink>}
		</nav>
	);
}
export default NavBar;