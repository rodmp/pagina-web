import ref from 'sls-aws/src/aws/util/ref'

import {
	ADMIN_USER_POOL_GROUP, USER_POOL,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	[ADMIN_USER_POOL_GROUP]: {
		Type: 'AWS::Cognito::UserPoolGroup',
		DependsOn: [
			USER_POOL,
		],
		Properties: {
			GroupName: 'admin',
			// Precedence: Number,
			// RoleArn: String,
			UserPoolId: ref(USER_POOL),
		},
	},
}
