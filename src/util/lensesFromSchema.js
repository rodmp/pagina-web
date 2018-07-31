import R, {
	concat, toPairs, prop, reduce, assoc, merge, mapObjIndexed, prepend, cond,
	always, equals, T, lensPath, map, set, view, identity, replace, toUpper, into,
	compose, addIndex, filter, pipe, head, pair, either, nth, times, length, has,
	mergeAll, path, ifElse, propOr, append, unapply, last, union, curryN, add,
	insert, subtract, over, pathEq, pathOr, takeLast, without
} from 'ramda'
import { variableSchemaKey } from 'sls-aws/src/util/commonLenses'
import { capitalize } from 'sls-aws/src/util/stringCase'

const argSubstitute = '__'

const createEachLensType = (baseLensFnKey, schemaPath) => ({
	[concat('view', baseLensFnKey)]: view(lensPath(schemaPath)),
	[concat('set', baseLensFnKey)]: set(lensPath(schemaPath)),
	[concat('over', baseLensFnKey)]: over(lensPath(schemaPath)),
	[concat('pathEq', baseLensFnKey)]: pathEq(schemaPath),
	[concat('pathOr', baseLensFnKey)]: pathOr(schemaPath),
})

const insertArgsIntoPath = (schemaPath, args) => {
	let argIndexCount = 0
	return map((pathValue) => {
		if (equals(pathValue, argSubstitute)) {
			const res = args[argIndexCount]
			argIndexCount = add(argIndexCount, 1)
			return res
		}
		return pathValue
	}, schemaPath)
}

const insertedArgFn = (fn, schemaPath, otherArgCount, lens) => curryN(
	add(
		subtract(length(schemaPath), length(without(argSubstitute, schemaPath))),
		otherArgCount
	),
	unapply((args) => {
		const insertedArgs = insertArgsIntoPath(schemaPath, args)
		return fn(
			(lens ? lensPath(insertedArgs) : insertedArgs),
			...takeLast(otherArgCount, args)
		)
	})
)

const createEachLensTypeWithInserts = (baseLensFnKey, schemaPath) => ({
	[concat('view', baseLensFnKey)]: insertedArgFn(view, schemaPath, 1, true),
	[concat('set', baseLensFnKey)]: insertedArgFn(set, schemaPath, 2, true),
	[concat('over', baseLensFnKey)]: insertedArgFn(over, schemaPath, 2, true),
	[concat('pathEq', baseLensFnKey)]: insertedArgFn(pathEq, schemaPath, 1),
	[concat('pathOr', baseLensFnKey)]: insertedArgFn(pathOr, schemaPath, 1),
})

const functionNamer = (schemaKey, renames = {}, prefix = '') => concat(
	capitalize(prefix),
	capitalize(
		propOr(schemaKey, schemaKey, renames)
	)
)

const createSchemaLenses = createEachLensTypeFn => (
	schema, options = {}, parentPath = []
) => {
	const createdNestedSchemaLenses = createSchemaLenses(createEachLensTypeFn)
	const createdNestedSchemaLensesInserts = createSchemaLenses(
		createEachLensTypeWithInserts
	)
	return reduce((result, [schemaKey, property]) => {
		const { prefix, renames } = options
		const schemaPath = append(schemaKey, parentPath)
		const baseLensFnKey = functionNamer(schemaKey, renames, prefix)
		const propertyType = prop('type', property)
		let extras = []
		if (equals('object', propertyType)) {
			if (equals(variableSchemaKey, schemaKey)) {
				const variableSchemaPath = [...parentPath, argSubstitute]
				extras = [
					createEachLensTypeWithInserts(
						`${functionNamer(last(parentPath), renames, prefix)}Child`,
						variableSchemaPath
					),
					createdNestedSchemaLenses(
						property, options, variableSchemaPath
					)
				]
			} else {
				extras = [
					createdNestedSchemaLenses(property, options, schemaPath)
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
				createdNestedSchemaLensesInserts(
					property.items, options, variableSchemaPath
				)
			]
		}
		return mergeAll([
			createEachLensTypeWithInserts(baseLensFnKey, schemaPath),
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
	)(schema))
}

export default createSchemaLenses(createEachLensType)
