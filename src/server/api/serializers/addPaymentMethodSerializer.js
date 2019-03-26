const determineCardType = ({ cardNumber }) => {
	const firstNumber = cardNumber[0]
	switch (firstNumber) {
		case '3':
			return 'travelOrEntertainmentCard'
		case '4':
			return 'visa'
		case '5':
			return 'masterCard'
		case '6':
			return 'discoverCard'
		default:
			return 'card'
	}
}

const determineCardDate = ({ expDate }) => {
	const [month, year] = expDate.split('/')
	return new Date(`20${year}-${month}-01`).getTime()
}

export default card => ({
	cardNumber: card.cardNumber,
	cardType: determineCardType(card),
	expDate: determineCardDate(card),
	zipCode: card.zipCode,
})
