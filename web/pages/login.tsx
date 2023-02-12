import Link from "next/link";
import ContainerApp from "../components/ContainerApp";
import Input from "../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { withUrqlClient } from "next-urql";
import { useContext, useState } from "react";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useLoginMutation } from "../generated/graphql";
import Router, { useRouter } from "next/router";
import Context from "../utils/context";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, login] = useLoginMutation();


  // ADDED CODE BY WILLIAM: From Chat GPT
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/signin", {
        email,
        password,
      });

      if (response.data.error) {
        setEmailError(response.data.error);
      } else {
        Router.push("/dashboard");
      }
    } catch (error) {
      setEmailError("An error occurred while signing in. Please try again later.");
    }
  }


  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center pt-24">
          <div className="w-[50vw]">
            <div>
              <div className="font-semibold text-3xl">
                Welcome to {`health{hacks}`} 
              </div>
              <div className="text-sm mt-4 font-medium">
                Don't have an account?&nbsp;
                <Link
                  href="/register"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  Register
                </Link>
              </div>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await login({ email, password });
                if (!response.data?.login.error) {
                  await localStorage.setItem(
                    "user",
                    JSON.stringify(response.data!.login.user!)
                  );
                  setUser(response.data!.login.user!);
                  router.push("/");
                } else {
                  if (response.data.login.error.field === "Email") {
                    setEmailError(response.data.login.error.message);
                  } else {
                    setEmailError("");
                  }
                  if (response.data.login.error.field === "Password") {
                    setPasswordError(response.data.login.error.message);
                  } else {
                    setPasswordError("");
                  }
                }
              }}
              className="mt-4"
            >
              <Input
                value={email}
                setValue={setEmail}
                label="Email"
                error={emailError}
              />
              <Input
                value={password}
                setValue={setPassword}
                label="Password"
                error={passwordError}
              />
              <div className="flex items-center mt-6 space-x-4">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  Login
                </button>
                <div className="text-sm font-medium">
                  Forgot Password?&nbsp;
                  <Link
                    href="/login"
                    className="text-blue-400 hover:cursor-pointer duration-500 hover:opacity-50"
                  >
                    Click here
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

export default withUrqlClient(createUrqlClient)(Login);
