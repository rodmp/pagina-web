import { SES } from 'aws-sdk'
import { ourEmail } from 'root/src/shared/constants/mail'

const ses = new SES()

export default (emailData, emailTemplate) => {
	const params = {
		Destination: {
			ToAddresses: emailData.recipients,
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: emailTemplate(emailData),
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: emailData.title,
			},
		},
		Source: ourEmail,
	}
	ses.sendEmail(params, (err, data) => {
		if (err) console.log(err, err.stack) // an error occurred
		else console.log(data) // successful response
	})
}
