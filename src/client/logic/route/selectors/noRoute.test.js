import noRoute from 'root/src/client/logic/route/selectors/noRoute'

const mockState = { route: { history: [{}] } }
const emptyMockState = { route: { } }

describe('changeRoute', () => {
	test('route exists', () => {
		expect(
			noRoute(mockState)
		).toBe(false)
	})
	test('route doesn\'t exist', () => {
		expect(
			noRoute(emptyMockState)
		).toBe(true)
	})
})
