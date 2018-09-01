import path from 'path'
import awsConf from 'aws-config'

export const cfDir = path.join(__dirname, '../../../.cf')

export const awsConfig = awsConf({
	region: 'us-east-1',
	profile: 'default',
})

export const defaultStage = 'Dev'
export const nl = '\n'
