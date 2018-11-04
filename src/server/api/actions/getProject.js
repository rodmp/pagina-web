import { userPk } from 'sls-aws/src/server/api/pkMaker'
import { prop, pick } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'


const schema = {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		stripeCardId: { type: 'string' },
		amount: { type: 'integer' },
	},
}


export default async (userId, recordData) => {
	
	const userPk = `user-${userId}`

	const projectCommon = pick(['image', 'title'], recordData)

	const created = Date.now()

	const pledge = {
		[PARTITION_KEY]: userPk,
		[SORT_KEY]: `pledged|${projectPk}|${created}`,
		...prop('pledge', recordData),
		...projectCommon,
	}

	const res = await documentClient.batchWrite(params).promise()
	return res
}
