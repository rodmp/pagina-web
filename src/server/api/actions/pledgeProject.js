import { userPk } from 'sls-aws/src/server/api/pkMaker'
import { omit, pick } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'


export default async ({ userId, payload }) => {
	const userPk = `user-${userId}`

	const projectCommon = pick(['image', 'title'], recordData)

	const created = Date.now()

	const pledge = {
		[PARTITION_KEY]: projectPk,
		[SORT_KEY]: `pledge|${userId}`,
		...omit(['projectId'], payload),
		...projectCommon,
	}

	const res = await documentClient.batchWrite(params).promise()
	return res
}
