
export default {
	type: 'object',
	properties: {
		lastFour: { type: 'string' },
		cardType: { type: 'string' },
		expDate: { type: 'number' },
		id: { type: 'string' },
		zipCode: { type: 'string' },
	},
	required: ['lastFour', 'cardType', 'expDate', 'id', 'zipCode'],
	additionalProperties: false,
}
