import createProjectForm from 'sls-aws/src/descriptions/formSubmits/createProjectForm'
import loginForm from 'sls-aws/src/descriptions/formSubmits/loginForm'
import signUpForm from 'sls-aws/src/descriptions/formSubmits/signUpForm'
import verifyAccountForm from 'sls-aws/src/descriptions/formSubmits/verifyAccountForm'
import createPledgeForm from 'sls-aws/src/descriptions/formSubmits/createPledgeForm'

export default {
	...createProjectForm,
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createPledgeForm,
}
