import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        let value = e.target[0].value;
        if(window.location.pathname === '/movies') {
            props.onSubmitSeacrh(value);
        } else if(window.location.pathname === '/saved-movies') {
            props.searchSavedMovie(value);
        }
    }

     
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Фильм" className="search__input" required />
                    <button className="search__submit" type="submit">Найти</button>
                    <div className="search__checkbox">
                        <FilterCheckbox filterMovies={props.filterMovies} ></FilterCheckbox>
                        <p className="search__checkbox-name">Короткометражки</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;