import mailHeader from 'root/src/server/email/templates/bodyTemplate/mailHeader'
import mailFooter from 'root/src/server/email/templates/bodyTemplate/mailFooter'

import {
	logoSrc,
	survey,
	ourName,
	ourEmail,
} from 'root/src/shared/constants/mail'

export default mailContent => `
${mailHeader(logoSrc)}
${mailContent}
${mailFooter(survey, ourName, ourEmail)}
`
