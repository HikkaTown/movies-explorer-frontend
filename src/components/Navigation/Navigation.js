import React from 'react';
import './Navigation.css';

function Navigation() {
    const [activeMenu, setActiveMenu] = React.useState(false);
    function ShowMenuButton(e) {
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
    return (
        <>
            <nav className={activeMenu ? "navigation navigation_open" : "navigation"}>
                <a href="#!" className="navigation__button navigation__button_home">Главная</a>
                <a href="#!" className="navigation__button">Фильмы</a>
                <a href="#!" className="navigation__button">Сохранённые фильмы</a>
                <a href="#!" className="navigation__button navigation__button_profile">Аккаунт</a>
            </nav>
            <div className={activeMenu ? "navigation__burger navigation__burger_active" : "navigation__burger"} onClick={ShowMenuButton}>
                <span className="navigation__line"></span>
                <span className="navigation__line"></span>
                <span className="navigation__line"></span>
            </div>
        </>
    )
}

export default Navigation;