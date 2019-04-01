import mailHeader from 'root/src/server/email/templates/bodyTemplate/mailHeader'
import mailFooter from 'root/src/server/email/templates/bodyTemplate/mailFooter'

import {
	ourUrl,
	survey,
	ourName,
	ourEmail,
} from 'root/src/shared/constants/mail'

export default mailContent => `
${mailHeader(ourUrl, ourName)}
${mailContent}
${mailFooter(survey, ourName, ourEmail, ourUrl)}
`
