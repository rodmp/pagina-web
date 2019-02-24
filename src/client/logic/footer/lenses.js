import lensesFromSchema from 'root/src/shared/util/lensesFromSchema'

import { variableSchemaKey } from 'root/src/shared/util/commonLenses'

export const footerModuleDescriptionSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				bannerFooterImage: { type: 'string' },
				isSuccessPage: { type: 'boolean' },
			},
		},
	},
}

export const footerModuleDescriptionLenses = lensesFromSchema(
	footerModuleDescriptionSchema,
)
