
import loginForm from 'root/src/shared/descriptions/modules/loginForm'
import signUpForm from 'root/src/shared/descriptions/modules/signUpForm'
import verifyAccountForm from 'root/src/shared/descriptions/modules/verifyAccountForm'
import forgotPassword from 'root/src/shared/descriptions/modules/forgotPassword'
import resetPassword from 'root/src/shared/descriptions/modules/resetPassword'
import createProjectForm from 'root/src/shared/descriptions/modules/createProjectForm'
import viewProject from 'root/src/shared/descriptions/modules/viewProject'
import pendingProjectsList from 'root/src/shared/descriptions/modules/pendingProjectsList'
import activeProjectsList from 'root/src/shared/descriptions/modules/activeProjectsList'
import getFavoritesList from 'root/src/shared/descriptions/modules/getFavoritesList'
import pledgeProjectForm from 'root/src/shared/descriptions/modules/pledgeProjectForm'
import pledgeSuccessPage from 'root/src/shared/descriptions/modules/pledgeSuccessPage'
import howItWorks from 'root/src/shared/descriptions/modules/howItWorks'
import termsOfService from 'root/src/shared/descriptions/modules/termsOfService'
import privacyPolicy from 'root/src/shared/descriptions/modules/privacyPolicy'
import cookiePolicy from 'root/src/shared/descriptions/modules/cookiePolicy'
import copyrightPolicy from 'root/src/shared/descriptions/modules/copyrightPolicy'
import rulesOfUse from 'root/src/shared/descriptions/modules/rulesOfUse'
import accountSettings from 'root/src/shared/descriptions/modules/accountSettings'
import marketplaceBannerHeader from 'root/src/shared/descriptions/modules/marketplaceBannerHeader'
import myProjectsBannerHeader from 'root/src/shared/descriptions/modules/myProjectsBannerHeader'
import howItWorkBannerHeader from 'root/src/shared/descriptions/modules/howItWorkBannerHeader'
import privacyPolicyBannerHeader from 'root/src/shared/descriptions/modules/privacyPolicyBannerHeader'
import cookiePolicyBannerHeader from 'root/src/shared/descriptions/modules/cookiePolicyBannerHeader'
import copyrightPolicyBannerHeader from 'root/src/shared/descriptions/modules/copyrightPolicyBannerHeader'
import termsOfServiceBannerHeader from 'root/src/shared/descriptions/modules/termsOfServiceBannerHeader'
import rulesOfUseBannerHeader from 'root/src/shared/descriptions/modules/rulesOfUseBannerHeader'
import accountSettingsBannerHeader from 'root/src/shared/descriptions/modules/accountSettingsBannerHeader'
import dareCreateSuccess from 'root/src/shared/descriptions/modules/dareCreateSuccess'
import bannerFooterDareAccepted from 'root/src/shared/descriptions/modules/bannerFooterDareAccepted'
import bannerFooterDareRejectConfirmation from 'root/src/shared/descriptions/modules/bannerFooterDareRejectConfirmation'
import bannerFooterDareSuccessCreate from 'root/src/shared/descriptions/modules/bannerFooterDareSuccessCreate'
import twitchOAuth from 'root/src/shared/descriptions/modules/twitchOAuth'
import twitchOAuthFailure from 'root/src/shared/descriptions/modules/twitchOAuthFailure'
import changePasswordAuth from 'root/src/shared/descriptions/modules/changePasswordAuth'
import changePasswordForm from 'root/src/shared/descriptions/modules/changePasswordForm'
import changePasswordSuccess from 'root/src/shared/descriptions/modules/changePasswordSuccess'
import managePaymentForm from 'root/src/shared/descriptions/modules/managePaymentForm'
import managePaymentList from 'root/src/shared/descriptions/modules/managePaymentList'
import steperHeaderModule from 'root/src/shared/descriptions/modules/steperHeaderModule'
import titleHeaderMarketplace from 'root/src/shared/descriptions/modules/titleHeaderMarketplace'
import deliverDareSuccessPage from 'root/src/shared/descriptions/modules/deliverDareSuccessPage'
import myProjectsList from 'root/src/shared/descriptions/modules/myProjectsList'


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
	...getFavoritesList,
	...pledgeProjectForm,
	...pledgeSuccessPage,
	...howItWorks,
	...termsOfService,
	...marketplaceBannerHeader,
	...myProjectsBannerHeader,
	...privacyPolicy,
	...cookiePolicy,
	...copyrightPolicy,
	...rulesOfUse,
	...howItWorkBannerHeader,
	...cookiePolicyBannerHeader,
	...copyrightPolicyBannerHeader,
	...privacyPolicyBannerHeader,
	...termsOfServiceBannerHeader,
	...rulesOfUseBannerHeader,
	...dareCreateSuccess,
	...bannerFooterDareAccepted,
	...bannerFooterDareRejectConfirmation,
	...bannerFooterDareSuccessCreate,
	...accountSettings,
	...accountSettingsBannerHeader,
	...twitchOAuth,
	...twitchOAuthFailure,
	...changePasswordAuth,
	...changePasswordForm,
	...changePasswordSuccess,
	...managePaymentForm,
	...managePaymentList,
	...steperHeaderModule,
	...titleHeaderMarketplace,
	...deliverDareSuccessPage,
	...myProjectsList,
}

export default allModules
