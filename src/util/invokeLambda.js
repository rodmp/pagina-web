import { prop } from 'ramda'

import { Lambda } from 'aws-sdk'

const lambda = new Lambda()
export default (fnName, payload) => lambda.invoke({
	FunctionName: fnName.replace(/:[0-9]*$/, ''),
	Payload: JSON.stringify(payload),
}).promise()
	.then(res => JSON.parse(prop('Payload', res)))
