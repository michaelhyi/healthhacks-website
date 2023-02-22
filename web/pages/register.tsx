import Link from "next/link";
import ContainerApp from "../components/ContainerApp";
import Input from "../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { useContext, useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Context from "../utils/context";

const Register = () => {
  const router = useRouter();
  const { setUser } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [result, register] = useRegisterMutation();

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center md:pt-16 sm:pt-8">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div>
              <div className="font-semibold text-3xl">
                Let's Create An Account
              </div>
              <div className="mt-2 opacity-50 text-semibold text-sm">
                {`health{hacks}`} connects diverse creators to build the next
                innovations in healthcare.
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (password !== confirm) {
                  setConfirmError("Passwords must match!");
                } else {
                  setConfirmError("");
                  const response = await register({
                    firstName,
                    lastName,
                    email,
                    password,
                  });

                  if (!response.data?.register.error) {
                    router.push({
                      pathname: "/verify",
                      query: {
                        id: response.data?.register.user?.id,
                        email,
                      },
                    });
                  } else {
                    if (response.data.register.error.field === "First Name") {
                      setFirstNameError(response.data.register.error.message);
                    } else {
                      setFirstNameError("");
                    }

                    if (response.data.register.error.field === "Last Name") {
                      setLastNameError(response.data.register.error.message);
                    } else {
                      setLastNameError("");
                    }

                    if (response.data.register.error.field === "Email") {
                      setEmailError(response.data.register.error.message);
                    } else {
                      setEmailError("");
                    }

                    if (response.data.register.error.field === "Password") {
                      setPasswordError(response.data.register.error.message);
                    } else {
                      setPasswordError("");
                    }
                  }
                }
              }}
              className="mt-4"
            >
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <Input
                    error={firstNameError}
                    value={firstName}
                    setValue={setFirstName}
                    label="First Name"
                  />
                </div>
                <div className="w-[50vw]">
                  <Input
                    error={lastNameError}
                    value={lastName}
                    setValue={setLastName}
                    label="Last Name"
                  />
                </div>
              </div>
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
              <Input
                value={confirm}
                setValue={setConfirm}
                label="Confirm Password"
                error={confirmError}
              />
              <div className="text-xs mt-6">
                By continuing you agree to the {`health{hacks}`}&nbsp;
                <Link
                  href="/"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  terms of service
                </Link>
                &nbsp;and&nbsp;
                <Link
                  href="/"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  privacy policy
                </Link>
                .
              </div>
              <div className="flex items-center mt-6 space-x-4 pb-8">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-medium">
                  Register
                </button>
                <div className="md:text-sm sm:text-xs">
                  Already Registered?&nbsp;
                  <Link
                    href="/login"
                    className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                  >
                    Sign In
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

export default withUrqlClient(createUrqlClient)(Register);
