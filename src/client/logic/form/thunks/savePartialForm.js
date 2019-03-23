import validateForm from 'root/src/client/logic/form/util/validateForm'

import { formStoreLenses } from 'root/src/client/logic/form/lenses'
import submitForm from 'root/src/client/logic/form/actions/submitForm'
import submitFormComplete from 'root/src/client/logic/form/actions/submitFormComplete'
import setFormErrors from 'root/src/client/logic/form/actions/setFormErrors'
import clearForm from 'root/src/client/logic/form/actions/clearForm'
import uuid from 'uuid/v1'
import invokeApiLambda from 'root/src/client/logic/api/util/invokeApiLambda'
import { equals } from 'ramda'

import partialFormDbSaveSuccess from 'root/src/client/logic/form/actions/partialFormDbSaveSuccess'

import formSubmits from 'root/src/shared/descriptions/formSubmits'
import {
	SAVE_PARTIAL_DARE_FORM,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { pathOrFormInputs } = formStoreLenses

export const savePartialFormHof = () => moduleKey => async (dispatch, getState) => {
	const state = getState()
	const formValues = (pathOrFormInputs(moduleKey, {})(state))
	const id = uuid()
	const lambdaRes = await invokeApiLambda(
		SAVE_PARTIAL_DARE_FORM,
		{ ...formValues, id, moduleKey },
		state,
	)
	const { statusCode, body, statusError, generalError } = lambdaRes
	if (equals(statusCode, 200)) {
		dispatch(partialFormDbSaveSuccess(id, moduleKey, body))
	} else {
		// TODO
	}
}

export default savePartialFormHof(
	submitForm, moduleDescriptions, validateForm, setFormErrors, clearForm,
	submitFormComplete, formSubmits,
)
