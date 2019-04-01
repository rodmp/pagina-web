import cloudFrontDistribution from 'root/src/aws/staticHosting/resources/cloudFrontDistribution'
import staticBucket from 'root/src/aws/staticHosting/resources/staticBucket'
import recordSet from 'root/src/aws/staticHosting/resources/recordSet'
import ssl from 'root/src/aws/staticHosting/resources/ssl'
import publicBucketPolicy from 'root/src/aws/staticHosting/resources/publicBucketPolicy'

import outputs from 'root/src/aws/staticHosting/outputs'

export const staticHostingResources = {
	//  ...cloudFrontDistribution,
	...staticBucket,
	//  ...recordSet,
	//  ...ssl,
	...publicBucketPolicy,
}

export const staticHostingOutputs = outputs
