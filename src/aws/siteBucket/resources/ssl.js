import ref from 'sls-aws/src/aws/util/ref'
import { SSL } from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[SSL]: {
		Type: 'AWS::CertificateManager::Certificate',
		Properties: {
			DomainName: {
				Ref: 'RootBucket',
			},
			SubjectAlternativeNames: [
				{
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
			],
		},
	},
}
