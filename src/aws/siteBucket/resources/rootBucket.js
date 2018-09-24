import {
	ROOT_BUCKET,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[ROOT_BUCKET]: {
		Type: 'AWS::S3::Bucket',
		Properties: {
			// BucketName: '',
			AccessControl: 'PublicRead',
			WebsiteConfiguration: {
				IndexDocument: 'index.html',
				ErrorDocument: 'index.html',
			},
		},
	},
}
