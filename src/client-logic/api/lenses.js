import { view, lensProp } from 'ramda'

import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'

import { variableSchemaKey } from 'sls-aws/src/util/commonLenses'

const apiStoreSchema = {
	type: 'object',
	properties: {
		api: {
			type: 'object',
			properties: {
				lists: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // listTypes
							type: 'object',
							patternProperties: {
								[variableSchemaKey]: { // filtersHash
									type: 'object',
									properties: {
										nextKey: { type: 'string' },
										items: { type: 'array' },
									},
								},
							},
						},
					},
				},
				records: {
					type: 'object',
					[variableSchemaKey]: { // recordTypes
						type: 'object',
						patternProperties: {
							[variableSchemaKey]: { // recordId
								type: 'object',
								properties: {},
							},
						},
					},
				},
			},
		},
	},
}

export const apiStoreLenses = lensesFromSchema(apiStoreSchema)

export const apiModuleSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {},
		},
	},
}
export const apiModuleLenses = lensesFromSchema(apiModuleSchema)
