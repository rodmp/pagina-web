import { apiFn } from 'sls-aws/src/server/api'

import { AUDIT_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'

import createProject from 'sls-aws/src/server/api/actions/createProject'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'

import {
	projectApprovedKey, projectPendingKey,
} from 'sls-aws/src/server/api/lenses'

describe('auditProject', () => {
	test('successfully audit a project', async () => {
		const newProject = await createProject({
			userId: 'user-differentuserid',
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
		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				status: projectApprovedKey,
			},
		})
	})
})
