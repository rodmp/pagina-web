import { view, lensProp, prop } from 'ramda'

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
						[variableSchemaKey]: { // listTypes-filterHash
							type: 'object',
							properties: {
								next: { type: 'string' },
								items: { type: 'array' },
							},
						},
					},
				},
				listErrors: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // listTypes-filterHash
							type: 'object',
							properties: {},
						},
					},
				},
				listProcessing: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // listTypes-filterHash
							type: 'boolean',
						},
					},
				},
				records: {
					type: 'object',
					[variableSchemaKey]: { // recordTypes-recordId
						type: 'object',
						properties: {},
					},
				},
				recordErrors: {
					type: 'object',
					[variableSchemaKey]: { // recordTypes-recordId
						type: 'array',
						items: { type: 'string' },
					},
				},
				recordProcessing: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // recordTypes-recordId
							type: 'boolean',
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

export const nextKeyProp = prop('next')
export const itemsProp = prop('items')
export const idProp = prop('id')
