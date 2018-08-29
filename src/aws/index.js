import { cognitoResources, cognitoOutputs } from 'sls-aws/src/aws/cognito'
import { apiResources, apiOutputs } from 'sls-aws/src/aws/api'

export default {
	service: {
		name: 'sls-aws-test',
	},
	package: {
		individually: true,
	},
	provider: {
		name: 'aws',
		runtime: 'nodejs8.10',
	},
	plugins: [
		'serverless-stack-output',
		'serverless-webpack',
	],
	custom: {
		output: {
			file: 'slsOutput.json',
		},
		webpack: {
			webpackConfig: 'webpack.lambda.config.js',
			packager: 'yarn',
		},
	},
	resources: {
		Resources: {
			...cognitoResources,
			...apiResources,
		},
		Outputs: {
			...cognitoOutputs,
			...apiOutputs,
		},
	},
}
