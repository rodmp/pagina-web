import reduxConnector from 'root/src/shared/util/reduxConnector'

import fieldValue from 'root/src/client/logic/form/selectors/fieldValue'
import fieldMax from 'root/src/client/logic/form/selectors/fieldMax'
import fieldLabel from 'root/src/client/logic/form/selectors/fieldLabel'
import fieldError from 'root/src/client/logic/form/selectors/fieldError'
import fieldHasError from 'root/src/client/logic/form/selectors/fieldHasError'
import fieldPlaceholder from 'root/src/client/logic/form/selectors/fieldPlaceholder'
import fieldMultiline from 'root/src/client/logic/form/selectors/fieldMultiline'

import setInput from 'root/src/client/logic/form/thunks/setInput'

export default reduxConnector(
	[
		['fieldValue', fieldValue],
		['fieldMax', fieldMax],
		['fieldLabel', fieldLabel],
		['fieldError', fieldError],
		['fieldHasError', fieldHasError],
		['fieldPlaceholder', fieldPlaceholder],
		['fieldMultiline', fieldMultiline],
	],
	[['setInput', setInput]],
)
