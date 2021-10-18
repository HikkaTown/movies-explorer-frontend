import './Movies.css';
import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import image from '../../images/video-player.png';


function Movies(props) {
    const [searchMovie, setSearchMovie] = useState('');
    useEffect(() => {
        if(props.moviesData) {
            setSearchMovie(props.moviesData);
        } else {
            setSearchMovie(null)
        }
    }, [props.moviesData])
    return (<>
        <SearchForm
            onSubmitSeacrh={props.handleSubmitSearchMovie}
            filterMovies={props.filterMovies}
        />

        {localStorage.getItem('movies') ? '' : 
        (<div className="movies__content">
            <img className="movies__image" src={image} alt="Лого" />
            <p className="movies__title">Для поиска фильма введите ключевое слово</p>
        </div>)}

        {
            props.loading ? <Preloader/> : (!!localStorage.getItem('movies') ? searchMovie ? (<MoviesCardList
                handleSubmitSaveMovie={props.handleSubmitSaveMovie}
                userMovies={props.userMovies}
                removeSavedMovie={props.removeSavedMovie}
                windowSize={props.windowSize} 
                moviesData={searchMovie}/>) : 
                props.findResult ? 
                (<p className="movies__message_error">{props.findResult}</p>) : 
                !!localStorage.getItem('movies') ? 
                (<MoviesCardList
                    handleSubmitSaveMovie={props.handleSubmitSaveMovie}
                    userMovies={props.userMovies}
                    removeSavedMovie={props.removeSavedMovie} 
                    windowSize={props.windowSize} // фильмы из резултата поиска
                    moviesData={JSON.parse(localStorage.getItem('movies'))}/>) : 
                (<p className="movies__message_error">{props.findResult}</p>)  : 
                '')
        }
    </>
    )
}

export default Movies;