import { PARTITION_KEY, SORT_KEY } from 'sls-aws/src/constants/apiDynamoIndexes'

import projectDenormalizeFields from 'sls-aws/src/server/api/actionUtil/projectDenormalizeFields'

export default (
	projectId, project, userId, pledgeAmount, stripeCardId, created = false,
) => ({
	[PARTITION_KEY]: projectId,
	[SORT_KEY]: `pledge|${userId}`,
	pledgeAmount,
	stripeCardId,
	...(created ? { created: true } : {}),
	...projectDenormalizeFields(project),
})
