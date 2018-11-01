import uuidV5 from 'uuid'
import {
	map, prop, pick, path,
} from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import {
	PARTITION_KEY, SORT_KEY, GSI1_INDEX_NAME, GSI1_PARTITION_KEY, GSI1_SORT_KEY,
} from 'sls-aws/src/constants/apiDynamoIndexes'


const schema = {
	type: 'object',
	properties: {
		title: { type: 'string' },
		image: { type: 'string' },
		description: { type: 'string' },
		pledge: {
			type: 'object',
			properties: {
				stripeCardId: { type: 'string' },
				amount: { type: 'integer' },
			},
		},
		assignees: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					platform: {
						type: 'string',
						enum: ['twitch', 'youtube'],
					},
					url: {
						type: 'string',
						format: 'url',
					},
				},
			},
		},
	},
}


export default async (userId, recordData) => {
	const projectPk = `project-${uuidV5()}`
	const userPk = `user-${userId}`

	const projectCommon = pick(['image', 'title'], recordData)

	const created = Date.now()

	const project = {
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `project-${created}`,
		amountPledged: path(['pledge', 'amount'], recordData),
		...recordData,
	}

	const projectAssignees = map(assignee => ({
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `assignee-${uuidV5()}`,
		...assignee,
	}), prop('assignees', recordData))

	const pledge = {
		[PARTITION_KEY]: userPk,
		[SORT_KEY]: `pledged|${projectPk}|${created}`,
		...prop('pledge', recordData),
		...projectCommon,
	}

	const userProject = {
		[PARTITION_KEY]: userPk,
		[SORT_KEY]: `created|${projectPk}|${created}`,
		...prop('pledge', recordData),
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
	return res
}
