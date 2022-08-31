import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name ?? '');
        setDescription(currentUser.about ?? '');
    }, [currentUser, props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });

    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText='Сохранить'
            title='Редактировать профиль'
        >
            <div className="form__field">
                <input className="form__input form__input_type_name" type="text" placeholder="Имя"
                    name="name" id="profile-name" value={name} onChange={handleNameChange} minLength="2" maxLength="40" required />
                <span id="profile-name-error" className="error"></span>
            </div>
            <div className="form__field">
                <input className="form__input form__input_type_about-me" type="text" placeholder="О себе"
                    name="aboutme" id="profile-about-me" value={description} onChange={handleDescriptionChange} minLength="2" maxLength="200" required />
                <span id="profile-about-me-error" className="error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;