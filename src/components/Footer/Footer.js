import { Route, Switch } from 'react-router';
import './Footer.css';

function Footer() {
    return (
        <Switch>
            <Route path="/signin"></Route>
            <Route path="/signup"></Route>
            <Route path="/profile"></Route>
            <Route path="/movies">
            <footer className="footer">
                <div className="footer__container">
                    <p className="footer__title">
                        Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>

                    <div className="footer__content">
                        <p className="footer__copyright">&copy; 2021</p>

                        <nav className="footer__links">
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                            <a href="https://github.com/HikkaTown" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                            <a href="https://t.me/longdread" target="_blank" rel="noreferrer" className="footer__link">Telegram</a>
                        </nav>
                    </div>
                </div>
            </footer>
            </Route>
            <Route path="/saved-movies">
            <footer className="footer">
                <div className="footer__container">
                    <p className="footer__title">
                        Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>

                    <div className="footer__content">
                        <p className="footer__copyright">&copy; 2020</p>

                        <nav className="footer__links">
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                            <a href="https://github.com/HikkaTown" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                            <a href="https://t.me/longdread" target="_blank" rel="noreferrer" className="footer__link">Telegram</a>
                        </nav>
                    </div>
                </div>
            </footer>
            </Route>
            <Route exact path="/">
            <footer className="footer">
                <div className="footer__container">
                    <p className="footer__title">
                        Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>

                    <div className="footer__content">
                        <p className="footer__copyright">&copy; 2020</p>

                        <nav className="footer__links">
                            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                            <a href="https://github.com/HikkaTown" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                            <a href="https://t.me/longdread" target="_blank" rel="noreferrer" className="footer__link">Telegram</a>
                        </nav>
                    </div>
                </div>
            </footer>
            </Route>
            <Route exact path="*"></Route>
        </Switch>
    )
}

export default Footer;