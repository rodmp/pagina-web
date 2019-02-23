export default {
	type: 'object',
	properties: {
		cardName: { type: 'string' },
		cardNumber: { type: 'string' },
		expDate: { type: 'number' },
		securityCode: { type: 'number' },
		zipCode: { type: 'string' },
	},
	required: ['cardName', 'cardNumber', 'expDate', 'securityCode', 'zipCode'],
	additionalProperties: false,
}
