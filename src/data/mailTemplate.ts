export const userMailTemplate = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Thanks for contacting P2msoultion.php</title>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; color:#0f1724; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <center style="width:100%; background-color:#ffffff; padding:24px 12px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; margin:0 auto;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:640px; margin:0 auto; border-radius:12px; overflow:hidden; background-color:#f7f7f9; text-align:center;">
            <!-- Logo -->
            <tr>
              <td style="padding:20px 0; text-align:center;">
                <img src="https://res.cloudinary.com/dnmqfgexi/image/upload/v1756924084/p2m-logo_cqbkrh_c0ni94.png" alt="P2msoultions.com" height="64" style="border-radius:8px; display:block; margin:0 auto;">
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:0 24px; text-align:center;">
                <h1 style="font-size:22px; margin:20px 0 12px 0; color:#0f1724;">Your message was sent successfully 🎉</h1>
                <p style="margin:0 0 12px 0; line-height:1.5; color:#6b7280; font-size:15px;">Hi <strong>{{name}}</strong> — thank you for contacting <strong>P2Msoultions</strong>. We received your message and our team will review it shortly.</p>
                <div style="border:1px solid rgba(0,0,0,0.04); border-radius:8px; padding:14px; color:#0f1724; margin:16px auto; display:inline-block; text-align:left; max-width:90%;">
                  <p style="margin:0 0 6px 0;"><strong>What happens next?</strong></p>
                  <p style="margin:0; line-height:1.45; color:#6b7280;">One of our team members will reply within 24–48 business hours. If your request is urgent, you can reply to this email or visit our contact page.</p>
                </div>
                <a href="https://p2msolutions.com/#contact" style="display:inline-block; padding:12px 24px; border-radius:8px; background:#2563eb; color:#ffffff; font-weight:600; text-decoration:none; margin:20px 0;">Contact us</a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:18px 24px; font-size:13px; color:#6b7280; text-align:center;">
                <p style="margin:0;">P2msoultions.com · <a href="https://p2msolutions.com/" style="color:#6b7280; text-decoration:underline;">Visit website</a></p>
                <p style="margin:4px 0 0 0;">If you didn’t contact us or this was a mistake, please reply to this email and let us know.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;