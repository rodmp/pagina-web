export default (cardType) => {
	switch (cardType) {
		case 'visa':
			return 'Visa'
		case 'masterCard':
			return 'Master Card'
		default:
			return cardType
	}
}
