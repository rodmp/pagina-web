import { assoc, assocPath, map, compose } from 'ramda'
import webpack from 'webpack'

import webpackLambdaConf from 'root/src/aws/util/cfCli/webpackLambdaConf'

export const createWebpackConf = (entryPath, resourceKey, buildPath) => (
	compose(
		assoc('entry', ['babel-polyfill', entryPath]),
		assocPath(['output', 'filename'], `${resourceKey}.js`),
		assocPath(['output', 'path'], buildPath),
	)(webpackLambdaConf)
)

export const buildFilesHof = buildPath => ({
	entryPath, resourceKey,
}) => new Promise(
	(resolve, reject) => {
		webpack(
			createWebpackConf(entryPath, resourceKey, buildPath),
			(err, stats) => {
				if (err || stats.hasErrors()) {
					reject(err)
				}
				resolve()
			},
		)
	},
)

export default ({ lambdaResourceEntries, buildPath }) => {
	const buildFiles = buildFilesHof(buildPath)
	return Promise.all(
		map(buildFiles, lambdaResourceEntries),
	)
}
