import ref from 'root/src/aws/util/ref'
import split from 'root/src/aws/util/split'
import select from 'root/src/aws/util/select'
import getAtt from 'root/src/aws/util/getAtt'
import domainName from 'root/src/aws/util/domainName'

import {
	CLOUDFRONT_DISTRIBUTION, SSL, STATIC_BUCKET,
} from 'root/src/aws/staticHosting/resourceIds'

export default {
	[CLOUDFRONT_DISTRIBUTION]: {
		Type: 'AWS::CloudFront::Distribution',
		DependsOn: [STATIC_BUCKET],
		Properties: {
			DistributionConfig: {
				Aliases: [
					domainName,
				],
				Enabled: true,
				PriceClass: 'PriceClass_All',
				DefaultCacheBehavior: {
					TargetOriginId: ref(STATIC_BUCKET),
					ViewerProtocolPolicy: 'redirect-to-https',
					MinTTL: 0,
					AllowedMethods: ['HEAD', 'GET'],
					CachedMethods: ['HEAD', 'GET'],
					ForwardedValues: {
						QueryString: true,
						Cookies: {
							Forward: 'none',
						},
					},
				},
				Origins: [
					{
						DomainName: select(2, split('/', getAtt(STATIC_BUCKET, 'WebsiteURL'))),
						Id: ref(STATIC_BUCKET),
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
						ResponsePagePath : '/index.html',
						ResponseCode : '200',
						ErrorCachingMinTTL : '30',
					}
				],
				ViewerCertificate: {
					SslSupportMethod: 'sni-only',
					AcmCertificateArn: ref(SSL),
				},
			},
		},
	},
}
