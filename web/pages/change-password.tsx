import Link from "next/link";
import ContainerApp from "../components/ContainerApp";
import Input from "../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { withUrqlClient } from "next-urql";
import { FormEvent, useContext, useState } from "react";
import { createUrqlClient } from "../utils/createUrqlClient";
import {
  useLoginMutation,
  useResendVerificationEmailMutation,
} from "../generated/graphql";
import Router, { useRouter } from "next/router";
import Context from "../utils/context";
import axios from "axios";
import { AiOutlineLeft } from "react-icons/ai";

const ChangePassword = () => {
  const router = useRouter();
  const { setUser } = useContext(Context);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [, login] = useLoginMutation();
  const [, resendVerificaitonEmail] = useResendVerificationEmailMutation();

  // ADDED CODE BY WILLIAM: From Chat GPT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await login({ email });
    if (!response.data?.login.error) {
      if (!response.data?.login.user?.verified) {
        await resendVerificaitonEmail({
          id: response!.data!.login.user!.id,
          email,
        });

        router.push({
          pathname: "/verify",
          query: {
            id: response.data?.login.user?.id,
            email,
          },
        });
      } else {
        await localStorage.setItem(
          "user",
          JSON.stringify(response.data!.login.user!)
        );
        setUser(response.data!.login.user!);
        router.push("/");
      }
    } else {
      if (response.data.login.error.field === "Email") {
        setEmailError(response.data.login.error.message);
      } else {
        setEmailError("");
      }
    }
  };

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
          {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
          <div className="flex flex-col items-center justify-center p-4 w-[100vw] h-[75vh]">
            <div className="mx-12 lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
              <div>
                <div className="font-bold text-3xl text-white">
                  Change Password
                </div>
                <div className="text-sm mt-4 font-medium text-white">
                  Enter a new password for 
                  {/* NOTE: Added email prop here to be displayed in change password form */}
                  <span className="text-hh-purple text-medium"> {email}.</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="mt-4">
                <Input
                  value={email}
                  setValue={setEmail}
                  label="New Password"
                  error={emailError}
                />
                <Input
                  value={email}
                  setValue={setEmail}
                  label="Confirm New Password"
                  error={emailError}
                />
                <div className="flex items-center mt-6 space-x-4">
                  <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>

      </Fade>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
