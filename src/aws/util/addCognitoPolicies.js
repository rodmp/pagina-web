import { over, lensPath, concat, compose } from 'ramda'

import {
	COGNITO_AUTH_ROLE, COGNITO_UNAUTH_ROLE,
} from 'sls-aws/src/aws/cognito/resourceIds'

const pathCommon = ['Properties', 'Policies', 0, 'PolicyDocument', 'Statement']

const authPolicyLens = lensPath([COGNITO_AUTH_ROLE, ...pathCommon])

const unAuthPolicyLens = lensPath([COGNITO_UNAUTH_ROLE, ...pathCommon])

export default (cognitoResources, authPolicies, unAuthPolicies) => compose(
	over(authPolicyLens, concat(authPolicies)),
	over(unAuthPolicyLens, concat(unAuthPolicies)),
)(cognitoResources)
