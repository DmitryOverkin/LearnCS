const Card = (props) => {

    const handleCardType = (cardType) => {
        switch (cardType) {
            case 'allow':
                return 'rgba(0, 255, 0, 0.1)'
            case 'denied':
                return 'rgba(255, 0, 0, 0.1)'
            default:
                return 'rgba(0, 0, 0, 0.1)'
        }
    }

    return (
        <div className="card" style={{ backgroundColor: handleCardType(props.type) }}>
            <span className="card-title">{props.title}</span>
            <span className="card-value">{props.value}</span>
        </div>
    )
}

export default Card;