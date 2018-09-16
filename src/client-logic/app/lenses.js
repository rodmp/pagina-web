import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

const appSchema = {
	type: 'object',
	properties: {
		app: {
			type: 'object',
			properties: {
				authenticated: { type: 'boolean' },
			},
		},
	},
}

export const appStoreLenses = lensesFromSchema(appSchema)
