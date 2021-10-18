import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__container">
                <h2 className="aboutMe__header">Студент</h2>
                <div className="aboutMe__content">
                    <div className="aboutMe__description">
                        <h3 className="aboutMe__name">Геннадий Зайцев</h3>
                        <p className="aboutMe__proffesion">Начинающий фронтенд-разработчик, 20 лет</p>
                        <p className="aboutMe__subtitle">
                            Я живу в Москве, окончил курсы "Веб-разработчик" от компании Яндекс.Практикум.
                            На данный момент нахожусь в поиске работы на позицию Junior Frontend Developer.
                            Хочу развиваться и изучать новые технологии которые помогут достичь профессионализма в IT сфере.
                            В свободное время люблю отдых на свежем воздухе и кататься на скейте.
                        </p>
                        <ul className="aboutMe__links">
                            <li className="aboutMe__item"><a href="https://t.me/longdread" target="_blank" rel="noreferrer" className="aboutMe__link">Telegram</a></li>
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