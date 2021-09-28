import './Portfolio.css';

function Portfolio() {
    return(
        <section className="portfolio">
            <div className="portfolio__container">
                <h2 className="portfolio__header">
                    Портфолио
                </h2>
                <ul className="portfolio__list">
                    <li className="portfolio__item">Статичный сайт<a className="portfolio__link" href="!#">↗</a></li>
                    <li className="portfolio__item">Адаптивный сайт<a className="portfolio__link" href="!#">↗</a></li>
                    <li className="portfolio__item">Одностраничное приложение<a className="portfolio__link" href="!#">↗</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;