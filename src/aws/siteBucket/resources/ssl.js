import getAtt from 'sls-aws/src/aws/util/getAtt'
import domainName from 'sls-aws/src/aws/util/domainName'
import {
	SSL, ROOT_BUCKET,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[SSL]: {
		Type: 'AWS::CertificateManager::Certificate',
		Properties: {
			// DomainName: getAtt(ROOT_BUCKET, 'DomainName'),
			DomainName: domainName,
			SubjectAlternativeNames: [
				domainName
			],
		},
	},
}
