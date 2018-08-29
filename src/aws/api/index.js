import apiLambda from 'sls-aws/src/aws/api/resources/apiLambda'
import apiLambdaExecutionRole from 'sls-aws/src/aws/api/resources/apiLambdaExecutionRole'

import outputs from 'sls-aws/src/aws/api/outputs'

export const apiResources = {
	...apiLambda,
	...apiLambdaExecutionRole,
}

export const apiOutputs = outputs
