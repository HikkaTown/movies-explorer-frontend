import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <a href="!#" className="header__link"><img className="header__logo" src={logo} alt="Логотип сайта"/></a>
            {/* <div className="header__sign-list">
                <button className="header__button">Регистрация</button>
                <button className="header__button header__button_signin">Войти</button>
            </div> */}
            <Navigation></Navigation>
        </header>
    )
}

export default Header;