import getAtt from 'sls-aws/src/aws/util/getAtt'
import domainName from 'sls-aws/src/aws/util/domainName'
import {
	SSL, STATIC_BUCKET,
} from 'sls-aws/src/aws/staticHosting/resourceIds'

export default {
	[SSL]: {
		Type: 'AWS::CertificateManager::Certificate',
		Properties: {
			DomainName: domainName,
			SubjectAlternativeNames: [
				domainName
			],
			ValidationMethod: 'DNS',
		},
	},
}
