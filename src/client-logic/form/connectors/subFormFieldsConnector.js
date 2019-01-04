import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import subFormFieldTypes from 'sls-aws/src/client-logic/form/selectors/subFormFieldTypes'
import subFormCount from 'sls-aws/src/client-logic/form/selectors/subFormCount'

import removeSubForm from 'sls-aws/src/client-logic/form/actions/removeSubForm'

export default reduxConnector(
	[
		['subFormFieldTypes', subFormFieldTypes],
		['subFormCount', subFormCount],
	],
	[
		['removeSubForm', removeSubForm],
	],
)
