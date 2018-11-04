import { prop, map } from 'ramda'

export default (dynamoResult, subSerializer) => ({
	nextKey: prop('LastEvaluatedKey', dynamoResult),
	results: map(subSerializer, prop('Items', dynamoResult)),
})
