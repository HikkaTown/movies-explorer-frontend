import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <form action="" className="search__form">
                    <input type="text" placeholder="Фильм" className="search__input" />
                    <button className="search__submit" type="submit">Найти</button>
                    <div className="search__checkbox">
                        <FilterCheckbox></FilterCheckbox>
                        <p className="search__checkbox-name">Короткометражки</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;