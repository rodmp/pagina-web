import getCognitoUser from 'sls-aws/src/server/api/getCognitoUser'

const jwtToken = 'eyJraWQiOiJrTHZXR1wvbktrZENYaVdvVnVBZlhDajlJeStRQUt6b2pXNStcL01Qb3BvaWM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2OTU5ZGUwYy05MzVlLTQ4M2ItOGY4My1hNzk4YzYxYzg3MzIiLCJhdWQiOiI3Mjg4Y2tndGppZzRncjRwYnZmdXVpb2VzdCIsImNvZ25pdG86Z3JvdXBzIjpbImFkbWluIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImRjNGM5ZGJiLWY4YTktMTFlOC1iNGQ3LWYzMzAwNzM0NDlhOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTQ0MDI2OTA2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9hVXVhMlhOUWsiLCJjb2duaXRvOnVzZXJuYW1lIjoiNjk1OWRlMGMtOTM1ZS00ODNiLThmODMtYTc5OGM2MWM4NzMyIiwiZXhwIjoxNTQ0NTQ0MTY5LCJpYXQiOjE1NDQ1NDA1NjksImVtYWlsIjoiYmlsbGpvaG5zdG9uNEBnbWFpbC5jb20ifQ.F3qaewgVMalGRqhp5ceqoiuKXnPusH_Na4dgUhqB7PTkRR5fc_WLp7VF9un66MfJ8IFicx-Xnjk07RCboVSN-5FeQNSUlIJkbgxaInUTFIw_N4hvQ99OnisECFdq9uIjBEGL2NSNHmDUA1uGsnhxHxJ2Txl0Mh6R2FmP_cE-0YtE0TcZXklu4c6aRdo7i-mqKohGXDHxlCZv46mEI_GzjPlRLnzeL3ShormWG80SirbBzFufhGZeZKzLchc_EO69Yezu3LA2Ix-Sg3pYaUjA52JWi9pa3JUp-z1VRi9DkcdOGuwDk1oTUYep3kUyKASw35Q6h1t6wsGmjvzbBfgkKQ'

// Tokens expire so can't run this in test suite. Leaving cause useful for
// debugging
describe.skip('getCognitoUser', () => {
	test('decodes valid jwtToken', async () => {
		const cognitoUser = await getCognitoUser(jwtToken)
		expect(cognitoUser).objectContaining({
			aud: '7288ckgtjig4gr4pbvfuuioest',
			auth_time: 1544026906,
			email_verified: true,
			event_id: 'dc4c9dbb-f8a9-11e8-b4d7-f330073449a8',
			exp: 1544544169,
			iat: 1544540569,
			iss: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_aUua2XNQk',
			token_use: 'id',
		})
	})
})
