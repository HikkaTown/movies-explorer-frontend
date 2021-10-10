import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
    const [savedData, setSavedData] = useState(false);
    useEffect(() => {
        if(props.savedSearch) {
            setSavedData(true)
        } else {
            setSavedData(false)
        }
    }, [props.savedSearch]);
    return (<>
        <SearchForm searchSavedMovie={props.searchSavedMovie} />
        {
            props.loading ? <Preloader/> : (!!props.userMovies ? savedData ? (<MoviesCardList
                moviesData={props.savedSearch}
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