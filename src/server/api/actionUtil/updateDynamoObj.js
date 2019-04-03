import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import projectDenormalizeFields from 'root/src/server/api/actionUtil/projectDenormalizeFields'

export default (
	projectId, project, userId, description, stripeCardId, created = false,
) => {
	const data = {
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: `description|${userId}`,
		stripeCardId,
		...(created ? { created: true } : {}),
		...projectDenormalizeFields(project),
		description,
	}
	return data
}
