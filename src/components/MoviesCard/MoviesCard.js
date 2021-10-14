import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const movieData = props.movie;
    const [saveState, setSaveState] = React.useState(false)
    function movieDelete(e) {
        setSaveState(false);
        const elemetn = e.target;
        props.removeSavedMovie(movieData._id);
        elemetn.parentNode.removeChild(elemetn);
    }

    function durationMovie(duration) {
        let hours = Math.trunc(duration/60);
        let minutes = duration % 60;
        return hours + 'ч ' + minutes + 'м';
    }

    const [movie, setMovie] = useState('');
    
    useEffect(() => {
        if(!!props.userMovies) {
            if(window.location.pathname === '/movies') {
                let result = props.userMovies.find(item => item.movieId === movieData.id);
                if(result) {
                    setSaveState(true)
                    setMovie(result)
                }
            }
        }
    }, [movieData, props.userMovies])
    

    return (
        <Switch>
            <Route exact={true} path="/movies">
            <article className="moviesCard">
                <img className="moviesCard__image" src={`${'https://api.nomoreparties.co'+movieData.image.url}`} alt={movieData.nameRU} />
                {
                    window.location.pathname === '/movies' ? saveState ? 
                    (<button className="moviesCard__btn-saved" onClick={(e) => {setSaveState(false);  props.removeSavedMovie(movie._id);}}></button>) 
                    : (<button className="moviesCard__btn" onClick={() => {
                        setSaveState(true);
                        props.handleSubmitSaveMovie(movieData);
                    }}> Сохранить</button>) 
                    : window.location.pathname === '/saved-movies' ?
                    (<button className="moviesCard__btn-delete" onClick={(e) => {movieDelete(e)}}></button>) : ''
                }
                <div className="moviesCard__content">
                    <p className="moviesCard__name">{movieData.nameRU}</p>
                    <p className="moviesCard__time">{durationMovie(movieData.duration)}</p>
                </div>
            </article>
            </Route>
            <Route exact={true} path="/saved-movies">
            <article className="moviesCard">
                <img className="moviesCard__image" src={movieData.image} alt={movieData.nameRU} />
                <button className="moviesCard__btn-delete" onClick={(e) => {movieDelete(e)}}></button>
                <div className="moviesCard__content">
                    <p className="moviesCard__name">{movieData.nameRU}</p>
                    <p className="moviesCard__time">{durationMovie(movieData.duration)}</p>
                </div>
            </article>
            </Route>
        </Switch>
    )
}

export default MoviesCard;