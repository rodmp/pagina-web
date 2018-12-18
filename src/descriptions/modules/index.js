import loginForm from 'sls-aws/src/descriptions/modules/loginForm'
import signUpForm from 'sls-aws/src/descriptions/modules/signUpForm'
import verifyAccountForm from 'sls-aws/src/descriptions/modules/verifyAccountForm'
import createProjectForm from 'sls-aws/src/descriptions/modules/createProjectForm'
import viewProject from 'sls-aws/src/descriptions/modules/viewProject'
import pendingProjectsList from 'sls-aws/src/descriptions/modules/pendingProjectsList'
import activeProjectsList from 'sls-aws/src/descriptions/modules/activeProjectsList'
import pledgeProjectForm from 'sls-aws/src/descriptions/modules/pledgeProjectForm'

const allModules = {
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createProjectForm,
	...viewProject,
	...pendingProjectsList,
	...activeProjectsList,
	...pledgeProjectForm,
}

export default allModules
