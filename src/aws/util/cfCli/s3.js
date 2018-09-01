import s3 from 's3'
import { S3 } from 'aws-sdk'

import { awsConfig } from 'sls-aws/src/aws/util/cfCli/constants'

const s3Client = new S3(awsConfig)
const s3UploadClient = s3.createClient({ s3Client })

export const createCfS3Bucket = stackName => (
	s3Client.createBucket({ Bucket: stackName }).promise()
)

export const uploadFileToS3 = (filePath, fileName, stackName) => new Promise(
	(resolve, reject) => {
		const downloader = s3UploadClient.downloadFile({
			localFile: filePath,
			s3Params: {
				Bucket: stackName,
				Key: fileName,
			},
		})
		downloader.on('error', (err) => {
			reject(err)
		})
		downloader.on('end', () => {
			resolve()
		})
	},
)
