export default (survey, ourName, ourEmail) => `
              <!-- mail footer -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0;color:#354052;font-size:26px;line-height:1.25;background-color:#f5f5f5;" width="100%">
                <tbody>
                  <tr>
                    <td style="margin:0;padding:0;" width="60" class="offset"></td>
                    <td style="margin:0;padding:0;" width="480" class="content">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin:0;padding:0;font-family:'Source Sans Pro',sans-serif;font-weight:300;color:#354052;text-align:center;" width="100%">
                        <tbody>
                          <tr>
                            <td height="65" style="margin:0;padding:0;" width="100%"></td>
                          </tr>
                          <tr>
                            <td style="margin:0;padding:0;" width="100%">
                              <p style="font-weight:700;font-size:39px;line-height:1;margin:0;margin-bottom:16px;">We’d love to hear from you!</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="margin:0;padding:0;" width="100%">
                              <p style="font-size:19px;line-height:1;margin:0;">
                                Help us improve by sharing your feedback in this short <a href="${survey}" style="text-decoration:none;color:#354052;border-bottom:solid 1px #354052;line-height:1;">survey</a>.
                              </p>
                            </td>
                          </tr>
                          <tr height="80">
                            <td style="margin:0;padding:0;" align="center" width="100%">
                              <a href="/" target="_blank" style="display:inline-block;margin-left:10px;margin-right:10px;vertical-align:middle;">
                                <img src="icons/facebook.png" alt="facebook" width="21" border="0" style="border:0;">
                              </a>
                              <a href="/" target="_blank" style="display:inline-block;margin-left:10px;margin-right:10px;vertical-align:middle;">
                                <img src="icons/twitter.png" alt="twitter" width="22" border="0" style="border:0;">
                              </a>
                              <a href="/" target="_blank" style="display:inline-block;margin-left:10px;margin-right:10px;vertical-align:middle;">
                                <img src="icons/instagram.png" alt="instagram" width="22" border="0" style="border:0;">
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style="margin:0;padding:0;" width="100%">
                              <p style="font-weight:300;font-size:14px;line-height:1.56;margin:0;margin-bottom:10px;">
                                Copyright © 2018 <b>${ourName}</b>. All Rights Reserved.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="margin:0;padding:0;" width="100%">
                              <a href="/" target="_blank" style="display:inline-block;text-decoration:none;color:#354052;font-weight:300;font-size:14px;line-height:1.56;">${ourEmail}</a>
                            </td>
                          </tr>
                          
                          
                          <tr>
                            <td height="65" style="margin:0;padding:0;" width="100%"></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="margin:0;padding:0;" width="60"  class="offset"></td>
                  </tr>
                </tbody>
              </table>
              <!-- mail footer END-->
              
              
            </center>
          </td>
        </tr>
        
      </tbody>
    </table>
  </body>
</html>`
