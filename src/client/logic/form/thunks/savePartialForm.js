import validateForm from 'root/src/client/logic/form/util/validateForm'

import { formStoreLenses } from 'root/src/client/logic/form/lenses'
import submitForm from 'root/src/client/logic/form/actions/submitForm'
import submitFormComplete from 'root/src/client/logic/form/actions/submitFormComplete'
import setFormErrors from 'root/src/client/logic/form/actions/setFormErrors'
import clearForm from 'root/src/client/logic/form/actions/clearForm'
import uuid from 'uuid/v1'

import formSubmits from 'root/src/shared/descriptions/formSubmits'
import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import {
	SAVE_PARTIAL_DARE_FORM,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { pathOrFormInputs } = formStoreLenses

export const savePartialFormHof = () => moduleKey => (dispatch, getState) => {
	const state = getState()
	const formValues = (pathOrFormInputs(moduleKey, {})(state))
	dispatch(apiRequest(SAVE_PARTIAL_DARE_FORM, { ...formValues, id: uuid(), moduleKey }))
}

export default savePartialFormHof(
	submitForm, moduleDescriptions, validateForm, setFormErrors, clearForm,
	submitFormComplete, formSubmits,
)
