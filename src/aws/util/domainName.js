import { stage } from 'root/src/aws/util/resourcePrefix'

export const apexDomain = 'watt.tv'

export const hostedZoneId = 'ZLGAJQMR826S3'

export default `${stage.toLowerCase()}.${apexDomain}`
