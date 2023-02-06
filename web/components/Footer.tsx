import { useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { GoogleSpreadsheet } from "google-spreadsheet";
import * as EmailValidator from "email-validator";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  // Config variables
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
  const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
  const GOOGLE_SERVICE_PRIVATE_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

  // GoogleSpreadsheet Initialize
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  // Append Function
  const appendSpreadsheet = async (row: { Email: string }) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL!,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID!];
      await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== "" && EmailValidator.validate(email)) {
      setError("");
      // Data add for append
      const newRow = {
        Email: email,
      };

      appendSpreadsheet(newRow);

      setEmail("");

      toast({
        title: "Subscribed!",
        description:
          "Welcome, and thank you for joining the health{hacks} mailing list! ",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } else {
      setError("Invalid email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-25 mt-24 pt-12">
      <Fade up delay={250} distance="12px">
        <div className="font-semibold lg:text-3xl xl:text-5xl pt-8">{`Build with us at health{hacks}.`}</div>
        <form
          onSubmit={submitForm}
          className="flex items-center pt-12 space-x-8"
        >
          <div className="flex flex-col text-left">
            <div className="flex items-center space-x-8">
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`placeholder-white bg-black border-2  ${
                  error && error.length > 0 ? "border-red-400" : "border-white"
                } p-4 rounded-2xl lg:w-[320px] xl:w-[384px]`}
              />
              <button className="hover:cursor-pointer duration-500 hover:opacity-50 flex items-center text-black bg-white px-8 py-4 rounded-[75px] font-semibold">
                Subscribe
              </button>
            </div>
            {error && error.length > 0 && (
              <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>
        </form>
        <div className="pt-12 pb-12">{`© 2023 health{hacks} All Rights Reserved.`}</div>
      </Fade>
    </div>
  );
};

export default Footer;
