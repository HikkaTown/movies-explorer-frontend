import './FilterCheckbox.css';

function FilterCheckbox() {
    function toggleCheckbox(e) {
        document.querySelector('.filterCheckbox-btn').classList.toggle('filterCheckbox-btn_on');
    }
    return (
        <div className="filterCheckbox-btn" onClick={toggleCheckbox}></div>
    )
}

export default FilterCheckbox;