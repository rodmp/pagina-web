import loginForm from 'sls-aws/src/descriptions/modules/loginForm'
import signUpForm from 'sls-aws/src/descriptions/modules/signUpForm'
import verifyAccountForm from 'sls-aws/src/descriptions/modules/verifyAccountForm'

const allModules = {
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
}

export default allModules
