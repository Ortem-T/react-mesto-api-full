import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    const cardDeleteButtonClassName = (
        `elements__del-button ${isOwn ? 'elements__del-button_visible' : ''}`
    );

    const cardLikeButtonClassName = (
        `elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`
        );

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    const { name, link, likes } = card;

    return (
        <li className="elements__item">
            <button className={ cardDeleteButtonClassName } type="button" onClick={handleDeleteClick}>Удалить</button>
            <div className="elements__photo" style={{ backgroundImage: `url(${link})` }} alt={name} onClick={handleClick}></div>
            <div className="elements__text">
                <h2 className="elements__title">{name}</h2>
                <div className="elements__like">
                    <button className={ cardLikeButtonClassName } type="button" onClick={handleLikeClick}></button>
                    <span className="elements__like-counter">{likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;