import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import image from '../../images/sad.png';

function SavedMovies(props) {
    const [searchData, setSearchData] = useState(null);
    useEffect(() => {
        if(!!props.savedSearch && !!props.filterResult === false ) {
            setSearchData(props.savedSearch)
        } else if(!!props.filterResult && !!props.savedSearch) {
            setSearchData(props.filterResult);
        } else if(!!props.savedSearch && (!!props.filterResult === false)) {
            setSearchData(null);
        }
    }, [props.savedSearch, props.filterResult]);
    console.log(props.userMovies)
    return (<>
        <SearchForm filterMovies={props.filterMovies} searchSavedMovie={props.searchSavedMovie} />

        {
        props.userMovies.length ? '' : (
        <div className="movies__content">
            <img className="movies__image" src={image} alt="Лого" />
            <p className="movies__title">У вас ещё нет сохранённых фильмов</p>
        </div>)
        }

        {
            props.loading ? <Preloader/> : (!!props.userMovies ? !!searchData ? (<MoviesCardList
                moviesData={searchData}
                windowSize={props.windowSize}
                removeSavedMovie={props.removeSavedMovie}
            />) : props.savedSearchError ? (<p className="movies__message_error">{props.savedSearchError}</p>) : props.userMovies ? (<MoviesCardList
                moviesData={props.userMovies}
                windowSize={props.windowSize}
                removeSavedMovie={props.removeSavedMovie}
            />) : (<p className="movies__message_error">{props.findResult}</p>) : '')
        }
    </>)
}

export default SavedMovies;