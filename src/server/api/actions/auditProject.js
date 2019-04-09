import { head, replace, equals, prop, compose, map } from 'ramda'

import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'

import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

import sendEmail from 'root/src/server/email/actions/sendEmail'
import dareApprovedMail from 'root/src/server/email/templates/dareApproved'
import { dareApprovedTitle } from 'root/src/server/email/util/emailTitles'

import { AUDIT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getPayloadLenses } from 'root/src/server/api/getEndpointDesc'
import { generalError } from 'root/src/server/api/errors'
import dynamoQueryProject from 'root/src/server/api/actionUtil/dynamoQueryProject'
import projectSerializer from 'root/src/server/api/serializers/projectSerializer'
import getUserEmail from 'root/src/server/api/actionUtil/getUserEmail'
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

	try {
		const email = await getUserEmail(userId)

		if (equals(viewAudit(payload), 'approved')) {
			const emailData = {
				title: dareApprovedTitle,
				dareTitle: prop('title', newProject),
				recipients: [email],
				streamers: compose(map(prop('username')), prop('assignees'))(newProject),
			}
			sendEmail(emailData, dareApprovedMail)
		}
	} catch (err) { }

	return {
		userId,
		...newProject,
		status: viewAudit(payload),
	}
}
