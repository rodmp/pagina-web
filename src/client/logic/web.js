import createStore from 'root/src/shared/util/createStore'

import initApp from 'root/src/client/logic/app/thunks/initApp'
import testMediaBreakpoints from 'root/src/client/logic/app/thunks/testMediaBreakpoints'

// reducers
import authDetermined from 'root/src/client/logic/app/reducers/authDetermined'
import setMediaBreakpoints from 'root/src/client/logic/app/reducers/setMediaBreakpoints'
import changeRoute from 'root/src/client/logic/route/reducers/changeRoute'

// form
import changeInput from 'root/src/client/logic/form/reducers/changeInput'
import clearFormErrors from 'root/src/client/logic/form/reducers/clearFormErrors'
import clearForm from 'root/src/client/logic/form/reducers/clearForm'
import setFormErrors from 'root/src/client/logic/form/reducers/setFormErrors'
import submitForm from 'root/src/client/logic/form/reducers/submitForm'
import submitFormComplete from 'root/src/client/logic/form/reducers/submitFormComplete'
import addSubForm from 'root/src/client/logic/form/reducers/addSubForm'
import removeSubForm from 'root/src/client/logic/form/reducers/removeSubForm'
import stepFormNextPage from 'root/src/client/logic/form/reducers/stepFormNextPage'
import stepFormPrevPage from 'root/src/client/logic/form/reducers/stepFormPrevPage'

// api
import apiListRequestError from 'root/src/client/logic/api/reducers/apiListRequestError'
import apiListRequestSuccess from 'root/src/client/logic/api/reducers/apiListRequestSuccess'
import apiRecordRequestError from 'root/src/client/logic/api/reducers/apiRecordRequestError'
import apiRecordRequestSuccess from 'root/src/client/logic/api/reducers/apiRecordRequestSuccess'
import initApiListRequest from 'root/src/client/logic/api/reducers/initApiListRequest'
import initApiRecordRequest from 'root/src/client/logic/api/reducers/initApiRecordRequest'
import generalRecordModification from 'root/src/client/logic/api/reducers/generalRecordModification'

import apiRecordClickActionRequestError from 'root/src/client/logic/api/reducers/apiRecordClickActionRequestError'
import apiRecordClickActionRequestSuccess from 'root/src/client/logic/api/reducers/apiRecordClickActionRequestSuccess'
import initApiRecordClickActionRequest from 'root/src/client/logic/api/reducers/initApiRecordClickActionRequest'

// listeners
import popStateListener from 'root/src/client/logic/route/listeners/popStateListener'
import windowSizeListener from 'root/src/client/logic/app/listeners/windowSizeListener'

const store = createStore(
	{
		...authDetermined,
		...setMediaBreakpoints,
		...changeRoute,
		...changeInput,
		...stepFormNextPage,
		...stepFormPrevPage,
		...clearFormErrors,
		...clearForm,
		...setFormErrors,
		...submitForm,
		...submitFormComplete,
		...addSubForm,
		...removeSubForm,
		...apiListRequestError,
		...apiListRequestSuccess,
		...apiRecordRequestError,
		...apiRecordRequestSuccess,
		...initApiListRequest,
		...initApiRecordRequest,
		...apiRecordClickActionRequestError,
		...apiRecordClickActionRequestSuccess,
		...initApiRecordClickActionRequest,
		...generalRecordModification,
	}, // reducer object
	// [], // sagas
	[
		popStateListener,
		windowSizeListener,
	], // listeners
	{}, // initial state
	[
		initApp,
		testMediaBreakpoints,
	],
)

export default store
