import {
	currentRouteDescriptionHof,
} from 'root/src/client/logic/route/selectors/currentRouteDescription'

const mockState = { route: { history: [{ routeId: 'test', routeParams: {} }] } }
// const mockState2 = { route: { history: [] } }

const mockRouteDescriptions = { test: { url: '/bar' } }


const currentRouteDescription = currentRouteDescriptionHof(
	mockRouteDescriptions,
)

describe('currentRouteDescription', () => {
	test('works', () => {
		expect(
			currentRouteDescription(mockState),
		).toEqual({ url: '/bar' })
	})
})
