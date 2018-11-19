import reduxConnector from 'sls-aws/src/util/reduxConnector'

import subFormFieldTypes from 'sls-aws/src/client-logic/form/selectors/subFormFieldTypes'

import setInput from 'sls-aws/src/client-logic/form/thunks/setInput'

export default reduxConnector(
	[
		['subFormFieldTypes', subFormFieldTypes],
	],
	[['setInput', setInput]],
)
