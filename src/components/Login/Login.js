import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg'

function Login() {
    return (
        <section className="login">
            <div className="login__container">
                <Link to='/' exact={true}><img src={logo} alt="Логотип" className="login__logo" /></Link>
                <h1 className="login__header">Рады видеть!</h1>
                <form className="login__form">
                    <label className="login__label">E-mail</label>
                    <input type="text" className="login__input login__input_email" />
                    <span className="login__error">Что-то пошло не так...</span>
                    <label className="login__label">Пароль</label>
                    <input className="login__input login__input_password" type="password" />
                    <span className="login__error">Что-то пошло не так...</span>
                    <button className="login__submit">Зарегистрироваться</button>
                </form>
                <p className="login__register">Ещё не зарегистрированы?<Link className="login__register-link" exact={true} to="/signup">Регистрация</Link></p>
            </div>
        </section>
    )
}

export default Login;