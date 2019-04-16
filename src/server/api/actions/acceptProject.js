import { head } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { ACCEPT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProjectAssignee from 'root/src/server/api/actionUtil/dynamoQueryProjectAssignee'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import { projectAcceptedKey } from 'root/src/server/api/lenses'

import getTimestamp from 'root/src/shared/util/getTimestamp'

const payloadLenses = getPayloadLenses(ACCEPT_PROJECT)
const { viewProjectId, viewAmountRequested, viewAssigneeId } = payloadLenses

export default async ({ payload }) => {
	const projectId = viewProjectId(payload)
	const assigneeId = viewAssigneeId(payload)
	const [
		projectToAccept,
	] = await dynamoQueryProjectAssignee(
		projectId, assigneeId,
	)
	const projectToConfirm = head(projectToAccept)
	if (!projectToConfirm) {
		throw generalError('Project or assignee doesn\'t exist')
	}

	const acceptationParams = {
		RequestItems: {
			[TABLE_NAME]: [
				{
					PutRequest: {
						Item: {
							...projectToConfirm,
							amountRequested: viewAmountRequested(payload),
							accepted: projectAcceptedKey,
							created: getTimestamp(),
						},
					},
				},
			],
		},
	}

	await documentClient.batchWrite(acceptationParams).promise()
	const project = projectSerializer([
		...projectToAccept,
	])

	console.log({
		...project,
		status: projectAcceptedKey,
		amountRequested: viewAmountRequested(payload),
		projectId,
	})

	return {
		...project,
		status: projectAcceptedKey,
		amountRequested: viewAmountRequested(payload),
		projectId,
	}
}
