import { GoogleSpreadsheet } from "google-spreadsheet";
import { CRowType } from "./types";

const appendConfirmationSpreadsheet = async (crow: CRowType) => {
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const SHEET_ID = process.env.CONFIRMATION_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    await sheet.addRow(crow);
  } catch (e) {
    console.error("Error: ", e);
  }
};

export default appendConfirmationSpreadsheet;