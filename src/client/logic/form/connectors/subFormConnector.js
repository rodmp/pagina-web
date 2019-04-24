import reduxConnector from 'root/src/shared/util/reduxConnector'

import subFormFieldTypes from 'root/src/client/logic/form/selectors/subFormFieldTypes'
import fieldLabel from 'root/src/client/logic/form/selectors/fieldLabel'
import subFormCount from 'root/src/client/logic/form/selectors/subFormCount'

import addSubForm from 'root/src/client/logic/form/actions/addSubForm'

export default reduxConnector(
	[
		['fieldLabel', fieldLabel],
		['subFormFieldTypes', subFormFieldTypes],
		['subFormCount', subFormCount],
	],
	[
		['addSubForm', addSubForm],
	],
)
