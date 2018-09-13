import allEndpoints from 'sls-aws/src/descriptions/endpoints'
import getApiPromise from 'sls-aws/src/server/api/getApiPromise'
import { promiseSeriesApplyWaterfall } from 'sls-aws/src/util/promiseSeries'

export const apiHof = endpoints => (event, context, callback) => {
	const { endpointId, payload } = event
	const promiseArr = getApiPromise(endpoints, endpointId, payload)

	return promiseSeriesApplyWaterfall(payload, promiseArr).then((res) => {
		callback(null, { statusCode: 200, body: res })
	}).catch(({ statusCode, ...errors }) => {
		callback(null, { statusCode, body: errors })
	})
}

export default apiHof(allEndpoints)
