import mailBody from 'root/src/server/email/templates/bodyTemplate/mailBody'
import { ourName } from 'root/src/shared/constants/mail'

export default ({ dareTitle }) => {
	const mailContent = `
              <table border="0" cellpadding="0" cellspacing="0" style="margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0;color:#354052;font-family:Roboto,sans-serif;font-size:26px;line-height:1.25;" width="480" class="content">
                <tbody>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:40px;line-height:1;margin:0;">Video Submitted</p>
                    </td>
                  </tr>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        We’re reviewing your video to make sure it contains everything your backers dared you to do in ${dareTitle}.
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        Once we’ve verified it we’ll charge your backers, blast out the video &amp; pay you!
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        Remember, due to payment issues you’ll seldom receive the full bounty amount - so don’t count on that money until it’s in your bank account.
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        Verification usually takes less than 48 hours.
                      </p>
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
