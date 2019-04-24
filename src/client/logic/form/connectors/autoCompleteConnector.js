import reduxConnector from 'root/src/shared/util/reduxConnector'

import multiFieldValue from 'root/src/client/logic/form/selectors/multiFieldValue'
import arrayFieldMaxItems from 'root/src/client/logic/form/selectors/arrayFieldMaxItems'
import loadOptionsPromise from 'root/src/client/logic/form/selectors/loadOptionsPromise'
import fieldLabel from 'root/src/client/logic/form/selectors/fieldLabel'
import fieldError from 'root/src/client/logic/form/selectors/fieldError'
import fieldHasError from 'root/src/client/logic/form/selectors/fieldHasError'
import fieldPlaceholder from 'root/src/client/logic/form/selectors/fieldPlaceholder'

import setInput from 'root/src/client/logic/form/thunks/setInput'

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
