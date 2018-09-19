import ref from 'sls-aws/src/aws/util/ref'
import { DNS } from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[DNS]: {
		Type: 'AWS::Route53::RecordSetGroup',
		Properties: {
			HostedZoneName: {
				'Fn::Join': [
					'',
					[
						{
							Ref: 'ApexDomainName',
						},
						'.',
					],
				],
			},
			Comment: 'Zone apex alias.',
			RecordSets: [
				{
					Name: {
						Ref: 'ApexDomainName',
					},
					Type: 'A',
					AliasTarget: {
						HostedZoneId: 'Z2FDTNDATAQYW2',
						DNSName: {
							'Fn::GetAtt': [
								'CDN',
								'DomainName',
							],
						},
					},
				},
				{
					Name: {
						'Fn::Join': [
							'',
							[
								'www.',
								{
									Ref: 'ApexDomainName',
								},
							],
						],
					},
					Type: 'CNAME',
					TTL: '900',
					ResourceRecords: [
						{
							'Fn::Join': [
								'.',
								[
									'www',
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
					],
				},
				{
					Name: {
						'Fn::Join': [
							'',
							[
								'dev.',
								{
									Ref: 'ApexDomainName',
								},
							],
						],
					},
					Type: 'CNAME',
					TTL: '900',
					ResourceRecords: [
						{
							'Fn::Join': [
								'.',
								[
									'dev',
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
					],
				},
			],
		},
	},
}
