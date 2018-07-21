import ref from 'sls-aws/src/aws/util/ref'

import {
	USER_POOL, USER_POOL_CLIENT, IDENTITY_POOL,
} from 'sls-aws/src/aws/cognito/resourceIds'

export default {
	USER_POOL: {
		Description: 'User pool ID',
		Value: ref(USER_POOL)
	},
	IDENTITY_POOL: {
		Description: 'Identity pool ID',
		Value: ref(IDENTITY_POOL)
	},
	clientId: {
		Description: 'Client id for the user pool appclient',
		Value: ref(USER_POOL_CLIENT)
	}
}
