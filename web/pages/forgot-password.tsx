import Link from "next/link";
import ContainerApp from "../components/ContainerApp";
import Input from "../components/Input";
import * as EmailValidator from "email-validator";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
//@ts-ignore
import Fade from "react-reveal/Fade";
import {
  useLoginMutation,
  useResendVerificationEmailMutation,
} from "../generated/graphql";
import Context from "../utils/context";
import { createUrqlClient } from "../utils/createUrqlClient";

const ForgotPassword = () => {
  const router = useRouter();
  const { setUser } = useContext(Context);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [, login] = useLoginMutation();
  const [, resendVerificaitonEmail] = useResendVerificationEmailMutation();

  // ADDED CODE BY WILLIAM: From Chat GPT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EmailValidator.validate(email)) {
      setEmailError("Invalid email.");
    } else {
    }

    try {
    } catch (e) {}
  };

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
        <div className="flex flex-col items-center justify-center p-4 w-[100vw] h-[75vh]">
          <div className="mx-12">
            <div>
              <div className="font-bold text-3xl text-white">
                Forgot Your Password?
              </div>
              <div className="text-sm mt-4 font-medium text-white">
                Please enter the email address and we'll send you a link to
                reset your password.
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <Input
                value={email}
                setValue={setEmail}
                label="Email"
                error={emailError}
              />
              <div className="flex items-center mt-6 space-x-4">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  Get New Password
                </button>
                <div className="text-sm font-medium text-white">
                  <Link
                    href="/login"
                    className="flex flex-row justify-center items-center text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                  >
                    <AiOutlineLeft />
                    &nbsp;Back to Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
