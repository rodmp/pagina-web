import createStore from 'sls-aws/src/shared/util/createStore'

import initApp from 'sls-aws/src/client-logic/app/thunks/initApp'
import testMediaBreakpoints from 'sls-aws/src/client-logic/app/thunks/testMediaBreakpoints'

// reducers
import authDetermined from 'sls-aws/src/client-logic/app/reducers/authDetermined'
import setMediaBreakpoints from 'sls-aws/src/client-logic/app/reducers/setMediaBreakpoints'
import changeRoute from 'sls-aws/src/client-logic/route/reducers/changeRoute'

// form
import changeInput from 'sls-aws/src/client-logic/form/reducers/changeInput'
import clearFormErrors from 'sls-aws/src/client-logic/form/reducers/clearFormErrors'
import setFormErrors from 'sls-aws/src/client-logic/form/reducers/setFormErrors'
import submitForm from 'sls-aws/src/client-logic/form/reducers/submitForm'
import submitFormComplete from 'sls-aws/src/client-logic/form/reducers/submitFormComplete'
import addSubForm from 'sls-aws/src/client-logic/form/reducers/addSubForm'
import removeSubForm from 'sls-aws/src/client-logic/form/reducers/removeSubForm'

// api
import apiListRequestError from 'sls-aws/src/client-logic/api/reducers/apiListRequestError'
import apiListRequestSuccess from 'sls-aws/src/client-logic/api/reducers/apiListRequestSuccess'
import apiRecordRequestError from 'sls-aws/src/client-logic/api/reducers/apiRecordRequestError'
import apiRecordRequestSuccess from 'sls-aws/src/client-logic/api/reducers/apiRecordRequestSuccess'
import initApiListRequest from 'sls-aws/src/client-logic/api/reducers/initApiListRequest'
import initApiRecordRequest from 'sls-aws/src/client-logic/api/reducers/initApiRecordRequest'
import generalRecordModification from 'sls-aws/src/client-logic/api/reducers/generalRecordModification'

import apiRecordClickActionRequestError from 'sls-aws/src/client-logic/api/reducers/apiRecordClickActionRequestError'
import apiRecordClickActionRequestSuccess from 'sls-aws/src/client-logic/api/reducers/apiRecordClickActionRequestSuccess'
import initApiRecordClickActionRequest from 'sls-aws/src/client-logic/api/reducers/initApiRecordClickActionRequest'

// listeners
import popStateListener from 'sls-aws/src/client-logic/route/listeners/popStateListener'
import windowSizeListener from 'sls-aws/src/client-logic/app/listeners/windowSizeListener'

const store = createStore(
	{
		...authDetermined,
		...setMediaBreakpoints,
		...changeRoute,
		...changeInput,
		...clearFormErrors,
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
