import dynamoQueryOAuth from 'root/src/server/api/actionUtil/dynamoQueryOAuth'

export default async ({ payload: { payload, userId } }) => {
	const [tokenDdb] = await dynamoQueryOAuth(
		userId, payload,
	)
	return tokenDdb
}
