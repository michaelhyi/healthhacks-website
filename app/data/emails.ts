export const verifyHTML = (token: string) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZ0.woff2') format('woff2');
      }
    }
  </style>
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:620px) {
      .pc-sm-p-20 {
        padding: 20px !important
      }
      .pc-sm-p-35-30 {
        padding: 35px 30px !important
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:525px) {
      .pc-xs-p-10 {
        padding: 10px !important
      }
      .pc-xs-p-25-20 {
        padding: 25px 20px !important
      }
      .pc-xs-fs-30 {
        font-size: 30px !important
      }
      .pc-xs-lh-42 {
        line-height: 42px !important
      }
      .pc-xs-br-disabled br {
        display: none !important
      }
    }
  </style>
  <!--[if mso]>
    <style type="text/css">
        .pc-fb-font {
            font-family: Helvetica, Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4" class="">
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px; color: #151515;">Thank you for registering with us at health{hacks}! Verify your email here.</div>
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px;">
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <table class="pc-email-body" width="100%" bgcolor="#f4f4f4" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed;">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" align="center" valign="top">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; max-width: 620px;">
            <tbody>
              <tr>
                <td align="left" valign="top" style="padding: 0 10px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- BEGIN MODULE: Menu 1 -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-20 pc-xs-p-10" bgcolor="#000000" valign="top" style="padding: 25px 30px; background-color: #000000; border-radius: 8px">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" style="padding: 10px;">
                                  <a href="http://joinhealthhacks.com" style="text-decoration: none;"><img src="https://www.joinhealthhacks.com/healthhacks-Email-Logo.png" width="279" height="60" alt="" style="max-width: 100%; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff; font-size: 14px"></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Menu 1 -->
                  <!-- BEGIN MODULE: Call to Action 2 -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 40px; background-color: #ffffff; border-radius: 8px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font" style="font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 900; line-height: 46px; letter-spacing: -0.6px; color: #151515; text-align: center" valign="top">Verify your email</td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 28px; color: #1B1B1B; letter-spacing: -0.2px" valign="top" align="center">In order to start your health{hacks} application, you must verify your email.&nbsp;</td>
                              </tr>
                              <tr>
                                <td height="15" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td style="padding: 5px 0;" valign="top" align="center">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td style="padding: 13px 17px; border-radius: 8px; background-color: #8d58b0" bgcolor="#8d58b0" valign="top" align="center">
                                          <a href="${
                                            process.env.NODE_ENV ===
                                            "development"
                                              ? "http://localhost:3000"
                                              : "https://joinhealthhacks.com"
                                          }/verify/${token}" style="line-height: 1.5; text-decoration: none; word-break: break-word; font-weight: 500; display: block; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff">Verify</a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td height="15" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 300; line-height: 28px; color: #9B9B9B; text-align: center" valign="top">If you did not sign up for this account, you can ignore this email and your account will be deleted.</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Call to Action 2 -->
                  <!-- BEGIN MODULE: Menu 1 -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-20 pc-xs-p-10" bgcolor="#1B1B1B" valign="top" style="padding: 25px 30px; background-color: #1B1B1B; border-radius: 8px;">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td align="center" valign="top">
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td valign="middle" style="padding: 10px;">
                                          <a href="https://twitter.com/joinhealthhacks" style="text-decoration: none;"><img src="https://www.joinhealthhacks.com/socials/twitter.png" width="16" height="14" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff;"></a>
                                        </td>
                                        <td valign="middle" style="padding: 10px;">
                                          <a href="https://www.instagram.com/joinhealthhacks/" style="text-decoration: none;"><img src="https://www.joinhealthhacks.com/socials/instagram.png" width="16" height="15" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff;"></a>
                                        </td>
                                        <td valign="middle" style="padding: 10px;">
                                          <a href="https://www.linkedin.com/company/health-hacks/" style="text-decoration: none;"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" width="16" height="15" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff;"></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Menu 1 -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>`;
};

export const applicationConfirmationHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <title></title>
    <style type="text/css">
      @media screen {
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 800;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZ0.woff2")
              format("woff2");
        }
      }
    </style>
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      .ReadMsgBody,
      .ExternalClass {
        width: 100%;
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass td,
      .ExternalClass div,
      .ExternalClass span,
      .ExternalClass font {
        line-height: 100%;
      }

      div[style*="margin: 14px 0"],
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      table,
      td {
        mso-table-lspace: 0;
        mso-table-rspace: 0;
      }

      table,
      tr,
      td {
        border-collapse: collapse;
      }

      body,
      td,
      th,
      p,
      div,
      li,
      a,
      span {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        mso-line-height-rule: exactly;
      }

      img {
        border: 0;
        outline: none;
        line-height: 100%;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        -webkit-font-smoothing: antialiased;
      }

      .pc-gmail-fix {
        display: none;
        display: none !important;
      }

      @media screen and (min-width: 621px) {
        .pc-email-container {
          width: 620px !important;
        }
      }
    </style>
    <style type="text/css">
      @media screen and (max-width: 620px) {
        .pc-sm-p-20 {
          padding: 20px !important;
        }
        .pc-sm-p-35-30 {
          padding: 35px 30px !important;
        }
      }
    </style>
    <style type="text/css">
      @media screen and (max-width: 525px) {
        .pc-xs-p-10 {
          padding: 10px !important;
        }
        .pc-xs-p-25-20 {
          padding: 25px 20px !important;
        }
        .pc-xs-fs-30 {
          font-size: 30px !important;
        }
        .pc-xs-lh-42 {
          line-height: 42px !important;
        }
        .pc-xs-br-disabled br {
          display: none !important;
        }
      }
    </style>
    <!--[if mso]>
      <style type="text/css">
        .pc-fb-font {
          font-family: Helvetica, Arial, sans-serif !important;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
  </head>
  <body
    style="
      width: 100% !important;
      margin: 0;
      padding: 0;
      mso-line-height-rule: exactly;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background-color: #f4f4f4;
    "
    class=""
  >
    <div
      style="
        display: none !important;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        height: 0;
        width: 0;
        max-height: 0;
        max-width: 0;
        font-size: 1px;
        line-height: 1px;
        color: #151515;
      "
    >
      Thank you for applying to health{hacks} 2023! Here's your application confirmation.
    </div>
    <div
      style="
        display: none !important;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        height: 0;
        width: 0;
        max-height: 0;
        max-width: 0;
        font-size: 1px;
        line-height: 1px;
      "
    >
      ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
    </div>
    <table
      class="pc-email-body"
      width="100%"
      bgcolor="#f4f4f4"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="table-layout: fixed"
    >
      <tbody>
        <tr>
          <td class="pc-email-body-inner" align="center" valign="top">
            <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4" />
              </v:background>
            <![endif]-->
            <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
            <table
              class="pc-email-container"
              width="100%"
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin: 0 auto; max-width: 620px"
            >
              <tbody>
                <tr>
                  <td align="left" valign="top" style="padding: 0 10px">
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="20"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- BEGIN MODULE: Menu 1 -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="pc-sm-p-20 pc-xs-p-10"
                            bgcolor="#000000"
                            valign="top"
                            style="
                              padding: 25px 30px;
                              background-color: #000000;
                              border-radius: 8px;
                            "
                          >
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    style="padding: 10px"
                                  >
                                    <a
                                      href="http://joinhealthhacks.com"
                                      style="text-decoration: none"
                                      ><img
                                        src="https://www.joinhealthhacks.com/healthhacks-Email-Logo.png"
                                        width="279"
                                        height="60"
                                        alt=""
                                        style="
                                          max-width: 100%;
                                          border: 0;
                                          line-height: 100%;
                                          outline: 0;
                                          -ms-interpolation-mode: bicubic;
                                          color: #ffffff;
                                          font-size: 14px;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END MODULE: Menu 1 -->
                    <!-- BEGIN MODULE: Call to Action 2 -->
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="8"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class=""
                            style="
                              padding: 60px 40px;
                              background-color: #ffffff;
                              border-radius: 8px;
                            "
                            valign="top"
                            bgcolor="#ffffff"
                            pc-default-class="pc-sm-p-35-30 pc-xs-p-25-20"
                            pc-default-padding="40px"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font"
                                    style="
                                      font-family: 'Inter', Helvetica, Arial,
                                        sans-serif;
                                      font-size: 36px;
                                      font-weight: 900;
                                      line-height: 46px;
                                      letter-spacing: -0.6px;
                                      color: #151515;
                                      text-align: center;
                                    "
                                    valign="top"
                                  >
                                    Application Confirmation
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    height="10"
                                    style="font-size: 1px; line-height: 1px"
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                              <tbody>
                                <tr>
                                  <td
                                    class="pc-fb-font"
                                    style="
                                      font-family: 'Inter', Helvetica, Arial,
                                        sans-serif;
                                      font-size: 18px;
                                      font-weight: 300;
                                      line-height: 28px;
                                      color: #1b1b1b;
                                      letter-spacing: -0.2px;
                                    "
                                    valign="top"
                                    align="center"
                                  >
                                    Thank you for applying to health{hacks}! We
                                    will get back to your shortly regarding the
                                    status of your application.&nbsp;
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    height="15"
                                    style="font-size: 1px; line-height: 1px"
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                              <tbody></tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END MODULE: Call to Action 2 -->
                    <!-- BEGIN MODULE: Menu 1 -->
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="8"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="pc-sm-p-20 pc-xs-p-10"
                            bgcolor="#1B1B1B"
                            valign="top"
                            style="
                              padding: 25px 30px;
                              background-color: #1b1b1b;
                              border-radius: 8px;
                            "
                          >
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td align="center" valign="top">
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            valign="middle"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://twitter.com/joinhealthhacks"
                                              style="text-decoration: none"
                                              ><img
                                                src="http://joinhealthhacks.com/socials/twitter.png"
                                                width="16"
                                                height="14"
                                                alt=""
                                                style="
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="middle"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://www.instagram.com/joinhealthhacks/"
                                              style="text-decoration: none"
                                              ><img
                                                src="http://joinhealthhacks.com/socials/instagram.png"
                                                width="16"
                                                height="15"
                                                alt=""
                                                style="
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="middle"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://www.linkedin.com/company/health-hacks/"
                                              style="text-decoration: none"
                                              ><img
                                                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"
                                                width="16"
                                                height="15"
                                                alt=""
                                                style="
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                "
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END MODULE: Menu 1 -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="20"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Fix for Gmail on iOS -->
    <div
      class="pc-gmail-fix"
      style="white-space: nowrap; font: 15px courier; line-height: 0"
    >
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  </body>
</html>
`;

export const rsvpConfirmationHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <title></title>
    <style type="text/css">
      @media screen {
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 800;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZ0.woff2")
              format("woff2");
        }
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          src: url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZs.woff")
              format("woff"),
            url("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZ0.woff2")
              format("woff2");
        }
      }
    </style>
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      .ReadMsgBody,
      .ExternalClass {
        width: 100%;
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass td,
      .ExternalClass div,
      .ExternalClass span,
      .ExternalClass font {
        line-height: 100%;
      }

      div[style*="margin: 14px 0"],
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      table,
      td {
        mso-table-lspace: 0;
        mso-table-rspace: 0;
      }

      table,
      tr,
      td {
        border-collapse: collapse;
      }

      body,
      td,
      th,
      p,
      div,
      li,
      a,
      span {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        mso-line-height-rule: exactly;
      }

      img {
        border: 0;
        outline: none;
        line-height: 100%;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        -webkit-font-smoothing: antialiased;
      }

      .pc-gmail-fix {
        display: none;
        display: none !important;
      }

      @media screen and (min-width: 621px) {
        .pc-email-container {
          width: 620px !important;
        }
      }
    </style>
    <style type="text/css">
      @media screen and (max-width: 620px) {
        .pc-sm-p-20 {
          padding: 20px !important;
        }
        .pc-sm-p-35-30 {
          padding: 35px 30px !important;
        }
      }
    </style>
    <style type="text/css">
      @media screen and (max-width: 525px) {
        .pc-xs-p-10 {
          padding: 10px !important;
        }
        .pc-xs-p-25-20 {
          padding: 25px 20px !important;
        }
        .pc-xs-fs-30 {
          font-size: 30px !important;
        }
        .pc-xs-lh-42 {
          line-height: 42px !important;
        }
        .pc-xs-br-disabled br {
          display: none !important;
        }
      }
    </style>
    <!--[if mso]>
      <style type="text/css">
        .pc-fb-font {
          font-family: Helvetica, Arial, sans-serif !important;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
  </head>
  <body
    style="
      width: 100% !important;
      margin: 0;
      padding: 0;
      mso-line-height-rule: exactly;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background-color: #f4f4f4;
    "
    class=""
  >
    <div
      style="
        display: none !important;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        height: 0;
        width: 0;
        max-height: 0;
        max-width: 0;
        font-size: 1px;
        line-height: 1px;
        color: #151515;
      "
    >
      Thank you for your RSVP to health{hacks} 2023! Here's your RSVP confirmation.
    </div>
    <div
      style="
        display: none !important;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        height: 0;
        width: 0;
        max-height: 0;
        max-width: 0;
        font-size: 1px;
        line-height: 1px;
      "
    >
      ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
    </div>
    <table
      class="pc-email-body"
      width="100%"
      bgcolor="#f4f4f4"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="table-layout: fixed"
    >
      <tbody>
        <tr>
          <td class="pc-email-body-inner" align="center" valign="top">
            <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4" />
              </v:background>
            <![endif]-->
            <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
            <table
              class="pc-email-container"
              width="100%"
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin: 0 auto; max-width: 620px"
            >
              <tbody>
                <tr>
                  <td align="left" valign="top" style="padding: 0 10px">
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="20"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- BEGIN MODULE: Menu 1 -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="pc-sm-p-20 pc-xs-p-10"
                            bgcolor="#000000"
                            valign="top"
                            style="
                              padding: 25px 30px;
                              background-color: #000000;
                              border-radius: 8px;
                            "
                          >
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    style="padding: 10px"
                                  >
                                    <a
                                      href="http://joinhealthhacks.com"
                                      style="text-decoration: none"
                                      ><img
                                        src="https://www.joinhealthhacks.com/healthhacks-Email-Logo.png"
                                        width="279"
                                        height="60"
                                        alt=""
                                        style="
                                          max-width: 100%;
                                          border: 0;
                                          line-height: 100%;
                                          outline: 0;
                                          -ms-interpolation-mode: bicubic;
                                          color: #ffffff;
                                          font-size: 14px;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END MODULE: Menu 1 -->
                    <!-- BEGIN MODULE: Call to Action 2 -->
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="8"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class=""
                            style="
                              padding: 60px 40px;
                              background-color: #ffffff;
                              border-radius: 8px;
                            "
                            valign="top"
                            bgcolor="#ffffff"
                            pc-default-class="pc-sm-p-35-30 pc-xs-p-25-20"
                            pc-default-padding="40px"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font"
                                    style="
                                      font-family: 'Inter', Helvetica, Arial,
                                        sans-serif;
                                      font-size: 36px;
                                      font-weight: 900;
                                      line-height: 46px;
                                      letter-spacing: -0.6px;
                                      color: #151515;
                                      text-align: center;
                                    "
                                    valign="top"
                                  >
                                    RSVP Confirmation
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    height="10"
                                    style="font-size: 1px; line-height: 1px"
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                              <tbody>
                                <tr>
                                  <td
                                    class="pc-fb-font"
                                    style="
                                      font-family: 'Inter', Helvetica, Arial,
                                        sans-serif;
                                      font-size: 18px;
                                      font-weight: 300;
                                      line-height: 28px;
                                      color: #1b1b1b;
                                      letter-spacing: -0.2px;
                                    "
                                    valign="top"
                                    align="center"
                                  >
                                    Thank you for your RSVP to health{hacks}! Please look out for any emails as the event approaches, and be sure to keep up with our social media!
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    height="15"
                                    style="font-size: 1px; line-height: 1px"
                                  >
                                    &nbsp;
                                  </td>
                                </tr>
                              </tbody>
                              <tbody></tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END MODULE: Call to Action 2 -->
                    <!-- BEGIN MODULE: Menu 1 -->
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="8"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="pc-sm-p-20 pc-xs-p-10"
                            bgcolor="#1B1B1B"
                            valign="top"
                            style="
                              padding: 25px 30px;
                              background-color: #1b1b1b;
                              border-radius: 8px;
                            "
                          >
                            <table
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                            >
                              <tbody>
                                <tr>
                                  <td align="center" valign="top">
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            valign="middle"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://twitter.com/joinhealthhacks"
                                              style="text-decoration: none"
                                              ><img
                                                src="http://joinhealthhacks.com/socials/twitter.png"
                                                width="16"
                                                height="14"
                                                alt=""
                                                style="
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="middle"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://www.instagram.com/joinhealthhacks/"
                                              style="text-decoration: none"
                                              ><img
                                                src="http://joinhealthhacks.com/socials/instagram.png"
                                                width="16"
                                                height="15"
                                                alt=""
                                                style="
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                "
                                            /></a>
                                          </td>
                                          <td
                                            valign="middle"
                                            style="padding: 10px"
                                          >
                                            <a
                                              href="https://www.linkedin.com/company/health-hacks/"
                                              style="text-decoration: none"
                                              ><img
                                                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"
                                                width="16"
                                                height="15"
                                                alt=""
                                                style="
                                                  border: 0;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  color: #ffffff;
                                                "
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- END MODULE: Menu 1 -->
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="20"
                            style="font-size: 1px; line-height: 1px"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Fix for Gmail on iOS -->
    <div
      class="pc-gmail-fix"
      style="white-space: nowrap; font: 15px courier; line-height: 0"
    >
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
  </body>
</html>
`;

export const forgotPaswordHTML = (token: string) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZ0.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZs.woff') format('woff'), url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZ0.woff2') format('woff2');
      }
    }
  </style>
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:620px) {
      .pc-sm-p-20 {
        padding: 20px !important
      }
      .pc-sm-p-35-30 {
        padding: 35px 30px !important
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:525px) {
      .pc-xs-p-10 {
        padding: 10px !important
      }
      .pc-xs-p-25-20 {
        padding: 25px 20px !important
      }
      .pc-xs-fs-30 {
        font-size: 30px !important
      }
      .pc-xs-lh-42 {
        line-height: 42px !important
      }
      .pc-xs-br-disabled br {
        display: none !important
      }
    }
  </style>
  <!--[if mso]>
    <style type="text/css">
        .pc-fb-font {
            font-family: Helvetica, Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4" class="">
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px; color: #151515;">Reset your health{hacks} password here.</div>
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px;">
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <table class="pc-email-body" width="100%" bgcolor="#f4f4f4" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed;">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" align="center" valign="top">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; max-width: 620px;">
            <tbody>
              <tr>
                <td align="left" valign="top" style="padding: 0 10px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- BEGIN MODULE: Menu 1 -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-20 pc-xs-p-10" bgcolor="#000000" valign="top" style="padding: 25px 30px; background-color: #000000; border-radius: 8px">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" style="padding: 10px;">
                                  <a href="http://joinhealthhacks.com" style="text-decoration: none;"><img src="https://www.joinhealthhacks.com/healthhacks-Email-Logo.png" width="279" height="60" alt="" style="max-width: 100%; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff; font-size: 14px"></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Menu 1 -->
                  <!-- BEGIN MODULE: Call to Action 2 -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-35-30 pc-xs-p-25-20" style="padding: 40px; background-color: #ffffff; border-radius: 8px;" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font" style="font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 900; line-height: 46px; letter-spacing: -0.6px; color: #151515; text-align: center" valign="top">Change your password</td>
                              </tr>
                              <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 28px; color: #1B1B1B; letter-spacing: -0.2px" valign="top" align="center">Forget your password? Update it here:&nbsp;</td>
                              </tr>
                              <tr>
                                <td height="15" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td style="padding: 5px 0;" valign="top" align="center">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td style="padding: 13px 17px; border-radius: 8px; background-color: #8d58b0" bgcolor="#8d58b0" valign="top" align="center">
                                          <a href="${
                                            process.env.NODE_ENV ===
                                            "development"
                                              ? "http://localhost:3000"
                                              : "https://joinhealthhacks.com"
                                          }/change-password/${token}" style="line-height: 1.5; text-decoration: none; word-break: break-word; font-weight: 500; display: block; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff">Change Password</a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Call to Action 2 -->
                  <!-- BEGIN MODULE: Menu 1 -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-20 pc-xs-p-10" bgcolor="#1B1B1B" valign="top" style="padding: 25px 30px; background-color: #1B1B1B; border-radius: 8px;">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td align="center" valign="top">
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td valign="middle" style="padding: 10px;">
                                          <a href="https://twitter.com/joinhealthhacks" style="text-decoration: none;"><img src="https://www.joinhealthhacks.com/socials/twitter.png" width="16" height="14" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff;"></a>
                                        </td>
                                        <td valign="middle" style="padding: 10px;">
                                          <a href="https://www.instagram.com/joinhealthhacks/" style="text-decoration: none;"><img src="https://www.joinhealthhacks.com/socials/instagram.png" width="16" height="15" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff;"></a>
                                        </td>
                                        <td valign="middle" style="padding: 10px;">
                                          <a href="https://www.linkedin.com/company/health-hacks/" style="text-decoration: none;"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" width="16" height="15" alt="" style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff;"></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Menu 1 -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>`;
};
