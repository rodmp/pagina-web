import dashboard from 'sls-aws/src/descriptions/routes/dashboard'
import auth from 'sls-aws/src/descriptions/routes/auth'
import createProject from 'sls-aws/src/descriptions/routes/createProject'

export default {
	...dashboard,
	...auth,
	...createProject,
}
