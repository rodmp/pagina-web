import { apiFn } from 'root/src/server/api'

import { PLEDGE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'
import { internet } from 'faker'

describe('pledgeProject', () => {
	test('successfully pledge a project', async () => {
		const newProject = await createProject({
			userId: internet.username,
			payload: {...createProjectPayload(), status: 'approved' },
		})
		const pledgeAmount = 20
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
