import R, {
	concat, toPairs, prop, reduce, assoc, merge, mapObjIndexed, prepend, cond,
	always, equals, T, lensPath, map, set, view, identity, replace, toUpper, into,
	compose, addIndex, filter, pipe, head, pair, either, nth, times, length, has,
	mergeAll, path, ifElse, propOr, append, unapply, last, union
} from 'ramda'
import { variableSchemaKey } from 'sls-aws/src/util/commonLenses'
import { capitalize } from 'sls-aws/src/util/stringCase'


const createEachLensType = (baseLensFnKey, schemaPath) => map(lensFn => ({
	[concat(lensFn, baseLensFnKey)]: R[lensFn](
		lensPath(schemaPath)
	)
	// [concat(lensFn, baseLensFnKey)]: schemaPath
}), ['view'])
// }), ['view', 'set', 'over'])

const createEachLensTypeWithInserts = (baseLensFnKey, schemaPath) => map(
	lensFn => ({
		[concat(lensFn, baseLensFnKey)]: unapply((args) => {
			const substitutedSchemaPath = addIndex(map)((key, i) => {
				if (equals(key, '__')) {
					return args[i - 1]
				}
				return key
			}, schemaPath)
			return R[lensFn](lensPath(substitutedSchemaPath), last(args))
		})
	}), ['view']
)

const createSchemaLenses = createEachLensTypeFn => (
	namespace, schema, options = {}, parentPath = []
) => {
	const createdNestedSchemaLenses = createSchemaLenses(createEachLensTypeFn)
	const createdNestedSchemaLensesInserts = createSchemaLenses(
		createEachLensTypeWithInserts
	)
	return reduce((result, [schemaKey, property]) => {
		const { renames } = options
		const baseLensFnKey = concat(
			capitalize(namespace),
			capitalize(
				propOr(schemaKey, schemaKey, renames)
			)
		)
		const schemaPath = append(schemaKey, parentPath)
		// console.log(schemaPath)
		const propertyType = prop('type', property)
		let extras = []
		if (equals('object', propertyType)) {
			if (equals(variableSchemaKey, schemaKey)) {
				const variableSchemaPath = [...parentPath, '__']
				console.log(variableSchemaPath)
				extras = union(
					extras,
					createEachLensTypeWithInserts(
						'Test' + capitalize(last(parentPath)) + 'Child',
						variableSchemaPath
					)
				)
				extras.push(
					createdNestedSchemaLenses(
						namespace, property, options, variableSchemaPath
					)
				)
			} else {
				extras.push(
					createdNestedSchemaLenses(
						namespace, property, options, schemaPath
					)
				)
			}
		}
		if (equals('array', propertyType)) {
			const variableSchemaPath = [...schemaPath, '__']
			extras.push(
				createdNestedSchemaLensesInserts(
					namespace, property.items, options, variableSchemaPath
				)
			)
			extras = union(
				extras,
				createEachLensTypeWithInserts(
					baseLensFnKey + 'Item',
					variableSchemaPath
				)
			)
		}
		return mergeAll([
			...createEachLensTypeWithInserts(baseLensFnKey, schemaPath),
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
