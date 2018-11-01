import getAtt from 'sls-aws/src/aws/util/getAtt'

import { API_LAMBDA_FUNCTION } from 'sls-aws/src/aws/api/resourceIds'

import {
	API_FUNCTION_ARN, API_DYNAMO_TABLE_NAME,
} from 'sls-aws/src/aws/api/outputIds'

export default {
	[API_FUNCTION_ARN]: {
		Description: 'Api Lambd fn arn',
		Value: getAtt(API_LAMBDA_FUNCTION, 'Arn'),
	},
	[API_DYNAMO_TABLE_NAME]: {
		Description: 'Api dynamodb table name',
		Value: getAtt(API_DYNAMO_TABLE_NAME, 'TableName'),
	},
}
