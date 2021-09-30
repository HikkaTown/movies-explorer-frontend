import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
    return (
        <header 
            className={window.location.pathname === '/' ? 'header header_landing' : 'header header_movies'}
        >
            <div className="header__container">
            <Link to="/" className="header__link"><img className="header__logo" src={logo} alt="Логотип сайта"/></Link>
            {props.loggedin ? 
             (<Navigation></Navigation>) :
             (<div className="header__sign-list">
                <Link to="/signup" className="header__button">Регистрация</Link>
                <Link to="/signin" className="header__button header__button_signin">Войти</Link>
            </div>)
            }
            </div>
        </header>
    )
}

export default withRouter(Header);