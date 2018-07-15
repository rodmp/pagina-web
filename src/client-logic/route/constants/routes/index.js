import dashboard from 'sls-aws/src/client-logic/route/constants/routes/dashboard'
import auth from 'sls-aws/src/client-logic/route/constants/routes/auth'

const allRoutes = {
	...dashboard,
	...auth,
}

export default allRoutes
