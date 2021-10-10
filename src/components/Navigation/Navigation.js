import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [activeMenu, setActiveMenu] = React.useState(false);
    function ShowMenuButton(e) {
        if(window.innerWidth <= 768) {
            if(activeMenu === false) {
                setActiveMenu(true);
                setTimeout(() => {
                    document.body.style.overflow = 'hidden';
                }, 1500);
                
            } else {
                document.querySelector('.navigation').classList.add('navigation_hidden');
                setTimeout(() => {
                    document.body.style.overflow = '';
                    setActiveMenu(false);
                }, 1500);            
            }
        }
    }
    return (
        <>
            <nav className={activeMenu ? "navigation navigation_open" : "navigation"}>
                <NavLink onClick={ShowMenuButton} to="/" exact={true} activeClassName='navigation__button_active' className="navigation__button navigation__button_home">Главная</NavLink>
                <NavLink onClick={ShowMenuButton} to="/movies" exact={true} activeClassName='navigation__button_active' className="navigation__button">Фильмы</NavLink>
                <NavLink onClick={ShowMenuButton} to="/saved-movies" exact={true} activeClassName='navigation__button_active' className="navigation__button">Сохранённые фильмы</NavLink>
                <NavLink onClick={ShowMenuButton} to="/profile" className="navigation__button navigation__button_profile">Аккаунт</NavLink>
            </nav>
            <div className={activeMenu ? "navigation__burger navigation__burger_active" : "navigation__burger"} onClick={ShowMenuButton}>
                <span className="navigation__line"></span>
                <span className="navigation__line"></span>
                <span className="navigation__line"></span>
            </div>
        </>
    )
}

export default withRouter(Navigation);