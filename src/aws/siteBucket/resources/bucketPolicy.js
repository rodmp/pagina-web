import ref from 'sls-aws/src/aws/util/ref'
import {
	BUCKET_POLICY, SITE_BUCKET,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[BUCKET_POLICY]: {
		Type: 'AWS::S3::BucketPolicy',
		Properties: {
			PolicyDocument: {
				Id: 'SiteBucketPolicy',
				Version: '2012-10-17',
				Statement: [
					{
						Sid: 'PublicReadForGetBucketObjects',
						Effect: 'Allow',
						Principal: '*',
						Action: 's3:GetObject',
						Resource: {
							'Fn::Join': [
								'',
								[
									'arn:aws:s3:::',
									ref(SITE_BUCKET),
									'/*',
								],
							],
						},
					},
				],
			},
			Bucket: ref(SITE_BUCKET),
		},
	},
}
