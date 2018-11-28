import reduxConnector from 'sls-aws/src/util/reduxConnector'

import setFormStripe from 'sls-aws/src/client-logic/form/actions/setFormStripe'

export default reduxConnector(
	[],
	[['setFormStripe', setFormStripe]],
)
