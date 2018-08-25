import getAtt from 'sls-aws/src/aws/util/getAtt'
import ref from 'sls-aws/src/aws/util/ref'
import {
	IDENTITY_POOL, USER_POOL_CLIENT, USER_POOL,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[IDENTITY_POOL]: {
		Type: 'AWS::Cognito::IdentityPool',
		Properties: {
			IdentityPoolName: IDENTITY_POOL,
			AllowUnauthenticatedIdentities: true,
			CognitoIdentityProviders: [
				{
					ClientId: ref(USER_POOL_CLIENT),
					ProviderName: getAtt(USER_POOL, 'ProviderName'),
				},
			],
		},
	},
}
