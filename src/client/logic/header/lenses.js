import lensesFromSchema from 'sls-aws/src/shared/util/lensesFromSchema'

import { variableSchemaKey } from 'sls-aws/src/shared/util/commonLenses'

export const bannerHeaderModuleDescriptionSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				bannerImage: { type: 'string' },
				bannerSubText: { type: 'string' },
				bannerImageText: { type: 'string' },
				link: {
					type: 'object',
					properties: {
						routeId: { type: 'string' },
						label: { type: 'string' },
					},
				},
			},
		},
	},
}
export const bannerHeaderModuleDescriptionLenses = lensesFromSchema(
	bannerHeaderModuleDescriptionSchema,
)
