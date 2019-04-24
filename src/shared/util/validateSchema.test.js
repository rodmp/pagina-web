import validateSchema from './validateSchema'


const customMessageSchema = {
	type: 'object',
	properties: {
		amount: {
			type: 'integer',
			minimum: 5,
			maximum: 1000000,
			errorMessage: {
				minimum: 'Amount must be at least $5',
				maximum: 'Amount must be at most $1000000',
			},
		},
		note: {
			type: 'string',
			minLength: 10,
		},
	},
	required: ['amount'],
}


describe('validateSchema', () => {
	test('property level error message - minimum', async () => {
		const error = await validateSchema('foo', customMessageSchema, { amount: 1 }).then(
			res => res.errors[0],
		)
		expect(error).toHaveProperty('keyword', 'errorMessage')
		expect(error).toHaveProperty('message', 'Amount must be at least $5')
	})
	test('property level error message - maximum', async () => {
		const error = await validateSchema(
			'foo', customMessageSchema, { amount: 1000001 },
		).then(
			res => res.errors[0],
		)
		expect(error).toHaveProperty('keyword', 'errorMessage')
		expect(error).toHaveProperty('message', 'Amount must be at most $1000000')
	})
	test('absence of property level error message', async () => {
		const error = await validateSchema(
			'foo', customMessageSchema, { amount: 5, note: 'not long' },
		).then(
			res => res.errors[0],
		)
		expect(error).toHaveProperty('keyword', 'minLength')
		expect(error).toHaveProperty(
			'message',
			'should NOT be shorter than 10 characters',
		)
	})
})
