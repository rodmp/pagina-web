import reduxConnector from 'root/src/shared/util/reduxConnector'

import subFormFieldTypes from 'root/src/client/logic/form/selectors/subFormFieldTypes'
import subFormCount from 'root/src/client/logic/form/selectors/subFormCount'

import removeSubForm from 'root/src/client/logic/form/actions/removeSubForm'

export default reduxConnector(
	[
		['subFormFieldTypes', subFormFieldTypes],
		['subFormCount', subFormCount],
	],
	[
		['removeSubForm', removeSubForm],
	],
)
