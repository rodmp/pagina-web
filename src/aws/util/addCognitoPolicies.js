import { over, lensPath, concat } from 'ramda'

import {
	COGNITO_AUTH_ROLE,
} from 'sls-aws/src/aws/cognito/resourceIds'

const authPolicyLens = lensPath([
	COGNITO_AUTH_ROLE, 'Properties', 'Policies', 0, 'PolicyDocument',
	'Statement',
])

export default (cognitoResources, authPolicies) => over(
	authPolicyLens,
	concat(authPolicies),
	cognitoResources,
)
