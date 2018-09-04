import fs from 'fs'

export default ({
	finalCloudFormationTemplate, buildPath, templateFileName,
}) => new Promise(
	(resolve, reject) => {
		fs.writeFile(
			`${buildPath}/${templateFileName}`,
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
