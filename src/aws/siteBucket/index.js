import cloudFrontDistribution from 'sls-aws/src/aws/siteBucket/resources/cloudFrontDistribution'
import rootBucket from 'sls-aws/src/aws/siteBucket/resources/rootBucket'
import recordSet from 'sls-aws/src/aws/siteBucket/resources/recordSet'
import ssl from 'sls-aws/src/aws/siteBucket/resources/ssl'

import outputs from 'sls-aws/src/aws/siteBucket/outputs'

export const siteBucketResources = {
	...cloudFrontDistribution,
    ...rootBucket,
    ...recordSet,
    // ...ssl,
}


export const siteBucketOutputs = outputs