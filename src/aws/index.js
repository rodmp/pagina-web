import addCognitoPolicies from 'sls-aws/src/aws/util/addCognitoPolicies'

import { cognitoResources, cognitoOutputs } from 'sls-aws/src/aws/cognito'
import { siteBucketResources, siteBucketOutputs } from 'sls-aws/src/aws/siteBucket'
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
		...siteBucketResources,
	},
	Outputs: {
		...cognitoOutputs,
		...apiOutputs,
		...siteBucketOutputs,
	},
}
