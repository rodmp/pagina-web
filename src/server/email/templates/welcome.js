import mailBody from 'root/src/server/email/templates/bodyTemplate/mailBody'
import { ourUrl, marketplaceUrl } from 'root/src/shared/constants/mail'
import { map, propOr, join } from 'ramda'

export default ({ hotDares, lastDares }) => {
	const renderHotDare = dare => `<p style="margin:0;margin-bottom:8px;padding:0;"><a href="http://${propOr('', 'href')(dare)}" style="text-decoration:none;color:#1976d2;">${propOr('Untitled', 'title')(dare)}</a></p>`
	const renderLastDare = dare => `<p style="margin:0;margin-bottom:8px;padding:0;"><a href="http://${propOr('', 'href')(dare)}" style="text-decoration:none;color:#1976d2;">${propOr('Untitled', 'title')(dare)}</a></p>`

	const mailContent = `
              <table border="0" cellpadding="0" cellspacing="0" style="margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0;color:#354052;font-family:Roboto,sans-serif;font-size:26px;line-height:1.25;" width="480" class="content">
                <tbody>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:40px;line-height:1;margin:0;">Welcome to Dare Drop!</p>
                    </td>
                  </tr>
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0;padding:0;" width="100%">
                      <p style="margin:0;padding:0;">Where you can Dare (ask, challenge, request, suggest) streamers to do things you’d like to see. On our site, you do by creating a Dare.</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:26px;line-height:1.23;margin:0;margin-bottom:10px;">How to Dare a Streamer</p>
                      <p style="margin:0;padding:0;">Visit <a href="http://${ourUrl}" style="text-decoration:none;color:#1976d2;">http://${ourUrl}</a></p>
                      Click the “Create a new Dare” link halfway down the page on the left side.
                      Fill out what you’d like to see then pledge. Our team will review your pledge to make sure it jives with our rules of use, then your pledge will be on our marketplace!
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:26px;line-height:1.23;margin:0;margin-bottom:10px;">How to Pledge</p>
                      <p style="margin:0;padding:0;">Check out the Dares in our <a href="http://${marketplaceUrl}" style="text-decoration:none;color:#1976d2;">marketplace</a>, if you see one you like, pledge to it to let the streamer know you want to see it. You can do this by hitting the “Pledge” button inside each dare.</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:26px;line-height:1.23;margin:0;margin-bottom:10px;">Hot Dares</p>
                      ${join('', map(renderHotDare, hotDares))}
                    </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td style="margin:0; padding:0;" width="100%">
                      <p style="font-weight:bold;font-size:26px;line-height:1.23;margin:0;margin-bottom:10px;">Last Dares Delivered</p>
                      ${join('', map(renderLastDare, lastDares))}
                      </td>
                  </tr>
                  
                  <tr>
                    <td height="50" style="margin:0;padding:0;" width="100%"></td>
                  </tr>
                  
                  <tr>
                    <td align="center" style="margin:0;padding:0;">
                      <a href="http://${marketplaceUrl}" style="display:inline-block;font-family:'Source Sans Pro',sans-serif;font-weight:700;font-size:18px;line-height:1.39;padding:11px 0;background:#800080;text-align:center;width:360px;color:#ffffff;text-decoration:none;border-radius:4px;" >Go to Marketplace</a>
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
