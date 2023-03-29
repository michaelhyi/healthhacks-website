"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_spreadsheet_1 = require("google-spreadsheet");
const updatePaid = async (email, paid) => {
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
        const rows = await sheet.getRows();
        const rowToUpdate = rows.find((row) => row._rawData[4] === email);
        if (rowToUpdate) {
            rowToUpdate._rawData[6] = paid;
            await rowToUpdate.save();
            console.log("Row updated successfully");
        }
        else {
            console.log("Email not found in the spreadsheet");
        }
    }
    catch (e) {
        console.error("Error: ", e);
    }
};
exports.default = updatePaid;
//# sourceMappingURL=updatePaid.js.map