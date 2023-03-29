// pages/api/googlesheets.js
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

const auth = new GoogleAuth({
  keyFile: './googlesheets.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const spreadsheetId = process.env.NEXT_PUBLIC_NEW_SPREADSHEET_ID;
  const sheetName = process.env.NEXT_PUBLIC_PARTICIPANTS_SHEET_NAME;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: sheetName,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    res.status(500).json({ error: 'Error fetching sheet data' });
  }
}