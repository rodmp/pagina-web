import createProjectForm from 'root/src/shared/descriptions/formSubmits/createProjectForm'
import loginForm from 'root/src/shared/descriptions/formSubmits/loginForm'
import signUpForm from 'root/src/shared/descriptions/formSubmits/signUpForm'
import forgotPassword from 'root/src/shared/descriptions/formSubmits/forgotPassword'
import resetPassword from 'root/src/shared/descriptions/formSubmits/resetPassword'
import verifyAccountForm from 'root/src/shared/descriptions/formSubmits/verifyAccountForm'
import createPledgeForm from 'root/src/shared/descriptions/formSubmits/createPledgeForm'
import changePasswordAuth from 'root/src/shared/descriptions/formSubmits/changePasswordAuth'
import changePasswordForm from 'root/src/shared/descriptions/formSubmits/changePasswordForm'
import addPaymentForm from 'root/src/shared/descriptions/formSubmits/addPaymentForm'

export default {
	...createProjectForm,
	...loginForm,
	...signUpForm,
	...verifyAccountForm,
	...createPledgeForm,
	...forgotPassword,
	...resetPassword,
	...changePasswordAuth,
	...changePasswordForm,
	...addPaymentForm,
}
