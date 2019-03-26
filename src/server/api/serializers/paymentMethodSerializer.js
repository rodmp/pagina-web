const determineLastFour = ({ cardNumber }) => {
	const cardArray = cardNumber.split(' ')
	return cardArray[cardArray.length - 1]
}

export default card => ({
	lastFour: determineLastFour(card),
	cardType: card.cardType,
	id: card.sk,
	expDate: card.expDate,
})
