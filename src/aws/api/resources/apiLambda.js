import fnBuildPath from 'sls-aws/src/aws/util/fnBuildPath'
import ref from 'sls-aws/src/aws/util/ref'
import getAtt from 'sls-aws/src/aws/util/getAtt'

import {
	API_LAMBDA_FUNCTION, API_LAMBDA_EXECUTION_ROLE,
} from 'sls-aws/src/aws/api/resourceIds'
import ref from '../../util/ref';

export default {
	[API_LAMBDA_FUNCTION]: {
		Type: 'AWS::Lambda::Function',
		DependsOn: [
			API_LAMBDA_EXECUTION_ROLE,
			API_DYNAMO_DB_TABLE,
		],
		Properties: {
			Code: fnBuildPath('api'),
			Environment: {
				Variables: {
					API_DYNAMO_DB_TABLE: ref(API_DYNAMO_DB_TABLE)
				},
			},
			// FunctionName: String,
			Role: getAtt(API_LAMBDA_EXECUTION_ROLE, 'Arn'),
			// Handler: 'index.default',
			// MemorySize: Integer,
			Runtime: 'nodejs8.10',
			// Timeout: Integer,
		},
	},
}
