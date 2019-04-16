import { apiFn } from 'root/src/server/api'

import { REMOVE_TO_FAVORITES } from 'root/src/shared/descriptions/endpoints/endpointIds'

import createProject from 'root/src/server/api/actions/createProject'
import createProjectPayload from 'root/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'root/src/server/api/mocks/contextMock'
import { internet } from 'faker'

const project = createProject({
	userId: internet.username,
	payload: { ...createProjectPayload(), status: 'approved' },
})

describe('removeToFavorites', () => {

	test('successfully removed from your favorites', async () => {
		const newProject = await project

		const event = {
			endpointId: REMOVE_TO_FAVORITES,
			payload: {
				projectId: newProject.id,
			},
			authentication: mockUserId,
		}
		const res = await apiFn(event)

		console.log(res)

		expect(res).toEqual({
			statusCode: 200,
			body: {
				...newProject,
				favoritesAmount: newProject.favoritesAmount - 1,
				myFavorites: 0
			},
		})
	})
})
