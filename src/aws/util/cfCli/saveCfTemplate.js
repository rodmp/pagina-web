import fs from 'fs'

export default ({
	finalCloudFormationTemplate, buildPath, templateFileNameLocal,
}) => new Promise(
	(resolve, reject) => {
		fs.writeFile(
			`${buildPath}/${templateFileNameLocal}`,
			JSON.stringify(finalCloudFormationTemplate),
			(err) => {
				if (err) {
					reject(err)
				}
				resolve()
			},
		)
	},
)
