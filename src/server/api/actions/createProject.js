import uuidV5 from 'uuid'
import { map, pick, omit, assoc, prop, join } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'
import assigneeSerializer from 'sls-aws/src/server/api/serializers/assigneeSerializer'

import { CREATE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'sls-aws/src/server/api/getEndpointDesc'
import projectDenormalizeFields from 'sls-aws/src/server/api/actionUtil/projectDenormalizeFields'
import pledgeDynamoObj from 'sls-aws/src/server/api/actionUtil/pledgeDynamoObj'

const payloadLenses = getPayloadLenses(CREATE_PROJECT)
const {
	viewStripeCardId, viewPledgeAmount, viewAssignees,
} = payloadLenses

export default async ({ userId, payload }) => {
	const serializedProject = await assigneeSerializer({
		project: payload, payloadLenses,
	})

	const projectId = `project-${uuidV5()}`

	const projectCommon = projectDenormalizeFields(serializedProject)

	const created = Date.now()


	const pledgeAmount = viewPledgeAmount(serializedProject)

	const project = {
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: `project|${created}`,
		...pick(
			['image', 'description', 'pledgeAmount', 'title'],
			serializedProject,
		),
	}

	const projectAssignees = map(assignee => ({
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: join('|', [
			'assignee',
			prop('platform', assignee),
			prop('platformId', assignee),
		]),
		...omit(['platform', 'platformId'], assignee),
	}), viewAssignees(serializedProject))

	const pledge = pledgeDynamoObj(
		projectId, serializedProject, userId, pledgeAmount,
		viewStripeCardId(serializedProject), true,
	)

	const params = {
		RequestItems: {
			[TABLE_NAME]: map(
				Item => ({ PutRequest: { Item } }),
				[project, ...projectAssignees, pledge],
			),
		},
	}
	await documentClient.batchWrite(params).promise()

	return {
		id: projectId,
		...pick(
			['title', 'image', 'description', 'pledgeAmount', 'assignees'],
			serializedProject,
		),
	}
}
