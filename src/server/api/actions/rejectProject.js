import { head } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { REJECT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProjectAssignee from 'root/src/server/api/actionUtil/dynamoQueryProjectAssignee'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import { projectStreamerRejectedKey } from 'root/src/server/api/lenses'

import getTimestamp from 'root/src/shared/util/getTimestamp'

const payloadLenses = getPayloadLenses(REJECT_PROJECT)
const { viewProjectId, viewAssigneeId } = payloadLenses

export default async ({ payload }) => {
	const projectId = viewProjectId(payload)
	const assigneeId = viewAssigneeId(payload)
	const [
		project,
	] = await dynamoQueryProjectAssignee(
		projectId, assigneeId,
	)
	const projectToReject = head(project)
	if (!projectToReject) {
		throw generalError('Project or assignee doesn\'t exist')
	}

	if (projectToReject.amountRequested) {
		delete projectToReject.amountRequested
	}

	const rejectionParams = {
		RequestItems: {
			[TABLE_NAME]: [
				{
					PutRequest: {
						Item: {
							...projectToReject,
							accepted: projectStreamerRejectedKey,
							created: getTimestamp(),
						},
					},
				},
			],
		},
	}

	await documentClient.batchWrite(rejectionParams).promise()
	const projectToReturn = projectSerializer([
		...projectToReject,
	])

	return {
		...projectToReturn,
		status: projectStreamerRejectedKey,
	}
}
