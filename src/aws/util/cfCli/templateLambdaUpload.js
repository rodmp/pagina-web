import { map } from 'ramda'
import s3Upload from 'root/src/aws/util/cfCli/s3Upload'


export default ({
	s3Client, s3DeploymentBucket, buildPath, lambdaResourceEntries,
	templateFileName, templateFileNameLocal,
}) => {
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
	return s3Upload(s3Client, s3DeploymentBucket, fileArr)
}
