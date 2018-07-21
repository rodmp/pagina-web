import { cognitoResources, cognitoOutputs } from 'sls-aws/src/aws/cognito'

// export default {
// 	Parameters: {

// 	},
// 	Resources: {
// 		...cognitoResources
// 	},
// 	Outputs: {
// 		...cognitoOutputs,
// 	},
// 	AWSTemplateFormatVersion: '2010-09-09',
// }

export default {
	service: {
		name: 'sls-aws-test',
	},
	provider: {
		name: 'aws',
		runtime: 'nodejs8.10',
	},
	plugins: [
		'serverless-stack-output',
	],
	custom: {
		output: {
			file: 'slsOutput.json',
		},
	},
	resources: {
		Resources: {
			...cognitoResources
		},
		Outputs: {
			...cognitoOutputs,
		},
	},
}
