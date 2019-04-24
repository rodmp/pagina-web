import getAtt from 'root/src/aws/util/getAtt'
import domainName from 'root/src/aws/util/domainName'
import {
	SSL, STATIC_BUCKET,
} from 'root/src/aws/staticHosting/resourceIds'

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
