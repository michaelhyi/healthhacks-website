import { withUrqlClient } from "next-urql";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import ContainerApp from "../../components/ContainerApp";
import Input from "../../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useForgotPasswordMutation } from "../../generated/graphql";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [, forgotPassword] = useForgotPasswordMutation();

  // ADDED CODE BY WILLIAM: From Chat GPT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length === 0) {
      setError("This is a required field.");
      return;
    }

    try {
      const response = await forgotPassword({ email });

      if (response.data?.forgotPassword.success) {
        router.push({
          pathname: "/forgot-password/success",
          query: {
            email,
          },
        });
      } else {
        setError(response.data?.forgotPassword.error!);
      }
    } catch (e) {
      console.error(e);
    }
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
                error={error}
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
