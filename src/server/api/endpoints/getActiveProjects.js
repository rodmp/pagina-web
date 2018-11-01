import { times } from 'ramda'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

export default async () => {
	const res = await Promise.all(
		times(
			i => documentClient.query({
				TableName: TABLE_NAME,
				i,
			}).promise(),
			howmanytimes
		),
	)
	return res
	// const res = documentClient.query({
	// 	TableName: TABLE_NAME,
	// }).promise()
}
