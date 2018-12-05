import apiLambda from 'sls-aws/src/aws/api/resources/apiLambda'
import apiLambdaExecutionRole from 'sls-aws/src/aws/api/resources/apiLambdaExecutionRole'
import apiDynamoDbTable from 'sls-aws/src/aws/api/resources/apiDynamoDbTable'

import outputs from 'sls-aws/src/aws/api/outputs'
import {
	authPolicies, unauthPolicies,
} from 'sls-aws/src/aws/api/cognitoPolicies'

export const apiResources = {
	...apiLambda,
	...apiLambdaExecutionRole,
	...apiDynamoDbTable,
}

export const apiOutputs = outputs

export const apiAuthPolicies = authPolicies
export const apiUnauthPolicies = unauthPolicies
