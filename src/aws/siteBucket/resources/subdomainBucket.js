import ref from 'sls-aws/src/aws/util/ref'
import {
	SUBDOMAIN_BUCKET, ROOT_BUCKET,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[SUBDOMAIN_BUCKET]: {
		Type: 'AWS::S3::Bucket',
		Properties: {
			AccessControl: 'BucketOwnerFullControl',
			WebsiteConfiguration: {
				RedirectAllRequestsTo: {
					HostName: ref(ROOT_BUCKET),
				},
			},
		},
	},
}
