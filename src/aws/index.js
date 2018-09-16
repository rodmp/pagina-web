import { cognitoResources, cognitoOutputs } from 'sls-aws/src/aws/cognito'
import { apiResources, apiOutputs, apiAuthPolicies } from 'sls-aws/src/aws/api'
import addCognitoPolicies from 'sls-aws/src/aws/util/addCognitoPolicies'

const appendedCognitoResources = addCognitoPolicies(
	cognitoResources,
	[
		...apiAuthPolicies,
	],
)

export default {
	Resources: {
		...appendedCognitoResources,
		...apiResources,
	},
	Outputs: {
		...cognitoOutputs,
		...apiOutputs,
	},
}
