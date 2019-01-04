import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import {
	GSI1_INDEX_NAME, GSI1_PARTITION_KEY,
} from 'sls-aws/src/shared/constants/apiDynamoIndexes'
import listResults from 'sls-aws/src/server/api/actionUtil/listResults'
import pledgeSerializer from 'sls-aws/src/server/api/serializers/pledgeSerializer'

export default async ({ userId }) => {
	const userProjectIdParams = {
		TableName: TABLE_NAME,
		IndexName: GSI1_INDEX_NAME,
		KeyConditionExpression: `${GSI1_PARTITION_KEY} = :pk`,
		ExpressionAttributeValues: {
			':pk': `pledge|${userId}`,
		},
	}
	const dynamoResults = await documentClient.query(
		userProjectIdParams,
	).promise()
	return listResults({
		dynamoResults,
		serializer: pledgeSerializer,
	})
}
