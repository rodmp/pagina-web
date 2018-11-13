import { apiFn } from 'sls-aws/src/server/api'

import { PLEDGE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'

import createProject from 'sls-aws/src/server/api/actions/createProject'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import contextMock, { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'

describe('pledgeProject', () => {
	test('createProject', async () => {
		const newProject = await createProject({
			userId: mockUserId,
			payload: createProjectPayload(),
		})
		const event = {
			endpointId: PLEDGE_PROJECT,
			payload: {
				projectId: newProject.id,
				pledgeAmount: 1234,
				stripeCardId: 'mockStripeCardId',
			},
		}
		const res = await apiFn(event, contextMock)
		expect(res).toEqual({
			statusCode: 200,
			body: newProject,
		})
	})
})
