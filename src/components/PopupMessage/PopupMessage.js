import './PopupMessage.css';

function PopupMessage(props) {
    return (
        <div className={props.onActive ? 'popupMessage popupMessage_active' : 'popupMessage'}>
            <p className="popupMessage__text">{props.textMessage}</p>
        </div>
    )
}

export default PopupMessage;