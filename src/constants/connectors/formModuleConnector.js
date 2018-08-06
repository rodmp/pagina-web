import reduxConnector from 'sls-aws/src/util/reduxConnector'

import formFieldTypes from 'sls-aws/src/client-logic/form/selectors/formFieldTypes'

export default reduxConnector(
	[['formFieldTypes', formFieldTypes]]
)
