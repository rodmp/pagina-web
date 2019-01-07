import howItWorks from 'sls-aws/src/shared/descriptions/routes/howItWorks'
import auth from 'sls-aws/src/shared/descriptions/routes/auth'
import projects from 'sls-aws/src/shared/descriptions/routes/projects'

export default {
	...howItWorks,
	...auth,
	...projects,
}
