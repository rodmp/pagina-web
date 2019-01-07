import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import multiFieldValue from 'sls-aws/src/client/logic/form/selectors/multiFieldValue'
import arrayFieldMaxItems from 'sls-aws/src/client/logic/form/selectors/arrayFieldMaxItems'
import loadOptionsPromise from 'sls-aws/src/client/logic/form/selectors/loadOptionsPromise'
import fieldLabel from 'sls-aws/src/client/logic/form/selectors/fieldLabel'
import fieldError from 'sls-aws/src/client/logic/form/selectors/fieldError'
import fieldHasError from 'sls-aws/src/client/logic/form/selectors/fieldHasError'
import fieldPlaceholder from 'sls-aws/src/client/logic/form/selectors/fieldPlaceholder'

import setInput from 'sls-aws/src/client/logic/form/thunks/setInput'

export default reduxConnector(
	[
		['multiFieldValue', multiFieldValue],
		['arrayFieldMaxItems', arrayFieldMaxItems],
		['loadOptionsPromise', loadOptionsPromise],
		['fieldError', fieldError],
		['fieldHasError', fieldHasError],
		['fieldLabel', fieldLabel],
		['fieldPlaceholder', fieldPlaceholder],
	],
	[['setInput', setInput]],
)
