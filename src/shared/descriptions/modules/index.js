import loginForm from 'root/src/shared/descriptions/modules/loginForm'
import signUpForm from 'root/src/shared/descriptions/modules/signUpForm'
import verifyAccountForm from 'root/src/shared/descriptions/modules/verifyAccountForm'
import forgotPassword from 'root/src/shared/descriptions/modules/forgotPassword'
import resetPassword from 'root/src/shared/descriptions/modules/resetPassword'
import createProjectForm from 'root/src/shared/descriptions/modules/createProjectForm'
import viewProject from 'root/src/shared/descriptions/modules/viewProject'
import pendingProjectsList from 'root/src/shared/descriptions/modules/pendingProjectsList'
import activeProjectsList from 'root/src/shared/descriptions/modules/activeProjectsList'
import pledgeProjectForm from 'root/src/shared/descriptions/modules/pledgeProjectForm'
import pledgeSuccessPage from 'root/src/shared/descriptions/modules/pledgeSuccessPage'
import howItWorks from 'root/src/shared/descriptions/modules/howItWorks'
import termsOfService from 'root/src/shared/descriptions/modules/termsOfService'
import privacyPolicy from 'root/src/shared/descriptions/modules/privacyPolicy'
import cookiePolicy from 'root/src/shared/descriptions/modules/cookiePolicy'
import rulesOfUse from 'root/src/shared/descriptions/modules/rulesOfUse'
import accountSettings from 'root/src/shared/descriptions/modules/accountSettings'
import marketplaceBannerHeader from 'root/src/shared/descriptions/modules/marketplaceBannerHeader'
import myProjectsBannerHeader from 'root/src/shared/descriptions/modules/myProjectsBannerHeader'
import howItWorkBannerHeader from 'root/src/shared/descriptions/modules/howItWorkBannerHeader'
import privacyPolicyBannerHeader from 'root/src/shared/descriptions/modules/privacyPolicyBannerHeader'
import cookiePolicyBannerHeader from 'root/src/shared/descriptions/modules/cookiePolicyBannerHeader'
import termsOfServiceBannerHeader from 'root/src/shared/descriptions/modules/termsOfServiceBannerHeader'
import rulesOfUseBannerHeader from 'root/src/shared/descriptions/modules/rulesOfUseBannerHeader'
import accountSettingsBannerHeader from 'root/src/shared/descriptions/modules/accountSettingsBannerHeader'
import dareCreateSuccess from 'root/src/shared/descriptions/modules/dareCreateSuccess'
import bannerFooterDareAccepted from 'root/src/shared/descriptions/modules/bannerFooterDareAccepted'
import bannerFooterDareRejectConfirmation from 'root/src/shared/descriptions/modules/bannerFooterDareRejectConfirmation'
import bannerFooterDareSuccessCreate from 'root/src/shared/descriptions/modules/bannerFooterDareSuccessCreate'
import changePassword from 'root/src/shared/descriptions/modules/changePassword'

const allModules = {
	...loginForm,
	...signUpForm,
	...forgotPassword,
	...resetPassword,
	...verifyAccountForm,
	...createProjectForm,
	...viewProject,
	...pendingProjectsList,
	...activeProjectsList,
	...pledgeProjectForm,
	...pledgeSuccessPage,
	...howItWorks,
	...termsOfService,
	...marketplaceBannerHeader,
	...myProjectsBannerHeader,
	...privacyPolicy,
	...cookiePolicy,
	...rulesOfUse,
	...howItWorkBannerHeader,
	...cookiePolicyBannerHeader,
	...privacyPolicyBannerHeader,
	...termsOfServiceBannerHeader,
	...rulesOfUseBannerHeader,
	...dareCreateSuccess,
	...bannerFooterDareAccepted,
	...bannerFooterDareRejectConfirmation,
	...bannerFooterDareSuccessCreate,
	...accountSettings,
	...accountSettingsBannerHeader,
	...changePassword,
}

export default allModules
