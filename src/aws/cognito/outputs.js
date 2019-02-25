import ref from 'root/src/aws/util/ref'

import {
	USER_POOL, USER_POOL_CLIENT, IDENTITY_POOL,
} from 'root/src/aws/cognito/resourceIds'

import {
	IDENTITY_POOL_ID, CLIENT_ID, USER_POOL_ID,
} from 'root/src/aws/cognito/outputIds'

export default {
	[USER_POOL_ID]: {
		Description: 'User pool ID',
		Value: ref(USER_POOL),
	},
	[IDENTITY_POOL_ID]: {
		Description: 'Identity pool ID',
		Value: ref(IDENTITY_POOL),
	},
	[CLIENT_ID]: {
		Description: 'Client id for the user pool appclient',
		Value: ref(USER_POOL_CLIENT),
	},
}
