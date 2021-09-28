import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__title">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>

                <div className="footer__content">
                    <p className="footer__copyright">&copy; 2020</p>

                    <nav className="footer__links">
                        <a href="#!" className="footer__link">Яндекс.Практикум</a>
                        <a href="#!" className="footer__link">Github</a>
                        <a href="#!" className="footer__link">Facebook</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;