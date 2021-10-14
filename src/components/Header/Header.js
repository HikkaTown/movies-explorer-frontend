import { Route, Switch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
    return (
        <Switch>
            <Route path="/signin"></Route>
            <Route path="/signup"></Route>
            <Route path ="/movies">
                <header className='header header_movies'>
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
            </Route>
            <Route path="/saved-movies">
            <header className='header header_movies'>
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
            </Route>
            <Route path="/profile">
            <header className='header header_movies'>
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
            </Route>
            <Route exact path="/">
                <header className='header header_landing'>
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
            </Route>
            <Route exact path="*"></Route>
        </Switch>
    )
}

export default withRouter(Header);