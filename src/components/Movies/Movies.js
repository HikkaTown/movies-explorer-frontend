import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
    const moviesData = [
        {
            id: 1,
            name: 'Название',
            image: './moviesImage/pic__COLOR_pic-1.png',
            time: '1ч 17м',
            status: false // true - сохранён, false - нет
        },
        {
            id: 2,
            name: 'Название',
            image: './moviesImage/pic__COLOR_pic-2.png',
            time: '1ч 17м',
            status: false // true - сохранён, false - нет
        },
        {
            id: 3,
            name: 'Название',
            image: './moviesImage/pic__COLOR_pic-3.png',
            time: '1ч 17м',
            status: false // true - сохранён, false - нет
        },
        {
            id: 4,
            name: 'Название',
            image: './moviesImage/pic__COLOR_pic-4.png',
            time: '1ч 17м',
            status: false // true - сохранён, false - нет
        },
        {
            id: 5,
            name: 'Название',
            image: './moviesImage/pic__COLOR_pic-5.png',
            time: '1ч 17м',
            status: false // true - сохранён, false - нет
        },
        {
            id: 6,
            name: 'Название',
            image: './moviesImage/pic__COLOR_pic-6.png',
            time: '1ч 17м',
            status: false // true - сохранён, false - нет
        },
    ];

    return (<>
        <SearchForm></SearchForm>
        <MoviesCardList
            movies={moviesData}
        />
    </>
    )
}

export default Movies;