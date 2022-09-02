import { useState } from 'react';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleEmailChange(evt) {
      setEmail(evt.target.value);
    }
  
    function handlePasswordChange(evt) {
      setPassword(evt.target.value);
    }
  
    function handleSubmit(evt) {
      evt.preventDefault();
      onLogin(email, password);
    }

    return (
        <form className="form__auth" onSubmit={handleSubmit}>
            <h3 className="form__title form__title_auth">Вход</h3>
            <input className="form__input form__input_auth" placeholder="Email"
                type="email" required onChange={handleEmailChange}/>
            <input className="form__input form__input_auth" placeholder="Пароль"
                type="password" required onChange={handlePasswordChange}/>
            <button className="form__save form__button" type="submit">Войти</button>
        </form>
    )
}

export default Login;
