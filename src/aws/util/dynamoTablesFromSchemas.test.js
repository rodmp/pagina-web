import {
	schemaToAttributeDefinitions,
} from 'root/src/aws/util/dynamoTablesFromSchemas'

describe('dynamoTablesFromSchema', () => {
	test('schemaToAttributeDefinitions', () => {
		const result = schemaToAttributeDefinitions({
			type: 'object',
			properties: {
				intTest: {
					type: 'integer',
				},
				booleanTest: {
					type: 'boolean',
				},
				stringTest: {
					type: 'string',
				},
			},
		})
		expect(result).toEqual([
			{ AttributeName: 'intTest', AttributeType: 'N' },
			{ AttributeName: 'booleanTest', AttributeType: 'B' },
			{ AttributeName: 'stringTest', AttributeType: 'S' },
		])
	})
})
