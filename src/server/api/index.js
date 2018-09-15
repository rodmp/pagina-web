import allEndpoints from 'sls-aws/src/descriptions/endpoints'
import getApiPromise from 'sls-aws/src/server/api/getApiPromise'
import { promiseSeriesWaterfall } from 'sls-aws/src/util/promiseSeries'

export const apiHof = endpoints => (event, context, callback) => {
	const { endpointId, payload } = event
	const promiseArr = getApiPromise(endpoints, endpointId, payload)

	return promiseSeriesWaterfall(payload, promiseArr).then((res) => {
		callback(null, { statusCode: 200, body: res })
	}).catch(({ statusCode, ...errors }) => {
		callback(null, { statusCode, body: errors })
	})
}

export default apiHof(allEndpoints)
