import lensesFromSchema from 'sls-aws/src/shared/util/lensesFromSchema'

import { variableSchemaKey } from 'sls-aws/src/shared/util/commonLenses'

export const footerModuleDescriptionSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				bannerFooterImage: { type: 'string' },
			},
		},
	},
}

export const footerModuleDescriptionLenses = lensesFromSchema(
	footerModuleDescriptionSchema,
)
