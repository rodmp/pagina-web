import { S3, CloudFormation } from 'aws-sdk'
import { name as packageName } from 'sls-aws/package.json'
import { camelCase, kebabCase } from 'sls-aws/src/util/stringCase'
import awsConf from 'aws-config'
import s3LocalUpload from 's3'
import findRoot from 'find-root'

import webpackLambdaConf from 'sls-aws/src/aws/util/cfCli/webpackLambdaConf'
import getLambdaResourceEntries from 'sls-aws/src/aws/util/cfCli/getLambdaResourceEntries'
import addZipsToCfTemplate from 'sls-aws/src/aws/util/cfCli/addZipsToCfTemplate'

import badTemplateImport from 'sls-aws/src/aws'

export default ({
	name = packageName, stage = 'Dev', template,
	webpackConfig = webpackLambdaConf, profile = 'default',
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
		s3UploadClient: s3LocalUpload.createClient({ s3Client }),
		cloudFormationClient: new CloudFormation(awsCreds),
		buildDir,
		buildPath: `${projectRoot}/${buildDir}`,
	}
}
