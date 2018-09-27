import { map } from 'ramda'

const uploadFileHof = (s3UploadClient, s3DeploymentBucket) => (
	localPath, fileName,
) => (
	new Promise(
		(resolve, reject) => {
			const uploader = s3UploadClient.uploadFile({
				localFile: localPath,
				s3Params: {
					Bucket: s3DeploymentBucket,
					Key: fileName,
				},
			})
			uploader.on('error', (err) => {
				reject(err)
			})
			uploader.on('end', () => {
				resolve()
			})
		},
	)
)

export default (s3UploadClient, s3DeploymentBucket, fileArr) => {
	const uploadFile = uploadFileHof(s3UploadClient, s3DeploymentBucket)
	return Promise.all(
		map(
			([localPath, s3FileName]) => uploadFile(localPath, s3FileName),
			fileArr
		)
	)
}
