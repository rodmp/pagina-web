import ref from 'sls-aws/src/aws/util/ref'
import domainName, { hostedZoneId } from 'sls-aws/src/aws/util/domainName'
import {
	RECORD_SET, CLOUDFRONT_DISTRIBUTION,
} from 'sls-aws/src/aws/siteBucket/resourceIds'

export default {
	[RECORD_SET]: {
		// Type: 'AWS::Route53::RecordSetGroup',
		Type: 'AWS::Route53::RecordSet',
		DependsOn: [CLOUDFRONT_DISTRIBUTION],
		Properties: {
			// HostedZoneId: domainName,
			// RecordSets: [
			// 	{
			// 		Name: domainName,
			// 		Type: 'A',
			// 		AliasTarget: {
			// 			HostedZoneId: 'ZLGAJQMR826S3',
			// 			DNSName: ref(CLOUDFRONT_DISTRIBUTION),
			// 		}
			// 	}
			// ]
			HostedZoneId: hostedZoneId,
			Name: domainName,
			Type: 'A',
			AliasTarget: {
				HostedZoneId: hostedZoneId,
				DNSName: ref(CLOUDFRONT_DISTRIBUTION),
			}
		},
	},
}
