import pathToRegexp from 'path-to-regexp'
import { assoc, toPairs, reduce, view, path, compose, memoizeWith } from 'ramda'

import {
	regexKey, regexKeysKey, toPathKey, routeUrlLens,
} from 'sls-aws/src/client/logic/route/lenses'

export const createRouteUrlRegexesHof = memoizeWith(
	compose(path([0, 0]), toPairs),
	(pathToRegexpFn) => (allRoutes) => reduce(
		(results, [routeId, routeDesc]) => {
			const url = view(routeUrlLens, routeDesc)
			const keys = []
			const regex = pathToRegexpFn(url, keys)
			return assoc(
				routeId,
				{
					[regexKey]: regex,
					[regexKeysKey]: keys,
					[toPathKey]: pathToRegexpFn.compile(url),
				},
				results
			)
		},
		{},
		toPairs(allRoutes)
	)
)

export default createRouteUrlRegexesHof(pathToRegexp)
