import { __, pathOr, compose, prepend } from 'ramda'

import viewProject from 'sls-aws/src/shared/descriptions/moduleMountActions/viewProject'

const allModules = {
	...viewProject,
}

export default allModules
