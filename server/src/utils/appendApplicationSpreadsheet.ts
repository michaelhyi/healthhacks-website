import { GoogleSpreadsheet } from "google-spreadsheet";

const appendApplicationSpreadsheet = async (row: {
  Timestamp: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Organization: string;
  City: string;
  State: string;
  InPerson: string;
  WholeEvent: string;
  Background: string;
  WhyUs: string;
  HowHear: string;
  Team: string;
  LinkedIn: string;
  DietaryRestrictions: string;
  Transportation: string;
  Other: string;
}) => {
  // Config variables
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const SHEET_ID = process.env.SHEET_ID;
  const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

  // GoogleSpreadsheet Initialize
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    console.log(row);
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    console.log(sheet);
    await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
};

export default appendApplicationSpreadsheet;
