import dashboard from 'sls-aws/src/descriptions/routes/dashboard'
import auth from 'sls-aws/src/descriptions/routes/auth'

const allRoutes = {
	...dashboard,
	...auth,
}

export default allRoutes
