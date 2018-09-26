import {
 map, prop, propOr, splitEvery, concat, propEq, reduce, append 
} from 'ramda'

export const getAllBucketNames = (
	cloudFormationClient, stackName, nextToken, lastBucketNames = [],
) => (
	cloudFormationClient.listStackResources({
		StackName: stackName, NextToken: nextToken,
	}).promise().then((res) => {
		console.log(res)
		const bucketNames = reduce(
			(result, resource) => {
				if (propEq('ResourceType', 'ResourceType', resource)) {
					return append(
						result,
						prop('PhysicalResourceId', resource)
					)
				}
				return result 
			},
			[],
			propOr([], 'StackResourceSummaries', res)
		)
		const hasNextToken = prop('NextToken', res)
		if (hasNextToken) {
			return getAllBucketNames(
				cloudFormationClient, stackName, hasNextToken,
				bucketNames,
			)
		}
		return concat(lastBucketNames, bucketNames)
	})
)

export const getAllItemKeysChunked = (
	s3Client, bucketName, marker, lastItemKeys = [],
) => s3Client.listObjects({
	Bucket: bucketName, Marker: marker,
}).promise().then((res) => {
	const items = propOr([], 'Contents', res)
	const itemKeys = map(item => ({ Key: prop('Key', item) }), items)
	if (prop('IsTruncated', res)) {
		const nextMarker = prop('NextMarker', res)
		return getAllItemKeysChunked(
			s3Client, bucketName, nextMarker, itemKeys,
		)
	}
	return splitEvery(1000, concat(lastItemKeys, itemKeys))
})

export const deleteObjects = (s3Client, bucketName, itemKeys) => (
	s3Client.deleteObjects({
		Bucket: bucketName,
		Delete: {
			Objects: itemKeys,
		},
	}).promise()
)

export const deleteAllObjects = (
	s3Client, bucketName, chunkedItemKeys,
) => Promise.all(
	map(
		itemKeys => deleteObjects(s3Client, bucketName, itemKeys),
		chunkedItemKeys,
	),
)

export const deleteBucket = (s3Client, bucketName) => s3Client.deleteBucket({
	Bucket: bucketName,
}).promise()

export const nukeBucket = (s3Client, bucketName) => getAllItemKeysChunked(
	s3Client, bucketName,
).then(chunkedItemKeys => deleteAllObjects(
	s3Client, bucketName, chunkedItemKeys,
).then(() => deleteBucket(s3Client, bucketName)))

export default ({
	cloudFormationClient, s3Client, s3DeploymentBucket, stackName,
}) => getAllBucketNames(cloudFormationClient, stackName).then(
	(resourceBucketNames) => {
		const allS3BucketNames = append(s3DeploymentBucket, resourceBucketNames) 
		return Promise.all(
			map(
				bucketName => nukeBucket(s3Client, bucketName),
				allS3BucketNames,
			),
		)
	}
)
