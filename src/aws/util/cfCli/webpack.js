import { assoc, assocPath } from 'ramda'
import webpack from 'webpack'

import webpackLambda from 'sls-aws/src/aws/util/webpackLambda'

export const webpackLambdaFns = () => {
	const entryArr = getLambdaFnResourceEntries(cloudformationTemplate)
	return Promise.all(map(buildFiles, entryArr)).then(() => entryArr)
}

export const createWebpackConf = (entryPath, resourceKey) => assoc(
	'entry',
	entryPath,
	assocPath(['output', 'filename'], `${resourceKey}.js`, webpackLambda),
)

export const buildFiles = ({ entryPath, resourceKey }) => new Promise(
	(resolve, reject) => {
		webpack(
			createWebpackConf(entryPath, resourceKey),
			(err, stats) => {
				if (err || stats.hasErrors()) {
					reject(err)
				}
				resolve()
			},
		)
	},
)
