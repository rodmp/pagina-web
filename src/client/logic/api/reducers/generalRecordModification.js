import { reduce, map, contains, lensPath, set, prop, tail } from 'ramda'
import { GENERAL_RECORD_MODIFICATION } from 'root/src/client/logic/api/actionIds'

const subMethods = {
	set,
}

export const generalRecordModification = (
	state, { subs, updates },
) => reduce(
	(result, { modification, path, value }) => {
		const finalPath = [
			'api',
			'records',
			...map((pathItem) => {
				if (contains(':', pathItem)) {
					const subKey = tail(pathItem)
					return prop(subKey, subs)
				}
				return pathItem
			}, path),
		]
		return prop(modification, subMethods)(
			lensPath(finalPath), value, result,
		)
	},
	state,
	updates,
)

export default {
	[GENERAL_RECORD_MODIFICATION]: generalRecordModification,
}
