import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const moviesData = props.moviesData;
    const [item, setItem] = useState(12);
    const [moreItem, setMoreItem] = useState(3);
    useEffect(() => {
        if(props.windowSize >= 1280 || props.windowSize < 768) {
            setItem(12);
        }
        if(props.windowSize <= 768 && props.windowSize > 425) {
            setItem(8);
            setMoreItem(2);
        }
        if(props.windowSize <= 425) {
            setItem(5);
            setMoreItem(2);
        }
    }, [props.windowSize]);
    function handleMore(e) {
        e.preventDefault();
        setItem(item+moreItem);
    } 
    return (
        <section className="moviesList">
            <div className="moviesList__container">
                {
                    moviesData.length !== 0 ? moviesData.slice(0, item).map((data, index) => (
                        <MoviesCard
                            key={index}
                            movie={data}
                            handleSubmitSaveMovie={props.handleSubmitSaveMovie}
                            removeSavedMovie={props.removeSavedMovie}
                            userMovies={props.userMovies}
                        />
                    ))
                    : ''
                }
            </div>
            {item >= moviesData.length ? '' : (<button className="moviesList__more" onClick={handleMore}>Ещё</button>) }
        </section>
    )
}

export default MoviesCardList;