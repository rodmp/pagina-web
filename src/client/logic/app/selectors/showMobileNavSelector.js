import { not, compose } from 'ramda'

import { appStoreLenses } from 'root/src/client/logic/app/lenses'

const { viewGtSm } = appStoreLenses

export default compose(
	not,
	viewGtSm,
)
