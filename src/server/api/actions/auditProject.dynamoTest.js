import { apiFn } from 'root/src/server/api'

import { AUDIT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'

import {
	projectApprovedKey, projectPendingKey,
} from 'root/src/server/api/lenses'

describe('auditProject', () => {
	test('successfully audit a project', async () => {
		const newProject = await createProject({
			userId: mockUserId,
			payload: createProjectPayload(),
		})
		expect(newProject.status).toEqual(projectPendingKey)

		const event = {
			endpointId: AUDIT_PROJECT,
			payload: {
				projectId: newProject.id,
				audit: projectApprovedKey,
			},
		}
		const res = await apiFn(event)
		// had no other idea how to pass userId to response.
		// setting it in event object causes some other problems as
		// double key for pledgeAmount like
		// {
		// 	myPledge: 2222,
		// 	pledgeAmount: 2222
		// }
		res.body.userId = mockUserId

		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				status: projectApprovedKey,
			},
		})
	})
})
