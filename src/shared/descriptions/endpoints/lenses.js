import lensesFromSchema from 'root/src/shared/util/lensesFromSchema'
import { variableSchemaKey } from 'root/src/shared/util/commonLenses'


const endpointDescriptionSchema = {
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: { // endpointId
			type: 'object',
			properties: {
				authentication: { type: 'string' },
				endpointType: { type: 'string', enum: ['list', 'record'] },
				recordType: {
					type: 'string',
					enum: [
						'project',
						'projectList',
						'paymentMethod',
					],
				},
			},
		},
	},
}

export const endpointDescriptionLenses = lensesFromSchema(
	endpointDescriptionSchema,
)

export const listEndpointType = 'list'
export const recordEndpointType = 'record'
