import { reduce, and, has, is, path, prop } from 'ramda'

const subKey = '$sub'

export default (substitutes, mapArray) => reduce(
	(result, [key, value]) => {
		if (and(is(Object, value), has(subKey))) {
			const subLookup = prop(subKey, value)
			const viewFn = is(Array, subLookup) ? path : prop
			return { ...result, [key]: viewFn(subLookup, substitutes) }
		}
		return { ...result, [key]: value }
	},
	{},
	mapArray,
)
