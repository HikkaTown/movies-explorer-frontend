import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
    const moviesData = props.movies;
    return (
        <section className="moviesList">
            <div className="moviesList__container">
                {
                    moviesData.length !== 0 ? moviesData.map((data) => (
                        <MoviesCard
                            key={data.id}
                            movie={data}
                        />
                    ))
                    : ''
                }
            </div>
            <button className="moviesList__more">Ещё</button>
        </section>
    )
}

export default MoviesCardList;