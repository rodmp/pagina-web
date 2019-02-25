export default {
	type: 'object',
	properties: {
		cardName: { type: 'string' },
		cardNumber: {
			type: 'string',
			minLength: 18,
			errorMessage: {
				minLength: 'Invalid card number',
			},
		},
		expirationDate: {
			type: 'string',
			minLength: 5,
			errorMessage: {
				minLength: 'Invalid expiration date',
			},
		},
		securityCode: {
			type: 'string',
			minLength: 3,
			errorMessage: {
				minLength: 'Invalid security code',
			},
		},
		zipCode: { type: 'string' },
	},
	required: ['cardName', 'cardNumber', 'expirationDate', 'securityCode', 'zipCode'],
	additionalProperties: false,
}
