import { useState } from 'react';
import { Link } from 'react-router-dom';


function Register({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(email, password);
    }

    return (
        <form className="form__auth" onSubmit={handleSubmit}>
            <h3 className="form__title form__title_auth">Регистрация</h3>
            <input className="form__input form__input_auth" placeholder="Email"
                type="email" required onChange={handleEmailChange}/>
            <input className="form__input form__input_auth" placeholder="Пароль"
                type="password" required onChange={handlePasswordChange}/>
            <button className="form__save form__button" type="submit">Зарегистрироваться</button>
            <div className="form__text">
                Уже зарегистрированы?
                <Link to="/sign-in" className="form__link">Войти</Link>
            </div>
        </form>
    )
}

export default Register;
