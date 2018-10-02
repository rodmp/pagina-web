import { reduce } from 'reduce'

export default (schemasObj, tableConfig) => reduce(
	([resourceName, schema]) => assoc(
		{
			Type: 'AWS::DynamoDB::Table',
			Properties: {
				AttributeDefinitions: [
					{
						AttributeName: '',
						AttributeType: 'S|N|B'
					}
				],
				GlobalSecondaryIndexes: [
					{
						IndexName: String,
						KeySchema: [
							{
								AttributeName: String,
								KeyType: 'HASH|RANGE',
							}
						],
						Projection: {
							NonKeyAttributes: [],
							ProjectionType: 'KEYS_ONLY|INCLUDE|ALL'
						},
						ProvisionedThroughput: {
							ReadCapacityUnits: Number,
							WriteCapacityUnits: Number
						}
					}
				],
				KeySchema: [
					{
						AttributeName: String,
						KeyType: 'HASH|RANGE',
					}
				],
				LocalSecondaryIndexes: [
					{
						IndexName: String,
						KeySchema: [
							{
								AttributeName: String,
								KeyType: 'HASH|RANGE',
							}
						],                           
						Projection: {
							NonKeyAttributes: [

							],
							ProjectionType: 'KEYS_ONLY|INCLUDE|ALL'
						}
					}
				],
				ProvisionedThroughput: {
					ReadCapacityUnits: Number,
					WriteCapacityUnits: Number
				},
			}
		}
	),
	{},
	toPairs(schemasObj)
)
