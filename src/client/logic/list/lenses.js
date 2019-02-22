import lensesFromSchema from 'sls-aws/src/shared/util/lensesFromSchema'

import { variableSchemaKey } from 'sls-aws/src/shared/util/commonLenses'

const listSchema = {
	type: 'object',
	properties: {},
}

export const listStoreLenses = lensesFromSchema(listSchema)

export const listModuleSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				listType: { type: 'string', enum: ['card', 'list'] },
				listTitle: { type: 'string' },
				listSubtitle: { type: 'string' },
				listControls: { type: 'array' },
			},
		},
	},
}
export const listModuleLenses = lensesFromSchema(listModuleSchema)
