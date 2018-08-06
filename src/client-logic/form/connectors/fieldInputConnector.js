import reduxConnector from 'sls-aws/src/util/reduxConnector'

import formFieldTypes from 'sls-aws/src/client-logic/form/selectors/formFieldTypes'
import setInput from 'sls-aws/src/client-logic/form/thunks/setInput'

export default reduxConnector(
	[],
	[['setInput', setInput]]
)
