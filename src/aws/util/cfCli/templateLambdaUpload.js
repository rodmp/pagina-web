import { map } from 'ramda'
import s3Upload from 'sls-aws/src/aws/util/cfCli/s3Upload'


export default ({
	s3UploadClient, s3DeploymentBucket, buildPath, lambdaResourceEntries,
	templateFileName, templateFileNameLocal,
}) => {
    const uploadFile = uploadFileHof(s3UploadClient, s3DeploymentBucket)
    const fileArr = [
		[`${buildPath}/${templateFileNameLocal}`, templateFileName],
		...map(
			({ s3Key, resourceZipFileName }) => [
				`${buildPath}/${resourceZipFileName}`,
				s3Key,
            ],
			lambdaResourceEntries,
		),
	]
	return s3Upload(s3UploadClient, s3DeploymentBucket, fileArr)
}
