import {
	currentRouteDescriptionHof, test
} from 'sls-aws/src/client-logic/route/selectors/currentRouteDescription'

const mockState = { route: { history: [{ routeId: 'test', routeParams: {} }] } }
const mockState2 = { route: { history: [] } }

const mockRouteDescriptions = { test: { url: '/bar' } }

console.log(currentRouteDescriptionHof(mockRouteDescriptions)(mockState))
console.log(JSON.stringify(test(mockState)))
console.log(JSON.stringify(test(mockState2)))

// const currentRouteDescription = currentRouteDescriptionHof(
// 	mockRouteDescriptions
// )

// describe('currentRouteDescription', () => {
// 	test('works', () => {
// 		expect(
// 			currentRouteDescription(mockState)
// 		).toEqual({ foo: 'bar' })
// 	})
// })
