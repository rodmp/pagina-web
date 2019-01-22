import { apiFn } from 'sls-aws/src/server/api'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { CREATE_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import { mockUserId } from 'sls-aws/src/server/api/mocks/contextMock'

const scanTable = () => {
	const params = {
		TableName: TABLE_NAME,
	}
	return documentClient.scan(params).promise()
}

const event = {
	endpointId: CREATE_PROJECT,
	// payload: createProjectPayload(),
	authentication: mockUserId,
	payload: { stripeCardId: 'src_EOGQeMJZWkmRI4', title: 'well, this is a dare now', description: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf', assignees: [{ label: 'Anomaly', id: 76508554, value: 76508554, image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-300x300.png' }, { label: 'GarenaTW', id: 28462004, value: 28462004, image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/garenatw-profile_image-85f32c0eaad8b48e-300x300.jpeg' }], games: [{ label: 'Chess', id: 743, value: 743, image: 'https://static-cdn.jtvnw.net/ttv-boxart/Chess-52x72.jpg' }], pledgeAmount: 1234 },
}

describe('createProject', () => {
	test('createProject', async () => {
		const res = await apiFn(event)
		const tableScan = await scanTable()
		console.log(tableScan)
		expect(res).toEqual({})
	})
})
