module.exports = {
	projects: [
		{
			displayName: 'js',
			testMatch: [
				'<rootDir>/**/*.test.js',
			],
		},
		{
			displayName: 'ddb',
			testMatch: [
				'<rootDir>/**/*.dynamoTest.js',
			],
			setupTestFrameworkScriptFile: '<rootDir>/src/testUtil/dynamoTableSetup.js',
		},
	],
}
