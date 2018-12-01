import { Lambda } from 'aws-sdk'

import { apiFunctionArn } from 'sls-aws/cfOutput'

const lambda = new Lambda()

export default (endpointId, payload) => lambda.invoke({
	FunctionName: apiFunctionArn,
	Payload: JSON.stringify({ endpointId, payload }),
}).promise()
