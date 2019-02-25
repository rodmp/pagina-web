import { stage } from 'root/src/aws/util/resourcePrefix'

export const apexDomain = 'watt.tv'

export const hostedZoneId = 'Z1Y1YRSE1A6N3N'

export default `${stage.toLowerCase()}.${apexDomain}`
