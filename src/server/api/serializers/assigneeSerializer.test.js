import {
	getDataHof,
} from 'sls-aws/src/server/api/serializers/assigneeSerializer'

const getUserDataMock = jest.fn()

const assigneeSerializer = getDataHof(getUserDataMock)

const mockChannel1 = {
	id: '146000275',
	login: '5gorillaz',
	display_name: '5gorillaz',
	type: '',
	broadcaster_type: '',
	description: '5gorillaz desc',
	profile_image_url: 'https://5gorillaz.jpg',
	view_count: 286,
}

const mockChannel2 = {
	id: '148899812',
	login: 'sonicfingboom',
	display_name: 'sonicfingboom',
	type: '',
	broadcaster_type: '',
	description: 'sonicfingboom desc',
	profile_image_url: 'https://sonicfingboom.jpg',
	offline_image_url: '',
	view_count: 0,
}


const mockDataArray = [
	[
		{ id: 146000275	 },
		{ id: 148899812	 },
	],
	[], // should test games too but it works very similarly
]

describe('assigneeSerializer', () => {
	test('assigneeSerializer works with valid channels', async () => {
		getUserDataMock.mockReturnValueOnce(Promise.resolve({
			data: [mockChannel1, mockChannel2],
		}))
		const res = await assigneeSerializer(mockDataArray)
		expect(res).toEqual([[
			{
				platform: 'twitch',
				image: 'https://5gorillaz.jpg',
				description: '5gorillaz desc',
				platformId: '146000275',
				displayName: '5gorillaz',
				username: '5gorillaz',
			},
			{
				platform: 'twitch',
				image: 'https://sonicfingboom.jpg',
				description: 'sonicfingboom desc',
				platformId: '148899812',
				displayName: 'sonicfingboom',
				username: 'sonicfingboom',
			},
		], []])
	})
	test('assigneeSerializer throws error for invalid channel', async () => {
		getUserDataMock.mockReturnValueOnce(Promise.resolve({
			data: [mockChannel1],
		}))
		try {
			await assigneeSerializer(mockDataArray)
		} catch (e) {
			expect(e).toEqual({
				schemaErrors: { assignees: { 1: 'Invalid twitch user' } },
				statusCode: 400,
			})
		}
	})
})
