declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: string;
      ORIGIN: string;
      GOOGLE_CLIENT_EMAIL: string;
      GOOGLE_SERVICE_PRIVATE_KEY: string;
      SPREADSHEET_ID: string;
      SPREADSHEET_ID: string;
      SENDGRID_API_KEY: string;
      SENDGRID_EMAIL: string;
    }
  }
}

export {}
