function ImagePopup(props) {
    return (
        <div className={`popup popup_type_img-open ${props.card && `popup_opened`}`} onClick={props.onClose}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={props.onClose}>Закрыть</button>
                <img className="popup__photo" alt={props.card ? props.card.name : ''} src={props.card && props.card.link} />
                <h2 className="popup__photo-caption"> {props.card && props.card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;