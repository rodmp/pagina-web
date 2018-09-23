import { stage } from 'sls-aws/src/aws/util/resourcePrefix'

export const apexDomain = '5gorillaz.com'

export default `${stage.toLowerCase()}.${apexDomain}`
