import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <div className="portfolio__container">
                <h2 className="portfolio__header">
                    Портфолио
                </h2>
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <a 
                            className="portfolio__link" 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://github.com/HikkaTown/how-to-learn"
                        >Статичный сайт<span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a 
                            className="portfolio__link" 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://github.com/HikkaTown/russian-travel"
                        >Адаптивный сайт<span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                    <li className="portfolio__item">
                        <a 
                            className="portfolio__link" 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://mesto.praktikum.nomoredomains.rocks/sign-in"
                        >Одностраничное приложение<span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;