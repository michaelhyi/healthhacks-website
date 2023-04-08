import { useToast } from "@chakra-ui/react";
import * as EmailValidator from "email-validator";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { socials } from "../../data/socials";

//@ts-ignore
import Fade from "react-reveal/Fade";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-50 mt-24 bg-hh-gray">
      <Fade up delay={500} distance="0px">
        <div className="flex justify-start items-center content-start flex-wrap flex-row text-left w-full 2xl:w-[1200px] -mb-2">
          <div className="p-4">
            <Link
              className="opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
              href="/dashboard">
              <img
                src="/health{hacks} - Logo.svg"
                alt="logo"
                className="md:w-[100px] w-[75px]"
              ></img>
            </Link>
          </div>
          <div className="text-xs text-[#aaa] invisible md:visible h-0 md:h-auto">
            © 2023 {`health{hacks}.`}    All Rights Reserved. <br />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full pb-2 px-2 md:p-2 md:pt-0">
          <div className="flex flex-row gap-x-2 text-xs md:text-sm">
            <div className="mt-4" />
            <Link
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
              href="/"
            >
              Home
            </Link>
            <br />
            <Link
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
              href="/about"
            >
              About
            </Link>
            <br />
            <Link
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
              href="/blog"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-wrap justify-end gap-8">
            <div className="gap-y-2">
              <div className="flex flex-row flex-wrap">
                {socials.map((s, i) => (
                  <div key={i} className="p-1">
                    <Fade delay={500}>
                      <a href={s.href} target="_blank" rel="noreferrer">
                        <img
                          src={s.src}
                          alt={s.id}
                          className="hover:cursor-pointer w-5 duration-500 hover:opacity-50 "
                        />
                      </a>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Fade >
    </div >
  );
};

export default Footer;
