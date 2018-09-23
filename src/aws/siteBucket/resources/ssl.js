import ref from 'sls-aws/src/aws/util/ref'
import domainName from 'sls-aws/src/aws/util/domainName'
import {
	SSL, ROOT_BUCKET,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[SSL]: {
		Type: 'AWS::CertificateManager::Certificate',
		Properties: {
			DomainName: ref(ROOT_BUCKET),
			SubjectAlternativeNames: [
				domainName
			],
		},
	},
}
