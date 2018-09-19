import ref from 'sls-aws/src/aws/util/ref'
import {
	CLOUDFRONT_DISTRIBUTION,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[CLOUDFRONT_DISTRIBUTION]: {
		Type: 'AWS::CloudFront::Distribution',
		Properties: {
			DistributionConfig: {
				Aliases: [
					{
						Ref: 'ApexDomainName',
					},
				],
				Enabled: true,
				PriceClass: 'PriceClass_All',
				CacheBehaviors: [
					{
						TargetOriginId: {
							Ref: 'RootBucket',
						},
						PathPattern: '*.js',
						ViewerProtocolPolicy: 'redirect-to-https',
						MinTTL: 0,
						AllowedMethods: [
							'HEAD',
							'GET',
						],
						CachedMethods: [
							'HEAD',
							'GET',
						],
						ForwardedValues: {
							QueryString: true,
							Cookies: {
								Forward: 'none',
							},
						},
					},
					{
						TargetOriginId: {
							Ref: 'RootBucket',
						},
						PathPattern: '*.css',
						ViewerProtocolPolicy: 'redirect-to-https',
						MinTTL: 0,
						AllowedMethods: [
							'HEAD',
							'GET',
						],
						CachedMethods: [
							'HEAD',
							'GET',
						],
						ForwardedValues: {
							QueryString: true,
							Cookies: {
								Forward: 'none',
							},
						},
					},
				],
				DefaultCacheBehavior: {
					TargetOriginId: {
						Ref: 'RootBucket',
					},
					ViewerProtocolPolicy: 'redirect-to-https',
					MinTTL: 0,
					AllowedMethods: [
						'HEAD',
						'GET',
					],
					CachedMethods: [
						'HEAD',
						'GET',
					],
					ForwardedValues: {
						QueryString: false,
						Cookies: {
							Forward: 'none',
						},
					},
				},
				Origins: [
					{
						DomainName: {
							'Fn::Join': [
								'.',
								[
									{
										Ref: 'ApexDomainName',
									},
									{
										'Fn::FindInMap': [
											'RegionMap',
											{
												Ref: 'AWS::Region',
											},
											'websiteendpoint',
										],
									},
								],
							],
						},
						Id: {
							Ref: 'RootBucket',
						},
						CustomOriginConfig: {
							HTTPPort: '80',
							HTTPSPort: '443',
							OriginProtocolPolicy: 'http-only',
						},
					},
				],
				Restrictions: {
					GeoRestriction: {
						RestrictionType: 'none',
						Locations: [
						],
					},
				},
				ViewerCertificate: {
					SslSupportMethod: 'sni-only',
					MinimumProtocolVersion: 'TLSv1',
					AcmCertificateArn: {
						Ref: 'SSL',
					},
				},
			},
		},
	},
}
