import {
	createRouteUrlRegexesHof,
} from 'root/src/client/logic/route/util/createRouteUrlRegexes'

const mockRoutes = {
	ROUTE_ID_1: {},
	ROUTE_ID_2: {},
}

const mockPathToRegexpFN = jest.fn().mockReturnValue('mockRe')
mockPathToRegexpFN.compile = jest.fn().mockReturnValue('mockToPath')

const createRouteUrlRegexes = createRouteUrlRegexesHof(mockPathToRegexpFN)

describe('createRouteUrlRegexes', () => {
	test('Creates object correctly', () => {
		expect(createRouteUrlRegexes(mockRoutes)).toEqual({
			ROUTE_ID_1: {
				regex: 'mockRe', regexKeys: [], toPath: 'mockToPath'
			},
			ROUTE_ID_2: {
				regex: 'mockRe', regexKeys: [], toPath: 'mockToPath'
			},
		})
	})
})
