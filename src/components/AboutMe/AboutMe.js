import './AboutMe.css';
import avatar from '../../images/avatar.png';

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__container">
                <h2 className="aboutMe__header">Студент</h2>
                <div className="aboutMe__content">
                    <div className="aboutMe__description">
                        <h3 className="aboutMe__name">Виталий</h3>
                        <p className="aboutMe__proffesion">Фронтенд-разработчик, 30 лет</p>
                        <p className="aboutMe__subtitle">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <ul className="aboutMe__links">
                            <li className="aboutMe__item"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="aboutMe__link">Facebook</a></li>
                            <li className="aboutMe__item"><a href="https://github.com/HikkaTown" target="_blank" rel="noreferrer" className="aboutMe__link">Github</a></li>
                        </ul>
                    </div>
                    <img src={avatar} alt="Фотографи" className="aboutMe__avatar" />
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe;