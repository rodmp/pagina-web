import ref from 'root/src/aws/util/ref'

import {
	RECORD_SET,
} from 'root/src/aws/staticHosting/resourceIds'

import {
	DOMAIN_NAME,
} from 'root/src/aws/staticHosting/outputIds'

export default {
	 [DOMAIN_NAME]: {
	 	Description: 'Route53 RecordSet domain name',
	 	Value: ref(RECORD_SET),
	 },
}
