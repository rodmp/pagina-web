import dashboard from 'sls-aws/src/descriptions/routes/dashboard'
import auth from 'sls-aws/src/descriptions/routes/auth'
console.log({
	...dashboard,
	...auth,
})
export default {
	...dashboard,
	...auth,
}
