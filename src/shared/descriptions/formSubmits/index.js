import createProjectForm from 'sls-aws/src/shared/descriptions/formSubmits/createProjectForm'
import loginForm from 'sls-aws/src/shared/descriptions/formSubmits/loginForm'
import signUpForm from 'sls-aws/src/shared/descriptions/formSubmits/signUpForm'
import verifyAccountForm from 'sls-aws/src/shared/descriptions/formSubmits/verifyAccountForm'
import createPledgeForm from 'sls-aws/src/shared/descriptions/formSubmits/createPledgeForm'

export default {
	...createProjectForm,
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createPledgeForm,
}
