import { head, replace } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import { AUDIT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import {
	projectPendingKey, projectApprovedKey,
} from 'root/src/server/api/lenses'

const payloadLenses = getPayloadLenses(AUDIT_PROJECT)
const { viewProjectId, viewAudit } = payloadLenses

export default async ({ userId, payload }) => {
	const projectId = viewProjectId(payload)
	const [
		projectToPledgeDdb, assigneesDdb, gamesDdb, myPledgeDdb,
	] = await dynamoQueryProject(
		userId, projectId,
	)
	const projectToPledge = head(projectToPledgeDdb)
	if (!projectToPledge) {
		throw generalError('Project doesn\'t exist')
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
						Item: {
							...projectToPledge,
							[SORT_KEY]: replace(
								projectPendingKey,
								viewAudit(payload),
								projectToPledge[SORT_KEY],
							),
						},
					},
				},
			],
		},
	}
	await documentClient.batchWrite(auditParams).promise()

	const newProject = projectSerializer([
		...projectToPledgeDdb,
		...assigneesDdb,
		...gamesDdb,
		...myPledgeDdb,
	])
	return {
		...newProject,
		status: projectApprovedKey,
	}
}
