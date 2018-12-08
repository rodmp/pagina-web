import { __, pathOr, compose, prepend } from 'ramda'

import viewProject from 'sls-aws/src/descriptions/moduleMountActions/viewProject'

const allModules = {
	...viewProject,
}

export default allModules

export const pathOrOnEnterActions = compose(
	pathOr([], __, allModules),
	prepend(__, ['onEnterActions']),
)
export const pathOrOnExitActions = compose(
	pathOr([], __, allModules),
	prepend(__, ['onExitActions']),
)
