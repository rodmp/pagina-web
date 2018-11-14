import { apiFn } from 'sls-aws/src/server/api'

import { PLEDGE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'

import createProject from 'sls-aws/src/server/api/actions/createProject'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import contextMock, { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'

describe('pledgeProject', () => {
	test('Can\'t pledge a project I\'ve already pleged', async () => {
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
			statusCode: 500,
			generalErrors: "You've already pledged this project",
		})
	})
	test('successfully pledge a project', async () => {
		const newProject = await createProject({
			userId: 'user-differentuserid',
			payload: createProjectPayload(),
		})
		const pledgeAmount = 1234
		const event = {
			endpointId: PLEDGE_PROJECT,
			payload: {
				projectId: newProject.id,
				pledgeAmount,
				stripeCardId: 'mockStripeCardId',
			},
		}
		const res = await apiFn(event, contextMock)
		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				pledgeAmount: newProject.pledgeAmount + pledgeAmount,
				myPledge: pledgeAmount,
			},
		})
	})
})
