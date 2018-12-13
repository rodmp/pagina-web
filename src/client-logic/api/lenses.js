import { prop } from 'ramda'

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
						[variableSchemaKey]: { // listStoreKey
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
						[variableSchemaKey]: { // listStoreKey
							// type: 'string', this is really a string
							type: 'object',
							properties: {},
						},
					},
				},
				listProcessing: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // listStoreKey
							// type: 'boolean', this is really a boolean
							type: 'object',
							properties: {},
						},
					},
				},
				records: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // recordTypes-recordId
							type: 'object',
							properties: {},
						},
					},
				},
				recordErrors: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // recordTypes-recordId
							// type: 'string', this is really a string
							type: 'object',
							properties: {},
						},
					},
				},
				recordProcessing: {
					type: 'object',
					patternProperties: {
						[variableSchemaKey]: { // recordTypes-recordId
							// type: 'boolean', this is really a boolean
							type: 'object',
							properties: {},
						},
					},
				},
			},
		},
	},
}

export const apiStoreLenses = lensesFromSchema(apiStoreSchema)


export const generalApiModuleDescriptionSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				endpointId: { type: 'string' },
				recordType: { type: 'string' },
			},
		},
	},
}
export const generalApiModuleDescriptionLenses = lensesFromSchema(
	generalApiModuleDescriptionSchema,
)

export const nextKeyProp = prop('next')
export const itemsProp = prop('items')
export const idProp = prop('id')
