import { apiFn } from 'sls-aws/src/server/api'

import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'sls-aws/src/server/api/actions/createProject'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'

describe('getProject', () => {
	test('gets single project with my pledge amount appended', async () => {
		const newProjectPayload = createProjectPayload()
		const newProject = await createProject({
			userId: mockUserId,
			payload: newProjectPayload,
		})
		const event = {
			endpointId: GET_PROJECT,
			payload: { projectId: newProject.id },
			authentication: mockUserId,
		}
		const res = await apiFn(event)
		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				myPledge: newProjectPayload.pledgeAmount,
			},
		})
	})
})
