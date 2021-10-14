import './Promo.css';
import promoLogo from '../../images/promo-logo.svg'
function Promo() {
    return (
        <section className="promo">
            <figure className="promo__content">
                <h1 className="promo__head">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="promo__logo" src={promoLogo} alt="Логотип Я.Практикум" />
            </figure>
        </section>
    )
}

export default Promo;