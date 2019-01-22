import howItWorks from 'sls-aws/src/shared/descriptions/routes/howItWorks'
import termsOfService from 'sls-aws/src/shared/descriptions/routes/termsOfService'
import privacyPolicy from 'sls-aws/src/shared/descriptions/routes/privacyPolicy'
import auth from 'sls-aws/src/shared/descriptions/routes/auth'
import projects from 'sls-aws/src/shared/descriptions/routes/projects'

export default {
	...howItWorks,
	...auth,
	...projects,
	...termsOfService,
	...privacyPolicy,
}
