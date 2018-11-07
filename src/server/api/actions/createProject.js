import uuidV5 from 'uuid'
import { map, pick, omit, assoc, prop } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'
import assigneeSerializer from 'sls-aws/src/server/api/serializers/assigneeSerializer'

import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'
import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'

export default async ({ userId, payload, payloadLenses }) => {
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
		amountPledged: pledgeAmount,
		...serializedProject,
	}

	const projectAssignees = map(assignee => ({
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `assignee-${uuidV5()}`,
		...assignee,
	}), viewAssignees(serializedProject))

	const pledge = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: `pledged|${projectPk}|${created}`,
		pledgeAmount,
		stripeCardId: viewStripeCardId(serializedProject),
		...projectCommon,
	}

	const userProject = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: `created|${projectPk}|${created}`,
		...projectCommon,
	}

	const params = {
		RequestItems: {
			[TABLE_NAME]: map(
				Item => ({ PutRequest: { Item } }),
				[project, ...projectAssignees, pledge, userProject],
			),
		},
		// ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
		// ReturnItemCollectionMetrics: SIZE | NONE,
	}

	const res = await documentClient.batchWrite(params).promise()
	// add assignee ids
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
