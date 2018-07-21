import ref from 'sls-aws/src/aws/util/ref'
import {
	USER_POOL, USER_POOL_CLIENT,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[USER_POOL_CLIENT]: {
		Type: 'AWS::Cognito::UserPoolClient',
		Properties: {
			ClientName: USER_POOL_CLIENT,
			GenerateSecret: false,
			RefreshTokenValidity: 365,
			UserPoolId: ref(USER_POOL)
		}
	}
}

