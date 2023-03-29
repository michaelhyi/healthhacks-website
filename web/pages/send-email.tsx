import { GoogleSpreadsheet } from "google-spreadsheet";
// const sgMail = require("@sendgrid/mail");
import { attendeeConfirmationHTML } from "../../server/src/utils/emails";
import { useRouter } from "next/router";
import { useEffect } from "react";

async function sendEmail() {
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_NEW_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_NEW_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_BAY_AREA_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_BAY_AREA_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();
    console.log("test");

    const sheet = await doc.sheetsById[SHEET_ID!];

    const rows = await sheet.getRows();
    const whitelistedRows = rows.filter((row) => (row.Status === "whitelisted" && row.ConfirmSent === "No"));
    const whitelistedEmails = whitelistedRows.slice(0,50).map((row) => row.Email);
    await whitelistedRows.map((row) => (row.ConfirmSent = "Yes"));
    await whitelistedRows.map((row) => (row.save()));

    console.log(whitelistedEmails);
  } catch (e) {
    console.error("Error: ", e);


  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   to: email,
  //   from: process.env.SENDGRID_EMAIL,
  //   subject: "health{hacks} 2023 Attendee Confirmation",
  //   html: attendeeConfirmationHTML,
  // };

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log("Email sent");
  //   })
  //   .catch((error: any) => {
  //     console.error(error);
  //   });

  // Authenticate with Google Sheets API


  }
}

const SendEmails = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // TO USE THIS LOCALLY, SET TO FALSE; WHEN SET TO TRUE ALWAYS
      if (true) {
        router.push("/404");
        return;
      } else {
        sendEmail();
      }
    })();
  }, []);

  return (
    <div>Email sent!</div>
  );
};

export default SendEmails;
