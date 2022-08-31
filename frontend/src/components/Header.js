import logoImg from '../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';

function Header({ userEmail, onSignOut, loggedIn }) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logoImg} alt="Логотип Mesto" />
      <div className="header__links">
        <p className="header__link_email">
          {location.pathname === "/" ? userEmail : ""}
        </p>
        <Link to={
          location.pathname === "/sign-up"
            ? "/sign-in"
            : location.pathname === "/sign-in"
              ? "/sign-up"
              : "/sign-in"
        }
          className={location.pathname === "/" ? "header__link_exit" : "header__link"}
          onClick={location.pathname === "/" ? onSignOut : () => { }}
        >
          {location.pathname === "/sign-up" && "Войти"}
          {location.pathname === "/sign-in" && "Регистрация"}
          {loggedIn && "Выйти"}
          {/* {
            location.pathname === "/sign-up"
              ? "Войти"
              : location.pathname === "/sign-in"
                ? "Регистрация"
                : "Выйти"
          } */}
        </Link>
      </div>
    </header>
  )
}

export default Header;