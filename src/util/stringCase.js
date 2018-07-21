import { replace, toUpper } from 'ramda'

export const capitalize = replace(/^./, toUpper)

export const camelCase = str => str.replace(
	/[-_ ]([a-z])/g,
	m => m[1].toUpperCase()
)
