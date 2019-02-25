export default {
	type: 'object',
	properties: {
		cardName: { type: 'string' },
		cardNumber: { type: 'string', minLength: 18 },
		expirationDate: { type: 'string', minLength: 5 },
		securityCode: { type: 'string', minLength: 3 },
		zipCode: { type: 'string' },
	},
	required: ['cardName', 'cardNumber', 'expirationDate', 'securityCode', 'zipCode'],
	additionalProperties: false,
}
