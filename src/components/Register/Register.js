import './Register.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <section className="register">
            <div className="register__container">
                <Link to='/' exact={true}><img src={logo} alt="Логотип" className="register__logo" /></Link>
                <h1 className="register__header">Добро пожаловать!</h1>
                <form className="register__form">
                    <label className="register__label">Имя</label>
                    <input type="text" className="register__input register__input_name" />
                    <span className="register__error">Что-то пошло не так...</span>
                    <label className="register__label">E-mail</label>
                    <input type="text" className="register__input register__input_email" />
                    <span className="register__error">Что-то пошло не так...</span>
                    <label className="register__label">Пароль</label>
                    <input className="register__input register__input_password" type="password" />
                    <span className="register__error">Что-то пошло не так...</span>
                    <button className="register__submit">Зарегистрироваться</button>
                </form>
                <p className="register__login">Уже зарегистрированы?<Link className="register__login-link" exact={true} to="/signin">Войти</Link></p>
            </div>
        </section>
    )
}

export default Register;