import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const movieData = props.movie;
    const [saveState, setSaveState] = React.useState(movieData.status)

    function movieDelete(e) {
        const elemetn = e.target;
        elemetn.closest('.moviesCard').remove();
    }

    return (
        <article className="moviesCard">
            <img className="moviesCard__image" src={movieData.image} alt={movieData.className} />
            {
                window.location.pathname === '/movies' ? saveState ? 
                (<button className="moviesCard__btn-saved"></button>) 
                : (<button className="moviesCard__btn" onClick={() => {setSaveState(true)}}> Сохранить</button>) 
                : window.location.pathname === '/saved-movies' ?
                (<button className="moviesCard__btn-delete" onClick={movieDelete}></button>) : ''
            }
            <div className="moviesCard__content">
                <p className="moviesCard__name">{movieData.name}</p>
                <p className="moviesCard__time">{movieData.time}</p>
            </div>
        </article>
    )
}

export default MoviesCard;