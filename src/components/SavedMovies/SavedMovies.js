import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
    const moviesData = [
        {
            id: 1,
            name: 'Баския: Взрыв реальности',
            image: './moviesImage/pic__COLOR_pic-1.png',
            time: '1ч 17м',
            status: true // true - сохранён, false - нет
        },
        {
            id: 2,
            name: 'Когда я думаю о Германии ночью',
            image: './moviesImage/pic__COLOR_pic-2.png',
            time: '1ч 17м',
            status: true // true - сохранён, false - нет
        },
        {   
            id: 3,
            name: 'Соберись перед прыжком',
            image: './moviesImage/pic__COLOR_pic-3.png',
            time: '1ч 17м',
            status: true // true - сохранён, false - нет
        },
        {   
            id: 4,
            name: 'Киноальманах «100 лет дизайна»',
            image: './moviesImage/pic__COLOR_pic-4.png',
            time: '1ч 17м',
            status: true // true - сохранён, false - нет
        }
    ];
    return (<>
        <SearchForm></SearchForm>
        <MoviesCardList
            movies={moviesData}
        />
    </>)
}

export default SavedMovies;