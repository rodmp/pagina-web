import {
	concat, toPairs, prop, reduce, assoc, merge, mapObjIndexed, prepend, cond,
	always, equals, T, lensPath, map, set, view
} from 'ramda'
import { capitalize } from 'sls-aws/src/util/stringCase'

const createSchema = (namespace, schema) => (
	reduce((result, [schemaKey, property]) => cond([
		[equals('object'), always(
			merge(
				mapObjIndexed(
					prepend(schemaKey),
					createSchema(namespace, property)
				),
				result
			)
		)],
		[T, always(
			assoc(
				concat(namespace, capitalize(schemaKey)),
				[schemaKey],
				result
			)
		)]
	])(prop('type', property)), {}, toPairs(prop('properties',schema)))
)

const lensesFromSchema = (namespace, schema) => map(
	path => ({
		view: view(lensPath(path)),
		set: set(lensPath(path))
	}),
	createSchema(namespace, schema)
)

export default lensesFromSchema
