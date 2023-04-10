import { GoogleSpreadsheet } from "google-spreadsheet";
import { AmbassadorRowType, RowType, TeamType } from "./types";

export const createTeam = async (row: TeamType) => {
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_TEAMS_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_TEAMS_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL =
    process.env.NEXT_PUBLIC_GOOGLE_BAY_AREA_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_BAY_AREA_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
};

export const readParticipants = async () => {
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_TEAMS_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_TEAMS_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL =
    process.env.NEXT_PUBLIC_GOOGLE_BAY_AREA_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_BAY_AREA_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    const rows = await sheet.getRows();
    return rows;
  } catch (e) {
    console.error("Error: ", e);
  }
};

export const appendApplicationSpreadsheet = async (row: RowType) => {
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_APPLICATION_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_APPLICATION_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL =
    process.env.NEXT_PUBLIC_APPLICATION_GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_APPLICATION_GOOGLE_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
};

export const appendAmbassadorRow = async (row: AmbassadorRowType) => {
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_2023_AMBASSADOR_SHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_2023_AMBASSADOR_SPREADSHEET_ID;
  const GOOGLE_CLIENT_EMAIL =
    process.env.NEXT_PUBLIC_APPLICATION_GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_APPLICATION_GOOGLE_SERVICE_PRIVATE_KEY;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL!,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID!];
    await sheet.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
};
