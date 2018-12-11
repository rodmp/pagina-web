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
								jwtToken: { type: 'string' },
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
