import reduxConnector from 'sls-aws/src/util/reduxConnector'

import formFieldTypes from 'sls-aws/src/client-logic/form/selectors/formFieldTypes'
import moduleKey from 'sls-aws/src/client-logic/route/selectors/moduleKey'

export default reduxConnector(
	[
		['moduleKey', moduleKey],
		['formFieldTypes', formFieldTypes]
	],
)