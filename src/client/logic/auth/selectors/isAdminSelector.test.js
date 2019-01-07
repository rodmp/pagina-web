import isAdminSelector from 'sls-aws/src/client/logic/auth/selectors/isAdminSelector'

const mockStateNotAdmin = {
	app: {
		authenticated: {
			idToken: {
				payload: {
					'cognito:groups': [],
				},
			},
		},
	},
}

const mockStateAdmin = {
	app: {
		authenticated: {
			idToken: {
				payload: {
					'cognito:groups': ['admin'],
				},
			},
		},
	},
}

describe('isAdminSelector', () => {
	test('true if cognito:groups has admin', () => {
		const isAdmin = isAdminSelector(mockStateAdmin)
		expect(isAdmin).toEqual(true)
	})
	test('false if cognito:groups doesn\'t have admin', () => {
		const isAdmin = isAdminSelector(mockStateNotAdmin)
		expect(isAdmin).toEqual(false)
	})
	test('doesn\'t break if not authenticate', () => {
		const isAdmin = isAdminSelector({})
		expect(isAdmin).toEqual(false)
	})
})
