import { map } from 'ramda'
import { dynamoItemsProp } from 'sls-aws/src/server/api/lenses'

export default ({ dynamoResults, serializer, next }) => ({
	next,
	items: map((item) => {
		if (serializer) {
			return serializer(item)
		}
		return item
	}, dynamoItemsProp(dynamoResults)),
})
