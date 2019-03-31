import mailBody from 'root/src/server/email/templates/bodyTemplate/mailBody'
import { ourName } from 'root/src/shared/constants/mail'
import expiryCalculator from 'root/src/server/email/util/expiryCalculator'

export default ({ dareDescription, dareTitle, bountyAmount, goal, expiryTime, dareHref }) => {
	const mailContent = `
              <table border="0" cellpadding="0" cellspacing="0" style="margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0;color:#354052;font-family:Roboto,sans-serif;font-size:26px;line-height:1.25;" width="480" class="content">
                <tbody>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:40px;line-height:1;margin:0;">Goal met</p>
                    </td>
                  </tr>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>

                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Oh YEAH!</p>
                      <p style="margin:0;padding:0;">Your fans have pledged ${bountyAmount} of your target ${goal}.</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">You have ${expiryCalculator(expiryTime)} to deliver before the Dare <a href="${dareHref}">${dareTitle}</a> and pledges expire. It’s time for you to show them what you got!</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Reply to this email to send a message to your pledgers telling them when you’re going to stream your dare delivery.</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Once you’ve done the deed, submit the link to the video of you delivering to ${ourName}. We’ll make sure you did what the Dare asked you to do, then we’ll charge the pledgers and pay you.</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Here’s what you’ll need to do in the submitted video in order to get paid:</p>
                      <p style="margin:0;padding:0;">${dareDescription}</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>

                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Pledging doesn’t close until you deliver or the Dare expires. We’re not letting up on the hype!</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
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
