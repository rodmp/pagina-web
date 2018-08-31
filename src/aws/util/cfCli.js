import {
	reduce, toPairs, prop, append, path, propEq, assoc, map, assocPath,
} from 'ramda'
import { CloudFormation } from 'aws-sdk'
import awsConfig from 'aws-config'
import { green, red } from 'chalk'
import webpack from 'webpack'
import emoji from 'node-emoji'
import ora from 'ora'

import { name } from 'sls-aws/package.json'
import { camelCase } from 'sls-aws/src/util/stringCase'
import webpackLambda from 'sls-aws/src/aws/util/webpackLambda'

import cloudformationTemplate from 'sls-aws/src/aws'

const cf = new CloudFormation(awsConfig({
	region: 'us-east-1',
	profile: 'default',
}))

const defaultStage = 'Dev'
const nl = '\n'

const createStackName = stage => camelCase(`${name}${stage}`)

const noStackError = stage => (
	`Stack with id ${createStackName(stage)} does not exist`
)

const createWebpackConf = (entryPath, resourceKey) => assoc(
	'entry',
	entryPath,
	assocPath(['output', 'filename'], `${resourceKey}.js`, webpackLambda)
)

const buildFiles = ({ entryPath, resourceKey }) => new Promise(
	(resolve, reject) => {
		const spinner = ora(`Building ${resourceKey}`).start()
		webpack(
			createWebpackConf(entryPath, resourceKey),
			(err, stats) => {
				if (err || stats.hasErrors()) {
					spinner.fail()
					reject(err)
				}
				spinner.succeed()
				resolve()
			},
		)
	},
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

export const webpackLambdaFns = () => {
	const entryArr = getLambdaFnResourceEntries(cloudformationTemplate)
	return Promise.all(map(buildFiles, entryArr))
}

export const createNewStack = (stage = defaultStage) => (
	webpackLambdaFns().then(() => cf.createStack())
)

export const updateExistingStack = (stage = defaultStage) => {

}

export const getStackProgress = (stage = defaultStage) => {

}

export const deploy = (stage = defaultStage) => {
	const spinner = ora('Checking stack status').start()
	return cf.describeStacks({ StackName: createStackName(stage) })
		.promise()
		.then(() => {
			spinner.succeed()
			// return updateExistingStack(stage)
		})
		.catch((err) => {
			if (err.message === noStackError(stage)) {
				spinner.succeed()
				return createNewStack(stage)
			}
			spinner.fail()
			return Promise.reject(err.message)
		})
}

export const remove = (stage = defaultStage) => {

}

const [,, command, stage] = process.argv

const commands = { deploy, remove }

const boom = emoji.find('collision').emoji
const sad = emoji.find('sob').emoji
commands[command](stage).then(() => {
	console.info(green('Done'), boom, nl)
}).catch((err) => {
	console.info(red('Error'), sad, nl, err, nl)
})