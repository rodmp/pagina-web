module.exports = {
	projects: [
		{
			displayName: 'js',
			testMatch: [
				'<rootDir>/**/*.test.js',
			],
			moduleNameMapper: {
				'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
				'\\.(css|less)$': '<rootDir>/assetsTransformer.js'
			},
		},
		{
			displayName: 'ddb',
			testMatch: [
				'<rootDir>/**/*.dynamoTest.js',
			],
			setupTestFrameworkScriptFile: '<rootDir>/src/testUtil/dynamoTableSetup.js',
			moduleNameMapper: {
				'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
				'\\.(css|less)$': '<rootDir>/assetsTransformer.js'
			},
		},
	],
}
