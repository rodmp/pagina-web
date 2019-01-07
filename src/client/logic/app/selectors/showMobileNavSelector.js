import { not, compose } from 'ramda'

import { appStoreLenses } from 'sls-aws/src/client/logic/app/lenses'

const { viewGtSm } = appStoreLenses

export default compose(
	not,
	viewGtSm,
)
