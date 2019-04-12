import sendEmail from 'root/src/server/email/actions/sendEmail'
import welcome from 'root/src/server/email/templates/welcome'

const emailData = {
	dareTitle: 'asd',
	dareHref: 'dupa.pl',
	dareDescription: 'deskryption',
	title: 'Du[pa',
	recipients: ['piekarski_d@o2.pl'],
	streamers: ['piekarskid', 'piekarskiddd'],
	streamer: 'piekarskid',
	bountyAmount: 500,
	goal: 200,
	message: 'Chuj',
	expiryTime: 88000,
	hotDares: [
		{
			href: 'gogle.pl',
			title: 'dupa',
		},
		{
			href: 'gogle.pl',
			title: 'dupa',
		},
	],
	lastDares: [
		{
			href: 'gogle.pl',
		},
		{
			href: 'gogle.pl',
			title: 'dupa',
		},
	],
}


export default ((/* emailData */) => {
	sendEmail(emailData, welcome)
}
)()
