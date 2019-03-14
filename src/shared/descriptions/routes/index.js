import howItWorks from 'root/src/shared/descriptions/routes/howItWorks'
import termsOfService from 'root/src/shared/descriptions/routes/termsOfService'
import privacyPolicy from 'root/src/shared/descriptions/routes/privacyPolicy'
import cookiePolicy from 'root/src/shared/descriptions/routes/cookiePolicy'
import copyrightPolicy from 'root/src/shared/descriptions/routes/copyrightPolicy'
import rulesOfUse from 'root/src/shared/descriptions/routes/rulesOfUse'
import auth from 'root/src/shared/descriptions/routes/auth'
import projects from 'root/src/shared/descriptions/routes/projects'
import accountSettings from 'root/src/shared/descriptions/routes/accountSettings'
import dareCreateSuccess from 'root/src/shared/descriptions/routes/dareCreateSuccess';

export default {
	...howItWorks,
	...auth,
	...projects,
	...termsOfService,
	...privacyPolicy,
	...cookiePolicy,
	...copyrightPolicy,
	...rulesOfUse,
	...accountSettings,
	...dareCreateSuccess,
}
