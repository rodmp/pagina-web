import { head, replace, prop } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import { AUDIT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import projectStatusKeySelector from 'root/src/server/api/actionUtil/projectStatusKeySelector'

const payloadLenses = getPayloadLenses(AUDIT_PROJECT)
const { viewAudit } = payloadLenses

export default async ({ userId, payload }) => {
	const { projectId } = payload
	const [
		projectToPledgeDdb, /* assigneesDdb, gamesDdb, */ myPledgeDdb,
	] = await dynamoQueryProject(
		userId, projectId,
	)
	const projectToPledge = head(projectToPledgeDdb)
	if (!projectToPledge) {
		throw generalError('Project doesn\'t exist')
	}

	const auditedProjectToPledge = {
		...projectToPledge,
		[SORT_KEY]: replace(
			projectStatusKeySelector(prop('sk', projectToPledge)),
			viewAudit(payload),
			projectToPledge[SORT_KEY],
		),
	}

	const auditParams = {
		RequestItems: {
			[TABLE_NAME]: [
				{
					DeleteRequest: {
						Key: {
							[PARTITION_KEY]: projectToPledge[PARTITION_KEY],
							[SORT_KEY]: projectToPledge[SORT_KEY],
						},
					},
				},
				{
					PutRequest: {
						Item: auditedProjectToPledge,
					},
				},
			],
		},
	}
	await documentClient.batchWrite(auditParams).promise()
	const newProject = projectSerializer([
		...projectToPledgeDdb,
		// ...assigneesDdb,
		// ...gamesDdb,
		...myPledgeDdb,
	])

	return {
		userId,
		...newProject,
		status: viewAudit(payload),
	}
}
