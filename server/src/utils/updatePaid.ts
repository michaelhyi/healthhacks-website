import { GoogleSpreadsheet } from "google-spreadsheet";

const updatePaid = async (email: string, paid: boolean) => {
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const SHEET_ID = process.env.SHEET_ID;
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
    const rows = await sheet.getRows();


    // Find the row with the unique email
    const rowToUpdate = rows.find((row) => row._rawData[4] === email);

    if (rowToUpdate) {
        // Update the 'paid' column for the specific row
        rowToUpdate._rawData[6] = paid;

        // Save the changes
        await rowToUpdate.save();
        console.log("Row updated successfully");
    } else {
        console.log("Email not found in the spreadsheet");
    }
  } catch (e) {
    console.error("Error: ", e);
  }
};

export default updatePaid;
