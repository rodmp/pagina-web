import { camelCase } from 'root/src/shared/util/stringCase'
import packageJson from 'root/appConfig.json'

const stage = process.env.stage || 'dev'

export default camelCase(`${packageJson.name} ${stage}`)
export { stage }
