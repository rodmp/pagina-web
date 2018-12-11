import { __, pathOr, compose, prepend } from 'ramda'

import viewProject from 'sls-aws/src/descriptions/moduleMountActions/viewProject'

const allModules = {
	...viewProject,
}

export default allModules
