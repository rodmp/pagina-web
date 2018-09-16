import getAtt from 'sls-aws/src/aws/util/getAtt'

import { API_LAMBDA_FUNCTION } from 'sls-aws/src/aws/api/resourceIds'

export default [
	{
		Effect: 'Allow',
		Action: [
			'lambda:InvokeFunction',
		],
		Resource: getAtt(API_LAMBDA_FUNCTION, 'Arn'),
	},
]
