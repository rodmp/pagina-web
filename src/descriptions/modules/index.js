import loginForm from 'sls-aws/src/descriptions/modules/loginForm'
import signUpForm from 'sls-aws/src/descriptions/modules/signUpForm'

const allModules = {
	...loginForm,
	...signUpForm,
}

export default allModules
