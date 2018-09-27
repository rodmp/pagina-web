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

export default ({
	s3UploadClient, s3DeploymentBucket, buildPath, lambdaResourceEntries,
	templateFileName, templateFileNameLocal,
}) => {
	const uploadFile = uploadFileHof(s3UploadClient, s3DeploymentBucket)
	return Promise.all([
		uploadFile(`${buildPath}/${templateFileNameLocal}`, templateFileName),
		...map(
			({ s3Key, resourceZipFileName }) => uploadFile(
				`${buildPath}/${resourceZipFileName}`,
				s3Key,
			),
			lambdaResourceEntries,
		),
	])
}
