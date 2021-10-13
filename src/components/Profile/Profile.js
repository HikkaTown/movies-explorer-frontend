import './Profile.css';
import { useHistory } from 'react-router';
import * as mainApi from '../../utils/MainApi';
import { useEffect, useState } from 'react';


function Profile(props) {
    const [name, setName] = useState(JSON.parse(localStorage.getItem('user')).name);
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('user')).email);
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    // const [nameError, setNameError] = useState('Поле должно быть заполненно');
    // const [emailError, setEmailError] = useState('Поле должно быть заполненно');
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [formValid, setFormValid] = useState(false);
    const [sameDataError, setSameDataError] = useState(false);

    useEffect(() => {
        if(nameError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, nameError])

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 30) {
            setNameError('Длинна дожна быть от 2 до 30 символов');
            setSameDataError(false);
        } else if (e.target.value === JSON.parse(localStorage.getItem('user')).name) {
            setNameError('Некорректное имя!');
        } else {
            setNameError('');
            setSameDataError(false);
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const currenEmail = JSON.parse(localStorage.getItem('user')).email;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase()) || e.target.value === currenEmail ) {
            setEmailError('Некорректный Email');
        } else {
            setEmailError('');
            setSameDataError(false);
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
            default:
                break;
        }
    }

    const history = useHistory();
    function onSignOut() {
        localStorage.removeItem('user');
        // выход с аккаунта
        mainApi.signout().then(res => {console.log('Успешно вышли')}).catch(e => {console.log('Что-то пошло не так')})
        props.setLoggedin(false);
        history.push('/');
    }

    function handleSubmitProfile(e) {
        e.preventDefault();
        if(!(name === JSON.parse(localStorage.getItem('user')).name && email === JSON.parse(localStorage.getItem('user')).email)) {
            console.log('Данные проходят')
            props.handleSubmitEditPorfile(name, email);
            setName(name);
            setEmail(email);
            setSameDataError(false);
        } else {
            setFormValid(false);
            setSameDataError(true);
        }
        
    }
    return (<>
        <section className="profile">
            <h1 className="profile__header">Привет, {JSON.parse(localStorage.getItem('user')).name}!</h1>
            <form className="profile__form" onSubmit={handleSubmitProfile}>
                {sameDataError ? <p className="profile__error-same">Необходимо изменить данные данные</p> : ''}
                <p className="profile__line">
                    Имя
                    <input type="text" 
                        name="name" 
                        className="profile__input profile__name" 
                        placeholder="Введите имя"
                        onChange={e => nameHandler(e)}
                        value={name} 
                        onInput={blureHandle}
                    />
                </p>
                {(nameError && nameDirty) && <span className="profile__error profile__error_active">{nameError}</span> }
                <p className="profile__line">
                    E-mail
                    <input type="text" 
                        name="email" 
                        className="profile__input profile__email" 
                        placeholder="Введите email"
                        onChange={e => emailHandler(e)} 
                        value={email} 
                        onInput={blureHandle}
                    />
                </p>
                {(emailDirty && emailError) && <span className="profile__error profile__error_active">{emailError}</span> }
                <button disabled={!formValid} className={!formValid ? 'profile__submit profile__submit_disabled' : 'profile__submit'} type="submit">Редактировать</button>
            </form>
            <button onClick={() => onSignOut()} className="profile__logout">Выйти из аккаунта </button>
        </section>
    </>)
}

export default Profile;