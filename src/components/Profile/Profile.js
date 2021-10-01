import './Profile.css';

function Profile() {
    return (<>
        <section className="profile">
            <h1 className="profile__header">Привет, Виталий!</h1>
            <form className="profile__form">
                <p className="profile__line">Имя<input type="text" name="name" className="profile__input profile__name" placeholder="Виталий" /></p>
                <p className="profile__line">E-mail<input type="text" name="email" className="profile__input profile__email" placeholder="pochta@yandex.ru" /></p>
                <button className="profile__submit" type="submit">Редактировать</button>
            </form>
            <button className="profile__logout">Выйти из аккаунта </button>
        </section>
    </>)
}

export default Profile;