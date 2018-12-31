import reduxConnector from 'sls-aws/src/util/reduxConnector'

import multiFieldValue from 'sls-aws/src/client-logic/form/selectors/multiFieldValue'
import arrayFieldMaxItems from 'sls-aws/src/client-logic/form/selectors/arrayFieldMaxItems'
import fieldLabel from 'sls-aws/src/client-logic/form/selectors/fieldLabel'
import fieldError from 'sls-aws/src/client-logic/form/selectors/fieldError'
import fieldHasError from 'sls-aws/src/client-logic/form/selectors/fieldHasError'

import setInput from 'sls-aws/src/client-logic/form/thunks/setInput'

export default reduxConnector(
	[
		['multiFieldValue', multiFieldValue],
		['arrayFieldMaxItems', arrayFieldMaxItems],
		['fieldError', fieldError],
		['fieldHasError', fieldHasError],
		['fieldLabel', fieldLabel],
	],
	[['setInput', setInput]],
)
