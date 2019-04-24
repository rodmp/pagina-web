import { SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import { split, tail, compose, join } from 'ramda'

export default token => ({
	...token,
	[SORT_KEY]: compose(join(''), tail, split('-'))(token[SORT_KEY]),
})
