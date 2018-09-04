import { composeP } from 'ramda'

import createS3DeploymentBucket from 'sls-aws/src/aws/util/cfCli/createS3DeploymentBucket'
import createNewStack from 'sls-aws/src/aws/util/cfCli/createNewStack'

import webpack from 'sls-aws/src/aws/util/cfCli/webpack'
import saveCfTemplate from 'sls-aws/src/aws/util/cfCli/saveCfTemplate'
import s3Upload from 'sls-aws/src/aws/util/cfCli/s3Upload'

import updateStack from 'sls-aws/src/aws/util/cfCli/updateStack'

import deleteStack from 'sls-aws/src/aws/util/cfCli/deleteStack'

import getStackProgress from 'sls-aws/src/aws/util/cfCli/getStackProgress'


const createUpdateCommon = [
	{ title: 'Bundling lambda functions', fn: webpack },
	{ title: 'Updating and saving template', fn: saveCfTemplate },
	{ title: 'Uploading files to s3', fn: s3Upload },
]

const create = [
	{ title: 'Creating s3 bucket', fn: createS3DeploymentBucket },
	...createUpdateCommon,
	{
		title: 'Creating stack',
		fn: config => createNewStack(config).then(
			() => getStackProgress(config),
		),
	},
]

const update = [
	...createUpdateCommon,
	{ title: 'Updating stack', fn: composeP(getStackProgress, updateStack) },
]

const remove = [
	{
		title: 'Emptying s3 buckets',
		fn: () => { console.log('havent done this yet') },
	},
	{ title: 'Deleting stack', fn: composeP(getStackProgress, deleteStack) },
]

export default {
	create, update, remove,
}
