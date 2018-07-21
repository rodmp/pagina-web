import ref from 'sls-aws/src/aws/util/ref'
import getAtt from 'sls-aws/src/aws/util/getAtt'
import {
	IDENTITY_POOL_ROLE_ATTACHMENT, IDENTITY_POOL, COGNITO_AUTH_ROLE,
	COGNITO_UNAUTH_ROLE,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[IDENTITY_POOL_ROLE_ATTACHMENT]: {
		DependsOn: [
			IDENTITY_POOL,
			COGNITO_UNAUTH_ROLE,
			COGNITO_AUTH_ROLE
		],
		Type: 'AWS::Cognito::IdentityPoolRoleAttachment',
		Properties: {
			IdentityPoolId: ref(IDENTITY_POOL),
			Roles: {
				authenticated: getAtt(COGNITO_AUTH_ROLE, 'Arn'),
				unauthenticated: getAtt(COGNITO_UNAUTH_ROLE, 'Arn')
			}
		}
	}
}

