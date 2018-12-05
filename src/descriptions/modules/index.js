import loginForm from 'sls-aws/src/descriptions/modules/loginForm'
import signUpForm from 'sls-aws/src/descriptions/modules/signUpForm'
import verifyAccountForm from 'sls-aws/src/descriptions/modules/verifyAccountForm'
import createProjectForm from 'sls-aws/src/descriptions/modules/createProjectForm'
import viewProject from 'sls-aws/src/descriptions/modules/viewProject'

const allModules = {
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createProjectForm,
	...viewProject,
}

export default allModules
