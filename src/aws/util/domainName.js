import { stage } from 'sls-aws/src/aws/util/resourcePrefix'

export const apexDomain = '5gorillaz.com'

export const hostedZoneId = 'ZLGAJQMR826S3'

export default `${stage.toLowerCase()}.${apexDomain}`
