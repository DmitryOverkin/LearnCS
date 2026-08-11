const Card = (props) => {

    const handleCardType = (cardType) => {
        switch (cardType) {
            case 'allow':
                return {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    border: '1px solid green',
                    borderRadius: 'calc(10 * (100vw / 1124))',
                }
            case 'denied':
                return {
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid red',
                    borderRadius: 'calc(10 * (100vw / 1124))'
                }
            default:
                return {
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    border: '1px solid blue',
                    borderRadius: 'calc(10 * (100vw / 1124))'
                }
        }
    }

    return (
        <div className="card" style={handleCardType(props.type)}>
            <span className="card-title">{props.title}</span>
            <span className="card-value">{props.value}</span>
        </div>
    )
}

export default Card;