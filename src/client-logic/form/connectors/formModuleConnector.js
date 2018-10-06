import reduxConnector from 'sls-aws/src/util/reduxConnector'

import formFieldTypes from 'sls-aws/src/client-logic/form/selectors/formFieldTypes'
import formSubmits from 'sls-aws/src/client-logic/form/selectors/formSubmits'
import moduleKey from 'sls-aws/src/client-logic/route/selectors/moduleKey'

import submitForm from 'sls-aws/src/client-logic/form/thunks/submitForm'

export default reduxConnector(
	[
		['moduleKey', moduleKey],
		['formFieldTypes', formFieldTypes],
		['formSubmits', formSubmits],
	],
	[
		['submitForm', submitForm]
	],
)
