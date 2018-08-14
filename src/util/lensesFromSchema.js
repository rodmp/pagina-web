import {
	__, concat, toPairs, prop, reduce, equals, lensPath, map, set, view,
	compose, either, length, mergeAll, propOr, append, unapply, last, curryN,
	add, subtract, over, pathEq, pathOr, without, dissocPath, not, head, tail,
	pathSatisfies, when, curry,
} from 'ramda'
import { variableSchemaKey } from 'sls-aws/src/util/commonLenses'
import { capitalize } from 'sls-aws/src/util/stringCase'

const argSubstitute = '__'

// Change argument order for some ramda fns
const pathSatisfiesArranged = curry((pathArr, fn, obj) => pathSatisfies(
	fn, pathArr, obj
))
const pathOrArranged = curry((pathArr, fn, obj) => pathOr(fn, pathArr, obj))

const insertArgsIntoPath = (schemaPath, args) => {
	let remainingArgs = args
	return [map(when(equals(argSubstitute), () => {
		const res = head(remainingArgs)
		remainingArgs = tail(remainingArgs)
		return res
	}), schemaPath), remainingArgs]
}

const pathOrLensPath = (path, lens) => (lens ? lensPath(path) : path)

const insertedArgFn = (fn, schemaPath, additionalArgCount, lens) => {
	const varPathCount = subtract(
		length(schemaPath),
		length(without(argSubstitute, schemaPath))
	)
	if (equals(varPathCount, 0)) {
		return fn(pathOrLensPath(schemaPath, lens))
	}
	return curryN(
		add(varPathCount, additionalArgCount),
		unapply((args) => {
			const [insertedArgs, remainingArgs] = insertArgsIntoPath(
				schemaPath, args
			)
			return fn(
				pathOrLensPath(insertedArgs, lens),
				...remainingArgs
			)
		})
	)
}

const createEachLensTypeWithInserts = (baseLensFnKey, schemaPath) => ({
	[concat('view', baseLensFnKey)]: insertedArgFn(view, schemaPath, 1, true),
	[concat('dissocPath', baseLensFnKey)]: insertedArgFn(
		dissocPath, schemaPath, 1
	),
	[concat('set', baseLensFnKey)]: insertedArgFn(set, schemaPath, 2, true),
	[concat('over', baseLensFnKey)]: insertedArgFn(over, schemaPath, 2, true),
	[concat('pathEq', baseLensFnKey)]: insertedArgFn(pathEq, schemaPath, 2),
	[concat('pathOr', baseLensFnKey)]: insertedArgFn(
		pathOrArranged, schemaPath, 2
	),
	[concat('pathSatisfies', baseLensFnKey)]: insertedArgFn(
		pathSatisfiesArranged, schemaPath, 2
	)
})

const functionNamer = (schemaKey, renames = {}, prefix = '') => concat(
	capitalize(prefix),
	capitalize(propOr(schemaKey, schemaKey, renames))
)

const createSchemaLenses = (schema, options = {}, parentPath = []) => reduce(
	(result, [schemaKey, property]) => {
		const { prefix, renames } = options
		const schemaPath = append(schemaKey, parentPath)
		const baseLensFnKey = functionNamer(schemaKey, renames, prefix)
		const propertyType = prop('type', property)
		let extras = []
		if (equals('object', propertyType)) {
			if (equals(variableSchemaKey, schemaKey)) {
				const variableSchemaPath = [...parentPath, argSubstitute]
				const prevSchemaKey = last(parentPath)
				const childLenses = prevSchemaKey ?
					createEachLensTypeWithInserts(
						`${functionNamer(prevSchemaKey, renames, prefix)}Child`,
						variableSchemaPath
					) : {}
				extras = [
					childLenses,
					createSchemaLenses(property, options, variableSchemaPath)
				]
			} else {
				extras = [
					createSchemaLenses(property, options, schemaPath)
				]
			}
		}
		if (equals('array', propertyType)) {
			const variableSchemaPath = [...schemaPath, argSubstitute]
			extras = [
				createEachLensTypeWithInserts(
					`${baseLensFnKey}Item`,
					variableSchemaPath
				),
				createSchemaLenses(property.items, options, variableSchemaPath)
			]
		}
		const schemaEndpoints = not(equals(variableSchemaKey, schemaKey)) ?
			createEachLensTypeWithInserts(baseLensFnKey, schemaPath) : {}
		return mergeAll([
			schemaEndpoints,
			...extras,
			result,
		])
	},
	{},
	compose(
		toPairs,
		either(
			prop('properties'),
			prop('patternProperties'),
		)
	)(schema)
)

export default createSchemaLenses
