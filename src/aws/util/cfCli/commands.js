import { composeP } from 'ramda'

import createS3DeploymentBucket from 'sls-aws/src/aws/util/cfCli/createS3DeploymentBucket'
import createNewStack from 'sls-aws/src/aws/util/cfCli/createNewStack'

import webpackLambda from 'sls-aws/src/aws/util/cfCli/webpackLambda'
import saveCfTemplate from 'sls-aws/src/aws/util/cfCli/saveCfTemplate'
import s3Upload from 'sls-aws/src/aws/util/cfCli/s3Upload'

import updateStack from 'sls-aws/src/aws/util/cfCli/updateStack'
import validateTemplate from 'sls-aws/src/aws/util/cfCli/validateTemplate'

import emptyDeleteBuckets from 'sls-aws/src/aws/util/cfCli/emptyDeleteBuckets'
import deleteStack from 'sls-aws/src/aws/util/cfCli/deleteStack'

import getStackProgress from 'sls-aws/src/aws/util/cfCli/getStackProgress'
import saveStackOutputs from 'sls-aws/src/aws/util/cfCli/saveStackOutputs'

import uploadStatics from 'sls-aws/src/aws/util/cfCli/uploadStatics'

const afterCreateOrUpdate = [
	{
		title: 'Waiting for stack to complete',
		fn: getStackProgress,
	},
	{ title: 'Saving stack output', fn: saveStackOutputs },
	{ title: 'Uploading statics', fn: uploadStatics },
]

const createUpdateCommon = [
	{ title: 'Bundling lambda functions', fn: webpackLambda },
	{ title: 'Updating and saving template', fn: saveCfTemplate },
	{ title: 'Uploading files to s3', fn: s3Upload },
	{ title: 'Validating template', fn: validateTemplate },
]

const create = [
	{ title: 'Creating s3 bucket', fn: createS3DeploymentBucket },
	...createUpdateCommon,
	{ title: 'Creating stack', fn: createNewStack },
	...afterCreateOrUpdate,
]

const update = [
	...createUpdateCommon,
	{ title: 'Updating stack', fn: updateStack },
	...afterCreateOrUpdate,
]

const remove = [
	{ title: 'Emptying s3 buckets', fn: emptyDeleteBuckets },
	{ title: 'Deleting stack', fn: deleteStack },
	{ title: 'Delete processing...', fn: getStackProgress },
]

const outputs = [
	{ title: 'Saving stack output', fn: saveStackOutputs },
]

export default {
	create, update, remove, outputs,
}
