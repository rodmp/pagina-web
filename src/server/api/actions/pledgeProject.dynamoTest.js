import { apiFn } from 'root/src/server/api'

import { PLEDGE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'

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
			authentication: mockUserId,
		}
		const res = await apiFn(event)
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
			authentication: mockUserId,
		}
		const res = await apiFn(event)
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
