
export default ({ s3Client, s3DeploymentBucket }) => (
	s3Client.createBucket({ Bucket: s3DeploymentBucket }).promise()
)
