import dynamoQueryOAuth from 'root/src/server/api/actionUtil/dynamoQueryOAuth'
import oAuthTokenSerializer from 'root/src/server/api/serializers/oAuthTokenSerializer'
import { map } from 'ramda'

export default async ({ payload: { payload, userId } }) => {
	const [tokenDdb] = await dynamoQueryOAuth(
		userId, payload,
	)
	return map(oAuthTokenSerializer, tokenDdb)
}
