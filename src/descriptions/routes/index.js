import howItWorks from 'sls-aws/src/descriptions/routes/howItWorks'
import auth from 'sls-aws/src/descriptions/routes/auth'
import projects from 'sls-aws/src/descriptions/routes/projects'

export default {
	...howItWorks,
	...auth,
	...projects,
}
