import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import subFormFieldTypes from 'sls-aws/src/client-logic/form/selectors/subFormFieldTypes'
import fieldLabel from 'sls-aws/src/client-logic/form/selectors/fieldLabel'
import subFormCount from 'sls-aws/src/client-logic/form/selectors/subFormCount'

import addSubForm from 'sls-aws/src/client-logic/form/actions/addSubForm'

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
