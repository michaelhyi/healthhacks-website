import { useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { GoogleSpreadsheet } from "google-spreadsheet";
import * as EmailValidator from "email-validator";
import { socials } from "../data/socials";
import Link from "next/link";

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
      console.log(sheet);
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
    <div className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-50 mt-24 pt-12 bg-hh-gray">
      <Fade up delay={500} distance="12px">
        <div className="font-semibold sm:text-xl md:text-3xl xl:text-4xl pt-8">{`Build with us at health{hacks}.`}</div>
        <form
          onSubmit={submitForm}
          className="flex items-center pt-6 space-x-8 "
        >
          <div className="flex flex-col text-left">
            <div className="flex items-center space-x-8 sm:space-x-4 sm:text-sm">
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                // border-2
                className={`placeholder-white bg-black  ${
                  error && error.length > 0 ? "border-red-400" : "border-white"
                } p-4 rounded-xl sm-[256px] md:w-[320px] xl:w-[384px]`}
              />
              <button className="hover:cursor-pointer duration-500 hover:opacity-90 flex items-center text-black bg-white px-8 py-4 rounded-[75px] font-semibold sm:text-sm">
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
        <div className="flex justify-between content-start flex-wrap flex-row w-full text-left gap-y-2 -mt-4 pt-8 px-16 sm:px-8 2xl:w-[1200px]">
          <div className="w-2/5 mt-8 md:p-4 sm:p-0">
            <img
              src="/health{hacks} - Logo.svg"
              alt="logo"
              className="w-[250px] sm:w-[150px]"
            ></img>
            <div className="pb-12 pt-2 sm:text-sm">
              © 2023 {`health{hacks}`} <br />
              All Rights Reserved. <br />
              <Link
                className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 sm:text-sm"
                href="/private-policy"
              >
                Private Policy
              </Link>
              <br />
              <Link
                className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 sm:text-sm"
                href="/terms-of-use"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-8 mt-8 md:p-4 sm:p-0 w-2/5">
            {/* <div className="cursor-pointer">
              <h1></h1>
              <a href="LINK"> <p>Explore</p> </a>
              <a href="LINK"> <p>About</p> </a>
              <a href="LINK"> <p>Register</p> </a>
            </div> */}
            <div className="gap-y-2">
              <h4 className="font-semibold sm:text-md md:text-base">Social</h4>
              <div className="flex flex-row flex-wrap">
                {socials.map((s, i) => (
                  <div key={i} className="p-1">
                    <Fade delay={500}>
                      <a href={s.href} target="_blank" rel="noreferrer">
                        <img
                          src={s.src}
                          alt={s.id}
                          className="w-8 hover:cursor-pointer sm:w-6 duration-500 hover:opacity-50 "
                        />
                      </a>
                    </Fade>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold sm:text-md md:text-base mt-4">
                Mail
              </h4>
              <a
                className="hover:cursor-pointer duration-500 hover:opacity-50"
                href="mailto:info@joinhealthhacks.com"
              >
                info@joinhealthhacks.com
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
