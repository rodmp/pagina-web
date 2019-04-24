import { reduce, assocPath, compose } from 'ramda'

export default ({
	lambdaResourceEntries, srcCloudFormationTemplate, s3DeploymentBucket,
}) => reduce(
	(result, { resourceKey, s3Key }) => compose(
		assocPath(
			['Resources', resourceKey, 'Properties', 'Code'],
			{ S3Bucket: s3DeploymentBucket, S3Key: s3Key },
		),
		assocPath(
			['Resources', resourceKey, 'Properties', 'Handler'],
			`${resourceKey}.default`,
		),
	)(result),
	srcCloudFormationTemplate,
	lambdaResourceEntries,
)
