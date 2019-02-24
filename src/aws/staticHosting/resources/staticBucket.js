import {
	STATIC_BUCKET,
} from 'root/src/aws/staticHosting/resourceIds'

export default {
	[STATIC_BUCKET]: {
		Type: 'AWS::S3::Bucket',
		Properties: {
			AccessControl: 'PublicRead',
			WebsiteConfiguration: {
				IndexDocument: 'index.html',
				ErrorDocument: 'index.html',
			},
		},
	},
}
