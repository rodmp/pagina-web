import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import projectDenormalizeFields from 'root/src/server/api/actionUtil/projectDenormalizeFields'

export default (
	projectId, project, userId, created = false,
) => {

	const data = {
		[PARTITION_KEY]: projectId,
		[SORT_KEY]: `favorites|${userId}`,
		...(created ? { created: true } : {}),
		...projectDenormalizeFields(project),
	};

	return data;
}
