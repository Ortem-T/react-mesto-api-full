import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onSubmit({
            name: name,
            link: link
        });
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [props.onClose]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText='Создать'
            title='Новое место'
        >
            <div className="form__field">
                <input className="form__input form__input_type_title-img" type="text" placeholder="Название"
                    name="cardTitleImg" id="card-title-img" value={name} onChange={handleNameChange} minLength="2" maxLength="30" required />
                <span id="card-title-img-error" className="error"></span>
            </div>
            <div className="form__field">
                <input className="form__input form__input_type_img" type="url" placeholder="Ссылка на картинку"
                    name="cardImg" id="card-img" value={link} onChange={handleLinkChange} required />
                <span id="card-img-error" className="error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;