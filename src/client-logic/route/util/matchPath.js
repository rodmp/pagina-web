import {
	find, view, toPairs, reduce, prop, addIndex, assoc
} from 'ramda'

import routes from 'sls-aws/src/shared/descriptions/routes'
import createRouteUrlRegexes from 'sls-aws/src/client-logic/route/util/createRouteUrlRegexes'
import {
	regexLens, regexKeysLens, routeIdKey, routeParamsKey,
} from 'sls-aws/src/client-logic/route/lenses'

export const matchPathHof = (allRoutes) => {
	const routeRegexes = createRouteUrlRegexes(allRoutes)

	return (urlPath) => {
		let foundRouteParams = []
		const foundRoutePair = find(
			(pathRegex) => {
				// Don't try to collapse this fn
				foundRouteParams = view(
					regexLens, prop(1, pathRegex)
				).exec(urlPath)
				return foundRouteParams
			},
			toPairs(routeRegexes)
		)
		if (foundRoutePair) {
			const routeParams = addIndex(reduce)(
				(result, paramKey, i) => {
					const value = prop(i + 1, foundRouteParams)
					return value
						? assoc(prop('name', paramKey), value, result) : result
				},
				{},
				view(regexKeysLens, prop(1, foundRoutePair))
			)
			return {
				[routeIdKey]: prop(0, foundRoutePair),
				[routeParamsKey]: routeParams,
			}
		}
		return undefined
	}
}

export default matchPathHof(routes)
