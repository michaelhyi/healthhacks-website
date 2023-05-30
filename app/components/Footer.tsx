"use client";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { socials } from "../data/socials";

const Footer = () => {
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { handleSubmit, register } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    await axios
      .post("/api/mailing-list", data)
      .then(() => {
        toast({
          title: "Success!",
          description:
            "You have successfully joined the health{hacks} mailing list!",
          isClosable: true,
          duration: 5000,
          status: "success",
        });
      })
      .catch((callback) => {
        toast({
          title: callback.response.data.error,
          isClosable: true,
          duration: 5000,
          status: "error",
        });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-50 mt-24 pt-12 bg-hh-gray">
      <div className="font-semibold sm:text-xl md:text-3xl xl:text-4xl pt-8">{`Build with us at health{hacks}.`}</div>
      <form
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
        className="flex items-center pt-6 space-x-8 "
      >
        <div className="flex flex-col text-left">
          <div className="flex items-center space-x-8 sm:space-x-4 sm:text-sm">
            <input
              id="email"
              disabled={submitting}
              {...register("email", { required: true })}
              placeholder="Email"
              type="text"
              className={`placeholder-white bg-black p-4 rounded-xl sm-[256px] md:w-[320px] xl:w-[384px]`}
            />
            <button className="hover:cursor-pointer duration-500 hover:opacity-90 flex items-center text-black bg-white px-8 py-4 rounded-[75px] font-semibold sm:text-sm">
              Subscribe
            </button>
          </div>
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
            <div className="mt-4" />
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
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <img
                      src={s.src}
                      alt={s.id}
                      className="w-8 hover:cursor-pointer sm:w-6 duration-500 hover:opacity-50 "
                    />
                  </a>
                </div>
              ))}
            </div>
            <h4 className="font-semibold sm:text-md md:text-base mt-4">
              Contact Us
            </h4>
            <a
              className="hover:cursor-pointer opacity-50 duration-500 hover:opacity-25"
              href="mailto:info@joinhealthhacks.com"
            >
              info@joinhealthhacks.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
