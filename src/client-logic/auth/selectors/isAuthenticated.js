import { join } from 'ramda'

import { clientId } from 'sls-aws/slsOutput.json'
import { storageGet } from 'sls-aws/src/util/storage'

const lsKey = join(
	'',
	['CognitoIdentityServiceProvider.', clientId,'.LastAuthUser']
)

export default () => Boolean(storageGet(lsKey))
