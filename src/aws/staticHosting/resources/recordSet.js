import ref from 'sls-aws/src/aws/util/ref'
import getAtt from 'sls-aws/src/aws/util/getAtt'
import domainName, { hostedZoneId, apexDomain } from 'sls-aws/src/aws/util/domainName'
import {
	RECORD_SET, CLOUDFRONT_DISTRIBUTION,
} from 'sls-aws/src/aws/staticHosting/resourceIds'

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
			// Z1UJRXOUMOOFQ8
			// HostedZoneName: `${apexDomain}.`,
			Name: domainName,
			Type: 'A',
			AliasTarget: {
				HostedZoneId: 'Z2FDTNDATAQYW2', // specific for cloudfront? https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html 
				DNSName: getAtt(CLOUDFRONT_DISTRIBUTION, 'DomainName'),
			}
		},
	},
}
