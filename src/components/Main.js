import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);
	

	return (
		<main>
			<section className="profile page__section">
				<div className="media">
					<div className="media__image-container">
						<img
							alt="profile"
							className="media__image"
							src={ currentUser.avatar === undefined ? "https://eitrawmaterials.eu/wp-content/uploads/2016/09/empty-avatar.jpg" : currentUser.avatar }
						/>
						<button
							onClick={props.onEditAvatar}
							className="media__btn media__btn_size_lg media__btn_hoverable"
							type="button"
						></button>
					</div>
					<div className="media__body">
						<div className="media__item">
							<h1 className="media__name">{currentUser.name === undefined ? "Hello stranger !" : currentUser.name }</h1>
							<button
								onClick={props.onEditProfile}
								className="media__btn media__btn_size_sm button"
								type="button"
							></button>
						</div>
						<p className="media__job">{currentUser.about === undefined ? "Don't be shy, tell something about yourself!" : currentUser.about}</p>
					</div>
				</div>
				<button
					onClick={props.onAddPlace}
					className="profile__btn button"
					type="button"
				></button>
			</section>
			<ul className="gallery page__section">
				{props.cards.map((card, id) => (
					<Card
						key={id}
						card={card}
						onCardDelete={props.onCardDelete}
						onCardClick={props.onCardClick}
						onCardLike={props.onCardLike}
					/>
				))}
			</ul>
		</main>
	);
}

export default Main;
