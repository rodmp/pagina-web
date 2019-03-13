import uuid from 'uuid/v1'
import { map, pick, omit, prop, join } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import assigneeSerializer from 'root/src/server/api/serializers/assigneeSerializer'

import { CREATE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import projectDenormalizeFields from 'root/src/server/api/actionUtil/projectDenormalizeFields'
import pledgeDynamoObj from 'root/src/server/api/actionUtil/pledgeDynamoObj'
import randomNumber from 'root/src/shared/util/randomNumber'
import { projectPendingKey } from 'root/src/server/api/lenses'

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
		...projectCommon,
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

	const transactParams = {
		TransactItems: [...map(
			Item => ({ Put: { Item, TableName: TABLE_NAME } }),
			[project, ...projectAssignees, ...projectGames, pledge],
		)],
	}

	await documentClient.transactWrite(transactParams).promise()

	return {
		id: projectId,
		status: projectPendingKey,
		...projectCommon,
	}
}
