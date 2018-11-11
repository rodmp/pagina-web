import uuidV5 from 'uuid'
import { map, pick, omit, assoc, prop } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'
import assigneeSerializer from 'sls-aws/src/server/api/serializers/assigneeSerializer'

import { CREATE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const payloadLenses = getPayloadLenses(CREATE_PROJECT)

export default async ({ userId, payload }) => {
	const serializedProject = await assigneeSerializer({
		project: payload, payloadLenses,
	})

	const projectPk = `project-${uuidV5()}`

	const projectCommon = pick(['image', 'title'], serializedProject)

	const created = Date.now()

	const {
		viewStripeCardId, viewPledgeAmount, viewAssignees,
	} = payloadLenses

	const pledgeAmount = viewPledgeAmount(serializedProject)

	const project = {
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `project-${created}`,
		...pick(
			['image', 'description', 'pledgeAmount', 'title'],
			serializedProject,
		),
	}

	const projectAssignees = map(assignee => ({
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `assignee-${uuidV5()}`,
		...assignee,
	}), viewAssignees(serializedProject))

	const pledge = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: `pledge|${projectPk}|${created}`,
		pledgeAmount,
		stripeCardId: viewStripeCardId(serializedProject),
		created: true,
		...projectCommon,
	}

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
		id: projectPk,
		assignees: map(assignee => omit(
			[PARTITION_KEY, SORT_KEY],
			assoc('id', prop(SORT_KEY, assignee), assignee),
		), projectAssignees),
		...pick(
			['title', 'image', 'description', 'pledgeAmount'],
			serializedProject,
		),
	}
}
