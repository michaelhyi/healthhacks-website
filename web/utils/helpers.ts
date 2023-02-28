import { GoogleSpreadsheet } from "google-spreadsheet";
import { RowType } from "./types";

export const appendApplicationSpreadsheet = async (row: RowType) => {
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_APPLICATION_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_APPLICATION_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL =
    process.env.NEXT_PUBLIC_APPLICATION_GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_APPLICATION_GOOGLE_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    console.log(row);
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    console.log(sheet);
    await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
};
