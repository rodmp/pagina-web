import { reduce, toPairs, prop, append, path, propEq } from 'ramda'

export default ({ cloudFormationTemplate, s3DeploymentBucket }) => (
	reduce((result, [, resourceObj]) => {
		if (propEq('Type', 'AWS::S3::Bucket', resourceObj)) {
			return append(
				path(['Properties', 'BucketName'], resourceObj),
				result,
			)
		}
		return result
	},
	[s3DeploymentBucket],
	toPairs(prop('Resources', cloudFormationTemplate))
))
