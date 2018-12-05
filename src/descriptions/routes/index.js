import dashboard from 'sls-aws/src/descriptions/routes/dashboard'
import auth from 'sls-aws/src/descriptions/routes/auth'
import projects from 'sls-aws/src/descriptions/routes/projects'

export default {
	...dashboard,
	...auth,
	...projects,
}
