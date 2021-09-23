import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <a href="!#"><img src={logo} alt="Логотип сайта"/></a>
            <div className="header__sign-list">
                <button className="header__button">Регистрация</button>
                <button className="header__button header__button_signin">Войти</button>
            </div>
        </header>
    )
}

export default Header;