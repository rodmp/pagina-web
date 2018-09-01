import {
	reduce, toPairs, prop, append, path, propEq, assoc, map, assocPath,
	compose, contains,
} from 'ramda'
import { CloudFormation } from 'aws-sdk'
import { green, red } from 'chalk'
import emoji from 'node-emoji'
import ora from 'ora'

import { name } from 'sls-aws/package.json'
import { camelCase } from 'sls-aws/src/util/stringCase'

import cloudformationTemplate from 'sls-aws/src/aws'

const cf = new CloudFormation(awsConfig)

const createStackName = stage => camelCase(`${name}${stage}`)

const noStackError = stage => (
	`Stack with id ${createStackName(stage)} does not exist`
)

export const getLambdaFnResourceEntries = template => (
	reduce((result, [resourceKey, resourceObj]) => {
		if (propEq('Type', 'AWS::Lambda::Function', resourceObj)) {
			return append({
				resourceKey,
				entryPath: path(['Properties', 'Code'], resourceObj),
			}, result)
		}
		return result
	}, [], toPairs(prop('Resources', template)))
)

const inProgressStatus = compose(
	contains('_IN_PROGRESS'),
	prop('StackStatus'),
)
const completeStatus = compose(
	contains('_COMPLETE'),
	prop('StackStatus'),
)
const failedStatus = compose(
	contains('_FAILED'),
	prop('StackStatus'),
)


export const getStackProgress = (spinner, stackName) => new Promise(
	(resolve, reject) => {
		const interval = setInterval(() => {
			cf.describeStacks({ StackName: stackName }).promise().then(
				(res) => {
					console.log('progress', res)
					if (completeStatus(res)) {
						spinner.succeed()
						clearInterval(interval)
						resolve()
					} else if (failedStatus(res)) {
						spinner.fail()
						clearInterval(interval)
						reject(prop('StackStatusReason', res))
					}
					// keep checking
				},
			).catch((err) => {
				spinner.fail()
				clearInterval(interval)
				reject(err.message)
			})
		}, 10000)
	},
)

export const createNewStack = stackName => createCfS3Bucket(stackName).then(
	() => webpackLambdaFns().then((entryArr) => {
		const updatedCft = addZipsToCfTemplate(
			entryArr, cloudformationTemplate,
		)
		const spinner = ora('Creating stack').start()
		// console.log(JSON.stringify(updatedCft, null, 2))
		return cf.createStack({
			StackName: stackName,
			Capabilities: ['CAPABILITY_IAM'],
			TemplateBody: JSON.stringify(updatedCft),
		}).promise().then((res) => {
			console.log('create', res)
			return getStackProgress(spinner, stackName)
		}).catch((err) => {
			spinner.fail()
			return Promise.reject(err)
		})
	}),
)

export const updateExistingStack = (stackName) => {

}

export const deploy = (stage = defaultStage) => {
	const spinner = ora('Checking stack status').start()
	const stackName = createStackName(stage)
	return cf.describeStacks({ StackName: stackName })
		.promise()
		.then(() => {
			spinner.succeed()
			// return updateExistingStack(stage)
		})
		.catch((err) => {
			if (err.message === noStackError(stage)) {
				spinner.succeed()
				return createNewStack(stackName)
			}
			spinner.fail()
			return Promise.reject(err.message)
		})
}

export const remove = (stage = defaultStage) => {

}

const createUpdateCommon = [
	{ title: 'Bundling lambda functions' },
	{ title: 'Updating template' },
	{ title: 'Uploading files to s3' },
]

const create = [
	{ title: 'Creating s3 bucket' },
	...createUpdateCommon,
	{ title: 'Creating stack' },
]

const update = [
	...createUpdateCommon,
	{ title: 'Updating stack' },
]

const remove = [
	{ title: 'Emptying s3 buckets' },
	{ title: 'Deleting stack' },
]

const [,, command, stage] = process.argv

const commands = { deploy, remove }

const boom = emoji.find('collision').emoji
const sad = emoji.find('sob').emoji
commands[command](stage).then(() => {
	console.info(green('Done'), boom, nl)
}).catch((err) => {
	console.info(red('Error'), sad, nl, err, nl)
})


// Statuses

// CREATE_IN_PROGRESS
// CREATE_FAILED
// CREATE_COMPLETE
// ROLLBACK_IN_PROGRESS
// ROLLBACK_FAILED
// ROLLBACK_COMPLETE
// DELETE_IN_PROGRESS
// DELETE_FAILED
// DELETE_COMPLETE
// UPDATE_IN_PROGRESS
// UPDATE_COMPLETE_CLEANUP_IN_PROGRESS
// UPDATE_COMPLETE
// UPDATE_ROLLBACK_IN_PROGRESS
// UPDATE_ROLLBACK_FAILED
// UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS
// UPDATE_ROLLBACK_COMPLETE
// REVIEW_IN_PROGRESS
