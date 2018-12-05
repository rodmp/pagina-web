import { green, red } from 'chalk'
import emoji from 'node-emoji'
import commander from 'commander'

import createConfigObj from 'sls-aws/src/aws/util/cfCli/createConfigObj'
import runCommand from 'sls-aws/src/aws/util/cfCli/runCommand'

const boom = emoji.find('collision').emoji
const sad = emoji.find('sob').emoji

const nl = '\n'

commander
	.arguments('<cmd> [template]')
	.option('-n, --name [value]', 'stack name default package.json name')
	.option('-s, --stage [value]', 'deployment stage')
	.option('-w, --webpack-config [value]', 'webpack build options')
	.option('-p, --profile [value]', 'aws credential profile default: default')
	.option('-r, --region [value]', 'aws region default: us-east-1')
	.option('-b, --build-dir [value]', 'src build dir default: .cloudFormation')
	.action((cmd, template, options) => {
		if (!cmd/* || !template */) {
			commander.help()
		} else {
			const config = createConfigObj({ template, ...options })
			runCommand(cmd, config)
				.then(() => {
					console.info(green('Done'), boom, nl)
				}).catch((err) => {
					console.info(red('Error'), sad, nl, err, nl)
				})
		}
	})
	.parse(process.argv)
