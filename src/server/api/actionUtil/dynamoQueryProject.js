import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'
import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'


export default async (userId, projectId) => {
	const projectParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :project)`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':project': 'project',
		},
		ConsistentRead: true,
	}
	const assigneeParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :assignee)`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':assignee': 'assignee',
		},
		ConsistentRead: true,
	}
	const myPledgeParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and ${SORT_KEY} = :pledgeUserId`,
		ExpressionAttributeValues: {
			':pk': projectId,
			':pledgeUserId': `pledge|${userId}`,
		},
		ConsistentRead: true,
	}

	const [projectDdb, assigneesDdb, myPledgeDdb] = await Promise.all([
		documentClient.query(projectParams).promise(),
		documentClient.query(assigneeParams).promise(),
		documentClient.query(myPledgeParams).promise(),
	])
	return [
		dynamoItemsProp(projectDdb),
		dynamoItemsProp(assigneesDdb),
		dynamoItemsProp(myPledgeDdb),
	]
}
