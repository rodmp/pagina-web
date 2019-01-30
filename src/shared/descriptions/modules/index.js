import loginForm from 'sls-aws/src/shared/descriptions/modules/loginForm'
import signUpForm from 'sls-aws/src/shared/descriptions/modules/signUpForm'
import verifyAccountForm from 'sls-aws/src/shared/descriptions/modules/verifyAccountForm'
import createProjectForm from 'sls-aws/src/shared/descriptions/modules/createProjectForm'
import viewProject from 'sls-aws/src/shared/descriptions/modules/viewProject'
import pendingProjectsList from 'sls-aws/src/shared/descriptions/modules/pendingProjectsList'
import activeProjectsList from 'sls-aws/src/shared/descriptions/modules/activeProjectsList'
import pledgeProjectForm from 'sls-aws/src/shared/descriptions/modules/pledgeProjectForm'
import howItWorks from 'sls-aws/src/shared/descriptions/modules/howItWorks'
import termsOfService from 'sls-aws/src/shared/descriptions/modules/termsOfService'
import privacyPolicy from 'sls-aws/src/shared/descriptions/modules/privacyPolicy'
import cookiePolicy from 'sls-aws/src/shared/descriptions/modules/cookiePolicy'
import rulesOfUse from 'sls-aws/src/shared/descriptions/modules/rulesOfUse'
import marketplaceBannerHeader from 'sls-aws/src/shared/descriptions/modules/marketplaceBannerHeader'
import howItWorkBannerHeader from 'sls-aws/src/shared/descriptions/modules/howItWorkBannerHeader'
import privacyPolicyBannerHeader from 'sls-aws/src/shared/descriptions/modules/privacyPolicyBannerHeader'
import cookiePolicyBannerHeader from 'sls-aws/src/shared/descriptions/modules/cookiePolicyBannerHeader'
import termsOfServiceBannerHeader from 'sls-aws/src/shared/descriptions/modules/termsOfServiceBannerHeader'
import rulesOfUseBannerHeader from 'sls-aws/src/shared/descriptions/modules/rulesOfUseBannerHeader'

const allModules = {
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createProjectForm,
	...viewProject,
	...pendingProjectsList,
	...activeProjectsList,
	...pledgeProjectForm,
	...howItWorks,
	...termsOfService,
	...marketplaceBannerHeader,
	...privacyPolicy,
	...cookiePolicy,
	...rulesOfUse,
	...howItWorkBannerHeader,
	...cookiePolicyBannerHeader,
	...privacyPolicyBannerHeader,
	...termsOfServiceBannerHeader,
	...rulesOfUseBannerHeader,
}

export default allModules
