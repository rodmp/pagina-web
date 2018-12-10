import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

const appSchema = {
	type: 'object',
	properties: {
		app: {
			type: 'object',
			properties: {
				authenticated: {
					type: 'object',
					properties: {
						idToken: {
							type: 'object',
							properties: {
								'cognito:groups': {
									type: 'array',
									items: { type: 'string' },
								},
							},
						},
					},
				},
			},
		},
	},
}

export const appStoreLenses = lensesFromSchema(appSchema)
