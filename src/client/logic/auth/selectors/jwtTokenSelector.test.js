import jwtTokenSelector from 'root/src/client/logic/auth/selectors/jwtTokenSelector'

const mockJwtState = {
	app: {
		authenticated: {
			idToken: {
				jwtToken: 'somecrazytoken',
			},
		},
	},
}

describe('jwtTokenSelector', () => {
	test('undefined if unauthenticated', () => {
		const jwtToken = jwtTokenSelector({})
		expect(jwtToken).toBeUndefined()
	})
	test('returns token from store', () => {
		const jwtToken = jwtTokenSelector(mockJwtState)
		expect(jwtToken).toEqual('somecrazytoken')
	})
})
