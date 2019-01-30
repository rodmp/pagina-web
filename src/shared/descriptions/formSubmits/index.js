import createProjectForm from 'sls-aws/src/shared/descriptions/formSubmits/createProjectForm'
import loginForm from 'sls-aws/src/shared/descriptions/formSubmits/loginForm'
import signUpForm from 'sls-aws/src/shared/descriptions/formSubmits/signUpForm'
import forgotPassword from 'sls-aws/src/shared/descriptions/formSubmits/forgotPassword'
import resetPassword from 'sls-aws/src/shared/descriptions/formSubmits/resetPassword'
import verifyAccountForm from 'sls-aws/src/shared/descriptions/formSubmits/verifyAccountForm'
import createPledgeForm from 'sls-aws/src/shared/descriptions/formSubmits/createPledgeForm'

export default {
	...createProjectForm,
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createPledgeForm,
	...forgotPassword,
	...resetPassword
}
