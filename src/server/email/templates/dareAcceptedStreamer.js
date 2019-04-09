import mailBody from 'root/src/server/email/templates/bodyTemplate/mailBody'
import { ourName } from 'root/src/shared/constants/mail'
import expiryCalculator from 'root/src/server/email/util/expiryCalculator'

export default ({ dareTitle, expiryTime, dareHref, dareDescription }) => {
	const mailContent = `
              <table border="0" cellpadding="0" cellspacing="0" style="margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0;color:#354052;font-family:Roboto,sans-serif;font-size:26px;line-height:1.25;" width="480" class="content">
                <tbody>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:40px;line-height:1;margin:0;">Dare Accepted</p>
                    </td>
                  </tr>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Alright, it’s on for the Dare, ${dareTitle} that you accepted. We have ${expiryCalculator(expiryTime)} before the Dare, and all the pledges we can gather, expire.</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Remember to put a link to your Dare (<a href="http://${dareHref}" style="text-decoration:none;color:#1976d2;">http://${dareHref}</a>) in your stream description & tell your stream about it. </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>

                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">We’ll email you again when your bounty goal has been achieved. If you deliver before that, submit a link to the video of you delivering to Dare Drop. We’ll make sure you did what the Dare asked of you, then we’ll charge the pledgers and pay you!</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>

                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Here’s what you’ll need to do in the submitted video in order to get paid: ${dareDescription}</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>

                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">We’re hyping this up to our fans, don’t forget to hype it to yours!</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Good hunting,</p>
                      <p style="margin:0;padding:0;">The ${ourName} Team</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                </tbody>
              </table>
              `
	return mailBody(mailContent)
}
