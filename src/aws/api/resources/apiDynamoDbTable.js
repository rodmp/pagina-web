import {
	PARTITION_KEY, SORT_KEY, GSI1_INDEX_NAME, GSI1_PARTITION_KEY, GSI1_SORT_KEY,
} from 'sls-aws/src/constants/apiDynamoIndexes'

import { API_DYNAMO_DB_TABLE } from 'sls-aws/src/aws/api/resourceIds'

export default {
	[API_DYNAMO_DB_TABLE]: {
		Type: 'AWS::DynamoDB::Table',
		Properties: {
			AttributeDefinitions: [
				{
					AttributeName: PARTITION_KEY,
					AttributeType: 'S'
				},
				{
					AttributeName: SORT_KEY,
					AttributeType: 'S'
	  			},  
			],
		},
		KeySchema: [
			{
				AttributeName: PARTITION_KEY,
				KeyType: 'HASH'
			},
			{
				AttributeName: SORT_KEY,
				KeyType: 'RANGE'
			}
		],
		// GlobalSecondaryIndexes: [
		// 	{
		// 		IndexName: GSI1_INDEX_NAME,
		// 		KeySchema: [
		// 			{
		// 				AttributeName: 'sk',
		// 				KeyType: 'RANGE'
		// 			}
		// 		],
		// 		Projection: {
		// 			NonKeyAttributes: ['key1', 'key2'],
		// 			ProjectionType: 'KEYS_ONLY|INCLUDE|ALL'
		// 		},
		// 		ProvisionedThroughput: {
		// 			ReadCapacityUnits: 1,
		// 			WriteCapacityUnits: 1,
		// 		},
		// 	}
		// ],
		// LocalSecondaryIndexes: [],
		ProvisionedThroughput: {
			ReadCapacityUnits: 1,
			WriteCapacityUnits: 1,
		},
	},
}
