import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import formFieldTypes from 'sls-aws/src/client-logic/form/selectors/formFieldTypes'
import formSubmits from 'sls-aws/src/client-logic/form/selectors/formSubmits'
import formTitle from 'sls-aws/src/client-logic/form/selectors/formTitle'
import formSubTitle from 'sls-aws/src/client-logic/form/selectors/formSubTitle'
import formPreSubmitText from 'sls-aws/src/client-logic/form/selectors/formPreSubmitText'
import formPostSubmitText from 'sls-aws/src/client-logic/form/selectors/formPostSubmitText'
import formPreSubmitCaption from 'sls-aws/src/client-logic/form/selectors/formPreSubmitCaption'
import formPostSubmitCaption from 'sls-aws/src/client-logic/form/selectors/formPostSubmitCaption'
import moduleKey from 'sls-aws/src/client-logic/route/selectors/moduleKey'

import submitForm from 'sls-aws/src/client-logic/form/thunks/submitForm'

export default reduxConnector(
	[
		['moduleKey', moduleKey],
		['formFieldTypes', formFieldTypes],
		['formSubmits', formSubmits],
		['formTitle', formTitle],
		['subTitle', formSubTitle],
		['preSubmitText', formPreSubmitText],
		['postSubmitText', formPostSubmitText],
		['preSubmitCaption', formPreSubmitCaption],
		['postSubmitCaption', formPostSubmitCaption],
	],
	[
		['submitForm', submitForm],
	],
)
