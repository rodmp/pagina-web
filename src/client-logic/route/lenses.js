import { lensPath, lensProp, compose, prepend, __ } from 'ramda'
import lensesFromSchema from 'sls-aws/src/util/lensesFromSchema'
import { variableSchemaKey } from 'sls-aws/src/util/commonLenses'


export const namespaceKey = 'route'
export const historyKey = 'history'
export const routeIdKey = 'routeId'
export const routeParamsKey = 'routeParams'

export const authKey = 'auth'
export const authValue = 'authenticated'
export const unAuthValue = 'unauthenticated'

export const routeHistoryPath = [namespaceKey, historyKey]

export const routeHistoryLens = lensPath(
	routeHistoryPath
)

export const currentRouteLens = lensPath(
	[...routeHistoryPath, 0]
)

// path regexes
export const regexKey = 'regex'
export const regexKeysKey = 'regexKeys'
export const toPathKey = 'toPath'

export const regexLens = lensProp(regexKey)
export const regexKeysLens = lensProp(regexKeysKey)
export const toPathLens = lensProp(toPathKey)
export const routeIdToPathLens = compose(lensPath, prepend(__, [toPathKey]))

// route constants
export const routeUrlKey = 'url'

export const routeUrlLens = lensProp(routeUrlKey)
export const routeIdUrlLens = compose(lensPath, prepend([routeUrlKey]))

// browser history constants
export const browserHistoryPush = 'push'
export const browserHistoryReplace = 'replace'
export const browserHistorylocationStateKey = 'state'

export const locationStateLens = lensProp(browserHistorylocationStateKey)

export const routeStoreLenses = lensesFromSchema({
	type: 'object',
	properties: {
		route: {
			type: 'object',
			properties: {
				history: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							routeId: { type: 'string' },
							params: {
								type: 'object',
								patternProperties: {
									[variableSchemaKey]: {
										type: 'object',
										properties: {}
									}
								}
							}
						}
					}
				}
			}
		}
	}
})

export const routeDescriptionLenses = lensesFromSchema({
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				url: { type: 'string' },
				title: { type: 'string' },
				authentication: { type: 'string' },
				modules: {
					type: 'array',
					items: { type: 'string' }
				}
			}
		}
	}
})

export const moduleDescriptionLenses = lensesFromSchema({
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				type: { type: 'string' },
			}
		}
	}
})
