import uuid from 'uuid/v1'
import { map, pick, omit, prop, join } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'
import assigneeSerializer from 'sls-aws/src/server/api/serializers/assigneeSerializer'

import { CREATE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'sls-aws/src/server/api/getEndpointDesc'
import projectDenormalizeFields from 'sls-aws/src/server/api/actionUtil/projectDenormalizeFields'
import pledgeDynamoObj from 'sls-aws/src/server/api/actionUtil/pledgeDynamoObj'
import randomNumber from 'sls-aws/src/util/randomNumber'
import { projectPendingKey } from 'sls-aws/src/server/api/lenses'

const payloadLenses = getPayloadLenses(CREATE_PROJECT)
const {
	viewStripeCardId, viewPledgeAmount, viewAssignees, viewGames,
} = payloadLenses

export default async ({ userId, payload }) => {
	const serializedProject = await assigneeSerializer({
		project: payload, payloadLenses,
	})

	const projectId = `project-${uuid()}`

	const projectCommon = projectDenormalizeFields(serializedProject)

	const created = Date.now()

	const pledgeAmount = viewPledgeAmount(serializedProject)

	const project = {
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: `project|${projectPendingKey}|${randomNumber(1, 10)}`,
		created,
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

	const projectGames = map(game => ({
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: join('|', [
			'game',
			prop('id', game),
		]),
		...omit(['id'], game),
	}), viewGames(serializedProject))

	const pledge = pledgeDynamoObj(
		projectId, serializedProject, userId, pledgeAmount,
		viewStripeCardId(serializedProject), true,
	)

	const params = {
		RequestItems: {
			[TABLE_NAME]: map(
				Item => ({ PutRequest: { Item } }),
				[project, ...projectAssignees, ...projectGames, pledge],
			),
		},
	}
	await documentClient.batchWrite(params).promise()

	return {
		id: projectId,
		status: projectPendingKey,
		...pick(
			['title', 'image', 'description', 'pledgeAmount', 'assignees'],
			serializedProject,
		),
	}
}
