import './FilterCheckbox.css';

function FilterCheckbox(props) {
    function toggleCheckbox(e) {
        document.querySelector('.filterCheckbox-btn').classList.toggle('filterCheckbox-btn_on');
        document.querySelector('.filterCheckbox-btn').classList.contains('filterCheckbox-btn_on') ? props.handleClick(true) : props.handleClick(false);
    }
    return (
        <div className="filterCheckbox-btn" onClick={toggleCheckbox}></div>
    )
}

export default FilterCheckbox;