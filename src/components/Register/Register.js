import './Register.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле должно быть заполненно');
    const [emailError, setEmailError] = useState('Поле должно быть заполненно');
    const [passwordError, setPasswordError] = useState('Поле должно быть заполненно');
    const [formValid, setFormValid] = useState(false);
    useEffect(() => {
        if(nameError || passwordError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, nameError])

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 30 ) {
            setNameError('Длинна дожна быть от 2 до 30 символов');
        } else {
            setNameError('');
        }
    }

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
            case 'name':
                setNameDirty(true)
                break;
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
        props.handleSubmitRegister(email, password, name);
    }
    return (
        <section className="register">
            <div className="register__container">
                <Link to='/' ><img src={logo} alt="Логотип" className="register__logo" /></Link>
                <h1 className="register__header">Добро пожаловать!</h1>
                <form className="register__form" onSubmit={handleSubmit}>
                    <label className="register__label">Имя</label>
                    <input onChange={e => nameHandler(e)} value={name} onBlur={blureHandle} type="text" name="name" className="register__input register__input_name" />
                    {(nameDirty && nameError) && <span className="register__error register__error_active">{nameError}</span> }
                    <label className="register__label">E-mail</label>
                    <input onChange={e => emailHandler(e)} value={email} onBlur={blureHandle} type="text" name="email" className="register__input register__input_email" />
                    {(emailDirty && emailError) && <span className="register__error register__error_active">{emailError}</span> }
                    <label className="register__label">Пароль</label>
                    <input onChange={e => passwordHanlder(e)} value={password} onBlur={blureHandle} className="register__input register__input_password" type="password" name="password" />
                    {(passwordDirty && passwordError) && <span className="register__error register__error_active">{passwordError}</span> }
                    <button disabled={!formValid} className={!formValid ? 'register__submit register__submit_disabled' : 'register__submit'} type="submit">Зарегистрироваться</button>
                </form>
                <p className="register__login">Уже зарегистрированы?<Link className="register__login-link" to="/signin">Войти</Link></p>
            </div>
        </section>
    )
}

export default Register;