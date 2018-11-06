import uuidV5 from 'uuid'
import { map, pick } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import projectSerializer from 'sls-aws/src/server/api/serializers/projectSerializer'
import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'

export default async ({ userId, payload, payloadLenses, responseLenses }) => {
	const projectPk = `project-${uuidV5()}`

	const projectCommon = pick(['image', 'title'], payload)

	const created = Date.now()

	const {
		viewStripeCardId, viewPledgeAmount, viewAssignees,
	} = payloadLenses

	const pledgeAmount = viewPledgeAmount(payload)

	const project = {
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `project-${created}`,
		amountPledged: pledgeAmount,
		...payload,
	}

	const projectAssignees = map(assignee => ({
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `assignee-${uuidV5()}`,
		...assignee,
	}), viewAssignees(payload))

	const pledge = {
		[PARTITION_KEY]: userId,
		[SORT_KEY]: `pledged|${projectPk}|${created}`,
		pledgeAmount,
		stripeCardId: viewStripeCardId(payload),
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
	return {
		id: projectPk,
		...pick(['title', 'image', 'description', 'pledgeAmount'], payload),
	}
}
