import {
	toPairs, prop, T, propEq, cond, always, map,
} from 'ramda'

export const schemaToAttributeDefinitions = schema => map(
	([key, schemaDef]) => ({
		AttributeName: key,
		AttributeType: cond([
			[propEq('type', 'boolean'), always('B')],
			[propEq('type', 'integer'), always('N')],
			[T, always('S')],
		])(schemaDef),
	}),
	toPairs(prop('properties', schema)),
)

export default (schema, {
	hashKey, rangeKey, readCapacity, writeCapacity, gsi, lsi,
}) => ({
	Type: 'AWS::DynamoDB::Table',
	Properties: {
		AttributeDefinitions: schemaToAttributeDefinitions(schema),
		KeySchema: [
			{
				AttributeName: hashKey,
				KeyType: 'HASH',
			},
			...(rangeKey ? [] : [{
				AttributeName: rangeKey,
				KeyType: 'RANGE',
			}]),
		],
		ProvisionedThroughput: {
			ReadCapacityUnits: readCapacity,
			WriteCapacityUnits: writeCapacity,
		},
		GlobalSecondaryIndexes: map(({
			name, projectionAttributes, readCapacity, writeCapacity,
			hashKey, rangeKey,
		}) => ({
			IndexName: name,
			Projection: {
				...(projectionAttributes ? {
					NonKeyAttributes: projectionAttributes,
				} : {}),
				ProjectionType: projectionAttributes ? 'INCLUDE' : 'All',
			},
			KeySchema: [
				{
					AttributeName: hashKey,
					KeyType: 'HASH',
				},
				...(rangeKey ? [] : [{
					AttributeName: rangeKey,
					KeyType: 'RANGE',
				}]),
			],
			ProvisionedThroughput: {
				ReadCapacityUnits: readCapacity,
				WriteCapacityUnits: writeCapacity,
			},
		}), gsi),
		LocalSecondaryIndexes: map(({
			name, projectionAttributes, hashKey, rangeKey,
		}) => ({
			IndexName: name,
			Projection: {
				...(projectionAttributes ? {
					NonKeyAttributes: projectionAttributes,
				} : {}),
				ProjectionType: projectionAttributes ? 'INCLUDE' : 'All',
			},
			KeySchema: [
				{
					AttributeName: hashKey,
					KeyType: 'HASH',
				},
				...(rangeKey ? [] : [{
					AttributeName: rangeKey,
					KeyType: 'RANGE',
				}]),
			],
		}), lsi),
	},
})
