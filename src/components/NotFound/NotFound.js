import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <section className="notFound">
            <div className="notFound__container">
                <h1 className="notFound__code">404</h1>
                <p className="notFound__title">Страница не найдена</p>
                <Link className="notFound__link" exact={true} to="/">Назад</Link>
            </div>
        </section>
    )
}

export default NotFound;