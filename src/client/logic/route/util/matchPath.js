import {
	find, view, toPairs, reduce, prop, addIndex, assoc, split, isEmpty,
} from 'ramda'

import { parse } from 'qs'

import routes from 'root/src/shared/descriptions/routes'
import createRouteUrlRegexes from 'root/src/client/logic/route/util/createRouteUrlRegexes'
import {
	regexLens, regexKeysLens, routeIdKey, routeParamsKey, routeQueryKey,
} from 'root/src/client/logic/route/lenses'

export const matchPathHof = (allRoutes) => {
	const routeRegexes = createRouteUrlRegexes(allRoutes)

	return (urlPath) => {
		const splitUrlPath = split(/[#?]/, urlPath)
		const path = prop(0, splitUrlPath)
		const queryString = prop(1, splitUrlPath)
		let foundRouteParams = []
		const foundRoutePair = find(
			(pathRegex) => {
				// Don't try to collapse this fn
				foundRouteParams = view(
					regexLens, prop(1, pathRegex),
				).exec(path)
				return foundRouteParams
			},
			toPairs(routeRegexes),
		)
		if (foundRoutePair) {
			const routeParams = addIndex(reduce)(
				(result, paramKey, i) => {
					const value = prop(i + 1, foundRouteParams)
					return value
						? assoc(prop('name', paramKey), value, result) : result
				},
				{},
				view(regexKeysLens, prop(1, foundRoutePair)),
			)
			const parsedQuery = parse(queryString)

			return {
				[routeIdKey]: prop(0, foundRoutePair),
				[routeParamsKey]: routeParams,
				...(isEmpty(parsedQuery) ? {} : { [routeQueryKey]: { ...parsedQuery } }),
			}
		}
		return undefined
	}
}

export default matchPathHof(routes)
