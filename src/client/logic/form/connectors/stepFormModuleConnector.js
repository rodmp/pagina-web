import reduxConnector from 'root/src/shared/util/reduxConnector'

import formSubmits from 'root/src/client/logic/form/selectors/formSubmits'
import stepForms from 'root/src/client/logic/form/selectors/stepForms'
import onLastStep from 'root/src/client/logic/form/selectors/onLastStep'
import onStep from 'root/src/client/logic/form/selectors/onStep'
import onFirstStep from 'root/src/client/logic/form/selectors/onFirstStep'
import stepFormCurrentPage from 'root/src/client/logic/form/selectors/stepFormCurrentPage'

import stepFormNextPage from 'root/src/client/logic/form/actions/stepFormNextPage'
import stepFormPrevPage from 'root/src/client/logic/form/actions/stepFormPrevPage'

import submitForm from 'root/src/client/logic/form/thunks/submitForm'
import savePartialForm from 'root/src/client/logic/form/thunks/savePartialForm'

export default reduxConnector(
	[
		['onLastStep', onLastStep],
		['onStep', onStep],
		['onFirstStep', onFirstStep],
		['stepForms', stepForms],
		['formSubmits', formSubmits],
		['stepFormCurrentPage', stepFormCurrentPage],
	],
	[
		['stepFormNextPage', stepFormNextPage],
		['stepFormPrevPage', stepFormPrevPage],
		['savePartialForm', savePartialForm],
		['submitForm', submitForm],
	],
)
