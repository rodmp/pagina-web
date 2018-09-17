import { prop } from 'ramda'
import { Lambda } from 'aws-sdk'

import { region } from 'sls-aws/src/constants/aws'

export default (fnName, payload) => {
	const lambda = new Lambda({ region })
	return lambda.invoke({
		FunctionName: fnName.replace(/:[0-9]*$/, ''),
		Payload: JSON.stringify(payload),
	}).promise()
		.then(res => JSON.parse(prop('Payload', res)))
}
