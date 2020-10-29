import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);
	const card = props.card;
	const isOwner = card.owner === currentUser._id;
	const isLiked = card.likes.some((i) => i._id === currentUser._id);
	const cardLikeButtonClassName = isLiked
		? "card__like card__like_active"
		: "card__like";

	function handleClick() {
		props.onCardClick(card);
	}

	function handleLikeClick() {
		props.onCardLike(card);
	}

	function handleDeleteClick() {
		props.onCardDelete(card);
	}

	return (
		<li className="card">
			{isOwner ? (
				<button
					type="button"
					className="button card__del"
					onClick={handleDeleteClick}
				></button>
			) : (
				""
			)}
			<div
				className="card__img"
				style={{ backgroundImage: `url(${card.link})` }}
				onClick={handleClick}
			></div>
			<div className="card__description-wrapper">
				<h2 className="card__title">{card.name}</h2>
				<div className="card__likes-container">
					<button
						className={`${cardLikeButtonClassName} button `}
						onClick={handleLikeClick}
					></button>
					<p className="card__likes">{card.likes.length}</p>
				</div>
			</div>
		</li>
	);
}

export default Card;
