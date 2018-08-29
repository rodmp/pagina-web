import fnBuildPath from 'sls-aws/src/aws/util/fnBuildPath'
import ref from 'sls-aws/src/aws/util/ref'

import {
	API_LAMBDA_FUNCTION, API_LAMBDA_EXECUTION_ROLE,
} from 'sls-aws/src/aws/api/resourceIds'

export default {
	[API_LAMBDA_FUNCTION]: {
		Type: 'AWS::Lambda::Function',
		DependsOn: [
			API_LAMBDA_EXECUTION_ROLE,
		],
		Properties: {
			Code: fnBuildPath('api'),
			// Environment,
			// FunctionName: String,
			Role: ref(API_LAMBDA_EXECUTION_ROLE),
			Handler: 'index.default',
			// MemorySize: Integer,
			Runtime: 'nodejs8.10',
			// Timeout: Integer,
		},
	},
}
