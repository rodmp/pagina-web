import createProjectForm from 'sls-aws/src/descriptions/formSubmits/createProjectForm'
import loginForm from 'sls-aws/src/descriptions/formSubmits/loginForm'
import signUpForm from 'sls-aws/src/descriptions/formSubmits/signUpForm'
import verifyAccountForm from 'sls-aws/src/descriptions/formSubmits/verifyAccountForm'

export default {
	...createProjectForm,
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
}
