module.exports = {
	projects: [
		{
			displayName: 'js',
			testMatch: [
				'<rootDir>/**/*.test.js',
			],
		},
		{
			displayName: 'dynamo',
			testMatch: [
				'<rootDir>/**/*.dynamoTest.js',
			],
			setupTestFrameworkScriptFile: '<rootDir>/src/testUtil/dynamoTableSetup.js',
			// globalSetup: '<rootDir>/src/testUtil/dynamoTestSetup.js',
		},
	],
}
