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
	assocPath(['output', 'filename'], `${resourceKey}.js`, webpackLambda),
)

const addZipsToCfTemplate = (entryArr, cft) => reduce(
	(result, { resourceKey }) => assocPath(
		['Resources', resourceKey, 'Properties', 'Code'],
		{ Zip: `./.webpack/${resourceKey}.zip` },
		result,
	),
	cft,
	entryArr,
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
	return Promise.all(map(buildFiles, entryArr)).then(() => entryArr)
}

export const getStackProgress = (spinner, stackName) => new Promise(
	(resolve, reject) => {
		const interval = setInterval(() => {
			cf.describeStacks({ StackName: stackName }).promise().then(
				(res) => {
					console.log(res)
					// if (STACK_FINISHED) {
					// 	spinner.succeed()
					// 	clearInterval(interval)
					// 	resolve()
					// }
				},
			).catch((err) => {
				spinner.fail()
				clearInterval(interval)
				reject(err.message)
			})
		}, 5000)
	},
)

export const createNewStack = stackName => (
	webpackLambdaFns().then((entryArr) => {
		const updatedCft = addZipsToCfTemplate(
			entryArr, cloudformationTemplate,
		)
		const spinner = ora('Creating stack').start()
		// console.log(JSON.stringify(updatedCft, null, 2))
		return cf.createStack({
			StackName: stackName,
			TemplateBody: JSON.stringify(updatedCft),
		}).promise().then((res) => {
			spinner.succeed()
			console.log(res)
			return res
		}).catch((err) => {
			spinner.fail()
			return Promise.reject(err)
		})
	})
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

const [,, command, stage] = process.argv

const commands = { deploy, remove }

const boom = emoji.find('collision').emoji
const sad = emoji.find('sob').emoji
commands[command](stage).then(() => {
	console.info(green('Done'), boom, nl)
}).catch((err) => {
	console.info(red('Error'), sad, nl, err, nl)
})
