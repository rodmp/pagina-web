import { lensPath, lensProp, compose, prepend, __, prop } from 'ramda'
import lensesFromSchema from 'root/src/shared/util/lensesFromSchema'
import { variableSchemaKey } from 'root/src/shared/util/commonLenses'


export const currentRouteIndex = 0

export const routeIdKey = 'routeId'
export const routeParamsKey = 'routeParams'
export const routeQueryKey = 'query'

export const authKey = 'authentication'
export const authValue = 'authenticated'
export const unAuthValue = 'notAuthenticated'

// path regexes
export const regexKey = 'regex'
export const regexKeysKey = 'regexKeys'
export const toPathKey = 'toPath'

export const regexLens = lensProp(regexKey)
export const regexKeysLens = lensProp(regexKeysKey)
export const toPathLens = lensProp(toPathKey)
export const routeIdToPathLens = compose(lensPath, prepend(__, [toPathKey]))
export const recordIdProp = prop('recordId')

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
							routeParams: {
								type: 'object',
								patternProperties: {
									[variableSchemaKey]: {
										type: 'object',
										properties: {},
									},
								},
							},
							routeQuery: {
								type: 'object',
								patternProperties: {
									[variableSchemaKey]: {
										type: 'object',
										properties: {},
									},
								},
							},
						},
					},
				},
			},
		},
	},
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
					items: { type: 'string' },
				},
			},
		},
	},
})

export const moduleIdProp = prop('moduleId')
export const moduleIndexProp = prop('moduleIndex')

export const moduleDescriptionLenses = lensesFromSchema({
	type: 'object',
	patternProperties: {
		[variableSchemaKey]: {
			type: 'object',
			properties: {
				moduleType: { type: 'string' },
				onEnterActions: { type: 'array' },
				onExitActions: { type: 'array' },
			},
		},
	},
})
