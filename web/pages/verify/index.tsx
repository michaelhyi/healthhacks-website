import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ContainerApp from "@/components/ContainerApp";
//@ts-ignore
import Fade from "react-reveal/Fade";
import Context from "../../utils/context";
import { useResendVerificationEmailMutation } from "../../generated/graphql";

const Verify = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [, resendVerificationEmail] = useResendVerificationEmailMutation();

  const handleResendEmail = async () => {
    try {
      await resendVerificationEmail({
        id: parseInt(router.query.id!),
        email: router.query.email!,
      });
      setError("");
    } catch (error) {
      setError(
        "An error occurred while resending the verification email. Please try again later."
      );
    }
  };

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center md:pb-16 md:pt-8 xl:pt-0 sm:pt-0 w-screen">
          <img
            className="md:w-[275px] sm:w-[200px]"
            src="\circle1.png"
            alt="globe"
          />
          <div className="max-w-lg">
            <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
              Please verify your email.
            </h2>
            <p className="font-normal text-base px-8 pt-2  md:text-base  sm:text-sm">
              We have sent an email to <strong>{router.query.email!}</strong>.
              <br /> This can take a couple of minutes. Simply click the link to
              start your registration form.
            </p>
            <p className="font-normal text-base px-8 pt-4  md:text-base sm:text-sm">
              If you don't see it, make sure to also check your spam folder.
            </p>
            {error && <p className="error">{error}</p>}
            <div className="flex md:items-center sm:items-start md:flex-row sm:flex-col px-8">
              <button
                className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto md:ml-0 sm:mx-0 my-4 rounded-xl text-sm font-medium"
                type="button"
                onClick={handleResendEmail}
              >
                Resend Email
              </button>
              <p className="text-left font-medium content-center md:text-base sm:text-sm sm:mx-0 md:mx-6">
                Having trouble?{" "}
                <a
                  href="#"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  Contact us.
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default Verify;
