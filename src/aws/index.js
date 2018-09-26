import addCognitoPolicies from 'sls-aws/src/aws/util/addCognitoPolicies'

import { cognitoResources, cognitoOutputs } from 'sls-aws/src/aws/cognito'
import { staticHostingResources, staticHostingOutputs } from 'sls-aws/src/aws/staticHosting'
import {
	apiResources, apiOutputs, apiAuthPolicies, apiUnauthPolicies,
} from 'sls-aws/src/aws/api'

const appendedCognitoResources = addCognitoPolicies(
	cognitoResources,
	[
		...apiAuthPolicies,
	],
	[
		...apiUnauthPolicies,
	],
)

export default {
	Resources: {
		...appendedCognitoResources,
		...apiResources,
		...staticHostingResources,
	},
	Outputs: {
		...cognitoOutputs,
		...apiOutputs,
		...staticHostingOutputs,
	},
}
