import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg'
import { useState, useEffect } from 'react';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле должно быть заполненно');
    const [passwordError, setPasswordError] = useState('Поле должно быть заполненно');
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        if(passwordError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email');
        } else {
            setEmailError('');
        }
    }

    const passwordHanlder = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length === 0) {
            setPasswordError('Поле должно быть заполненно')
        } else if(e.target.value.length <= 6) {
            setPasswordError('Пароль должен быть больше 6 символов')
        } else {
            setPasswordError('');
        }
    }

    const blureHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmitLogin(email, password);
    }

    return (
        <section className="login">
            <div className="login__container">
                <Link to='/'><img src={logo} alt="Логотип" className="login__logo" /></Link>
                <h1 className="login__header">Рады видеть!</h1>
                <form className="login__form" onSubmit={handleSubmit}>
                    <label className="login__label">E-mail</label>
                    <input 
                        value={email} 
                        onChange={e => emailHandler(e)} 
                        onInput={blureHandle} type="text" 
                        className="login__input login__input_email" 
                        name="email" />
                    {(emailDirty && emailError) && <span className="login__error login__error_active">{emailError}</span> }
                    <label className="login__label">Пароль</label>
                    <input 
                        value={password} 
                        onChange={e => passwordHanlder(e)} 
                        onInput={blureHandle} 
                        className="login__input login__input_password" 
                        type="password" name="password" />
                    {(passwordDirty && passwordError) && <span className="login__error login__error_active">{passwordError}</span> }
                    <button disabled={!formValid} className={!formValid ? 'login__submit login__submit_disabled' : 'login__submit'} type="submit">Войти</button>
                </form>
                <p className="login__register">Ещё не зарегистрированы?<Link className="login__register-link" to="/signup">Регистрация</Link></p>
                { props.errorLogin ? <p className="register__error register__error_active register__error_total">Ошибка авторизации</p> : ''}
            </div>
        </section>
    )
}

export default Login;