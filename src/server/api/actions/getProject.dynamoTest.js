import { apiFn } from 'sls-aws/src/server/api'

import { GET_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'

import createProject from 'sls-aws/src/server/api/actions/createProject'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import contextMock, { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'

describe('getProject', () => {
	test('createProject', async () => {
		const newProject = await createProject({
			userId: mockUserId,
			payload: createProjectPayload(),
		})
		const event = {
			endpointId: GET_PROJECT,
			payload: { projectId: newProject.id },
		}
		const res = await apiFn(event, contextMock)
		expect(res).toEqual({
			statusCode: 200,
			body: newProject,
		})
	})
})
