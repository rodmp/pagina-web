export default (separator, stringArray) => ({
	'Fn::Join': [
		separator,
		stringArray,
	],
})
