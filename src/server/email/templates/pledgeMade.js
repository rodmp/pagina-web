import mailBody from 'root/src/server/email/templates/bodyTemplate/mailBody'
import { ourName } from 'root/src/shared/constants/mail'
import arrayToStringParser from 'root/src/server/api/serializers/arrayToStringParser'
import expiryCalculator from 'root/src/server/email/util/expiryCalculator'

export default ({ dareTitle, expiryTime, dareHref, streamers, notClaimedAlready }) => {
	const mailContent = `
              <table border="0" cellpadding="0" cellspacing="0" style="margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0;color:#354052;font-family:Roboto,sans-serif;font-size:26px;line-height:1.25;" width="480" class="content">
                <tbody>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:40px;line-height:1;margin:0;">Pledge Made</p>
                    </td>
                  </tr>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        Money DOWN! You can tell ${arrayToStringParser(streamers)} they’ve been Dared! 
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        <a href="http://${dareHref}">${dareTitle}</a>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>

                  ${notClaimedAlready ? `

                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        We’ll let you know if the streamer accepts the dare and sets a target bounty amount
                      </p>
                    </td>
                  </tr>
                  
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>` : null}
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">
                        You won’t pay until the streamer delivers. They only have ${expiryCalculator(expiryTime)} left, so tell your friends and let’s see this Dare through!
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
