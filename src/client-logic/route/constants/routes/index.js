import dashboard from 'sls-aws/src/client-logic/route/constants/routes/dashboard'
import auth from 'sls-aws/src/client-logic/route/constants/routes/auth'

const allRoutes = {
	...dashboard,
	...auth,
	TEST_ROUTE_1: {
		url: '/test-route-1'
	},
	TEST_ROUTE_2: {
		url: '/test-route-2'
	},
	TEST_ROUTE_3: {
		url: '/test-route-3'
	},
}

export default allRoutes
