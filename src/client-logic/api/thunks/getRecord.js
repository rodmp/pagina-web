invokeLambda(
	apiFunctionArn,
	{ endpointId: 'TEST_ENDPOINT_ID', payload: { test: 'poop' } },
).then(console.log).catch(console.warn)
