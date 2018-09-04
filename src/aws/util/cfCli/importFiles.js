export default ({
	srcCloudFormationTemplate, webpackConfig,
}) => {
	const filesNeeded = [
		import(srcCloudFormationTemplate),
	]
	if (webpackConfig) {
		filesNeeded.push(import(webpackConfig))
	}
	return Promise.all(filesNeeded)
}
