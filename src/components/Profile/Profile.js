import './Profile.css';

function Profile() {
    return (<>
        <section className="profile">
            <h1 className="profile__header">Привет, Виталий!</h1>
            <ul className="profile__data">
                <li className="profile__item"><span className="profile__item_name">Имя</span><span className="profile__item-name">Виталий</span></li>
                <li className="profile__item"><span className="profile__item_name">Email</span><span className="profile__item-name">Email</span></li>
            </ul>
        </section>
    </>)
}