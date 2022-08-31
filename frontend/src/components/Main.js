import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
        <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about-me">{currentUser.about}</p>
          </div>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>Редактировать</button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>Добавить фото</button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;