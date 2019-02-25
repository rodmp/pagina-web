import { contains } from 'ramda'

import { appStoreLenses } from 'root/src/client/logic/app/lenses'

export default state => contains(
	'admin',
	appStoreLenses['pathOrCognito:groups']([], state),
)
