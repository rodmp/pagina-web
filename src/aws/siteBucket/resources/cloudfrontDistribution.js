import ref from 'sls-aws/src/aws/util/ref'
import getAtt from 'sls-aws/src/aws/util/getAtt'
import domainName from 'sls-aws/src/aws/util/domainName'

import {
	CLOUDFRONT_DISTRIBUTION, SSL, ROOT_BUCKET,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[CLOUDFRONT_DISTRIBUTION]: {
		Type: 'AWS::CloudFront::Distribution',
		Properties: {
			DistributionConfig: {
				Aliases: [
					domainName,
				],
				Enabled: true,
				PriceClass: 'PriceClass_All',
				DefaultCacheBehavior: {
					TargetOriginId: ref(ROOT_BUCKET),
					ViewerProtocolPolicy: 'redirect-to-https',
					MinTTL: 0,
					AllowedMethods: ['HEAD', 'GET'],
					CachedMethods: ['HEAD', 'GET'],
					// ForwardedValues: {
					// 	QueryString: false,
					// 	Cookies: {
					// 		Forward: 'none',
					// 	},
					// },
				},
				Origins: [
					{
						DomainName: getAtt(ROOT_BUCKET, 'DomainName'),
						Id: ref(ROOT_BUCKET),
						CustomOriginConfig: {
							HTTPPort: '80',
							HTTPSPort: '443',
							OriginProtocolPolicy: 'http-only',
						},
					},
				],
				DefaultRootObject : 'index.html',
				CustomErrorResponses : [
					{
						ErrorCode : '404',
						ResponsePagePath : 'index.html',
						ResponseCode : '200',
						ErrorCachingMinTTL : '30',
					}
				],
				ViewerCertificate: {
					SslSupportMethod: 'sni-only',
					MinimumProtocolVersion: 'TLSv1',
					AcmCertificateArn: ref(SSL),
				},
			},
		},
	},
}
