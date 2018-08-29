import getAtt from 'sls-aws/src/aws/util/getAtt'

import { API_LAMBDA_FUNCTION } from 'sls-aws/src/aws/api/resourceIds'

import { API_FUNCTION_ARN } from 'sls-aws/src/aws/api/outputIds'

export default {
	[API_FUNCTION_ARN]: {
		Description: 'Api Lambd fn arn',
		Value: getAtt(API_LAMBDA_FUNCTION, 'Arn'),
	},
}
