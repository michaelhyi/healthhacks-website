"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_spreadsheet_1 = require("google-spreadsheet");
const appendConfirmationSpreadsheet = async (crow) => {
    const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
    const SHEET_ID = process.env.SHEET_ID;
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
    const doc = new google_spreadsheet_1.GoogleSpreadsheet(SPREADSHEET_ID);
    try {
        await doc.useServiceAccountAuth({
            client_email: GOOGLE_CLIENT_EMAIL,
            private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        await sheet.addRow(crow);
    }
    catch (e) {
        console.error("Error: ", e);
    }
};
exports.default = appendConfirmationSpreadsheet;
//# sourceMappingURL=appendConfirmationSpreadsheet.js.map