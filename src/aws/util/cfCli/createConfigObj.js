import { S3, CloudFormation } from 'aws-sdk'
import { name as packageName, awsAdminProfile } from 'root/appConfig.json'
import { camelCase, kebabCase } from 'root/src/shared/util/stringCase'
import awsConf from 'aws-config'
import findRoot from 'find-root'

import webpackLambdaConf from 'root/src/aws/util/cfCli/webpackLambdaConf'
import getLambdaResourceEntries from 'root/src/aws/util/cfCli/getLambdaResourceEntries'
import addZipsToCfTemplate from 'root/src/aws/util/cfCli/addZipsToCfTemplate'

import badTemplateImport from 'root/src/aws'

export default ({
	name = packageName, stage = 'Dev', template,
	webpackConfig = webpackLambdaConf,
	profile = awsAdminProfile, // @TODO profile option not working
	region = 'us-east-1', buildDir = '.cloudFormation',
}) => {
	const awsCreds = awsConf({ region, profile })
	const timeStamp = Date.now()
	const s3Client = new S3(awsCreds)
	const projectRoot = findRoot(process.cwd())
	const srcCloudFormationTemplate = badTemplateImport

	const lambdaResourceEntries = getLambdaResourceEntries({
		cloudFormationTemplate: srcCloudFormationTemplate,
		timeStamp,
	})
	const s3DeploymentBucket = kebabCase(`${name}DeploymentBucket`)

	const templateFileName = `template_${timeStamp}.json`
	const templateUrl = (
		`https://${s3DeploymentBucket}.s3.amazonaws.com/${templateFileName}`
	)

	return {
		templateFileNameLocal: 'template.json',
		templateFileName,
		templateUrl,
		s3DeploymentBucket,
		stackName: camelCase(`${name}${stage}`),
		srcCloudFormationTemplate,
		finalCloudFormationTemplate: addZipsToCfTemplate({
			lambdaResourceEntries,
			srcCloudFormationTemplate,
			s3DeploymentBucket,
		}),
		lambdaResourceEntries,
		webpackConfig,
		s3Client,
		cloudFormationClient: new CloudFormation(awsCreds),
		projectRoot,
		buildDir,
		buildPath: `${projectRoot}/${buildDir}`,
		outputPath: 'cfOutput.js',
	}
}
