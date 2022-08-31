import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const avatarRef = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onSubmit({
            avatar: avatarRef.current.value
        });
    }

    useEffect(() => {
        avatarRef.current.value = ''
    }, [props.onClose])

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            buttonText='Сохранить'
            title='Обновить аватар'
        >
            <div className="form__field">
                <input className="form__input form__input_type_avatar" type="url" placeholder="Ссылка на картинку" 
                name="avatarUrl" id="avatar" ref={avatarRef} minLength="2" maxLength="200" required />
                <span id="avatar-error" className="error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;