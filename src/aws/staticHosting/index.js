import cloudFrontDistribution from 'sls-aws/src/aws/staticHosting/resources/cloudFrontDistribution'
import staticBucket from 'sls-aws/src/aws/staticHosting/resources/staticBucket'
import recordSet from 'sls-aws/src/aws/staticHosting/resources/recordSet'
import ssl from 'sls-aws/src/aws/staticHosting/resources/ssl'
import publicBucketPolicy from 'sls-aws/src/aws/staticHosting/resources/publicBucketPolicy'

import outputs from 'sls-aws/src/aws/staticHosting/outputs'

export const staticHostingResources = {
	...cloudFrontDistribution,
    ...staticBucket,
    ...recordSet,
    ...ssl,
    ...publicBucketPolicy,
}

export const staticHostingOutputs = outputs