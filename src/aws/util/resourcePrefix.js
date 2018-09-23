import { camelCase } from 'sls-aws/src/util/stringCase'
import packageJson from 'sls-aws/package.json'

const stage = process.env.stage || 'dev'

export default camelCase(`${packageJson.name} ${stage}`)
export { stage }
