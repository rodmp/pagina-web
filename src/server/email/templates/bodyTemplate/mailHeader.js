export default (ourUrl, ourName) => `
<html>
  <head>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700');
    </style>
  </head>

  <body>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;padding:0;font-family:Roboto,sans-serif;width:600px;" width="600">
      <tbody>
        <tr>
          <td align="center">
            <center>
              
              <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background-color:#000000;color:#ffffff;" width="100%">
                <tbody>
                  <tr>
                    <td height="105" style="margin:0;padding:0;" width="60"></td>
                    <td height="105" style="margin:0;padding:0;" width="480">
                      <a href="/" width="75" height="37" target="_blank">
                        <img src="https://${ourUrl}/logo.png" alt="${ourName}" alt="logo" title="logo" width="75" height="37" border="0" style="display:block; border:0;">
                      </a>
                    </td>
                    <td height="105" style="margin:0;padding:0;" width="60"></td>
                  </tr>
                </tbody>
              </table>`
