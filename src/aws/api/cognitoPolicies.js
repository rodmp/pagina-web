import getAtt from 'sls-aws/src/aws/util/getAtt'

import { API_LAMBDA_FUNCTION } from 'sls-aws/src/aws/api/resourceIds'

const commonPolicies = [
	{
		Effect: 'Allow',
		Action: [
			'lambda:InvokeFunction',
		],
		Resource: getAtt(API_LAMBDA_FUNCTION, 'Arn'),
	},
]

export const authPolicies = commonPolicies
export const unauthPolicies = commonPolicies
