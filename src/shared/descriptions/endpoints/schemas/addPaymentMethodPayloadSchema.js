export default {
	type: 'object',
	properties: {
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
	required: ['cardNumber', 'expirationDate', 'securityCode', 'zipCode'],
	additionalProperties: false,
}
