import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__header">О проекте</h2>
                <div className="about__content">
                    <article className="about__article">
                        <h2 className="about__title">Дипломный проект включал 5 этапов</h2>
                        <p className="about__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </article>
                    <article className="about__article">
                        <h2 className="about__title">На выполнение диплома ушло 5 недель</h2>
                        <p className="about__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </article>
                </div>
                <div className="about__progress">
                    <div className="about__progress-itme about__progress-item_color">
                        <p className="about__point about__point_color">1 неделя</p>
                        <p className="about__point-name about__point-name_color">Back-end</p>
                    </div>
                    <div className="about__progress-item">
                        <p className="about__point">4 недели</p>
                        <p className="about__point-name">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;