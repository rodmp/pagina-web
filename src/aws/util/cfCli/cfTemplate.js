import fs from 'fs'
import { reduce, assocPath } from 'ramda'

import { cfDir } from 'sls-aws/src/aws/util/cfCli/constants'

export const addZipsToCfTemplate = (entryArr, cft) => reduce(
	(result, { resourceKey }) => assocPath(
		['Resources', resourceKey, 'Properties', 'Code'],
		{ ZipFile: `./.webpack/${resourceKey}.zip` },
		result,
	),
	cft,
	entryArr,
)

export const saveCfTemplate = templateJs => new Promise((resolve, reject) => {
	fs.writeFile(
		`${cfDir}/cfTemplate.json`,
		JSON.stringify(templateJs, null, 2),
		(err) => {
			if (err) {
				spinner.fail()
				reject(err)
			}
			spinner.succeed()
			resolve()
		},
	)
})
