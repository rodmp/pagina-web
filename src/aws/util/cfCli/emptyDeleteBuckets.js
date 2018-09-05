import {
 map, prop, propOr, splitEvery, concat 
} from 'ramda'

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

export default ({ s3Client, s3BucketNames }) => Promise.all(
	map(
		bucketName => nukeBucket(s3Client, bucketName),
		s3BucketNames,
	),
)
