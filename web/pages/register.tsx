import Link from "next/link";
import Container from "../components/Container";
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
  const [organization, setOrganization] = useState("");

  const [, register] = useRegisterMutation();

  return (
    <Container>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center pt-24">
          <div className="w-[17.5vw]">
            <div>
              <div className="font-semibold text-3xl">
                Let's Create An Account
              </div>
              <div className="mt-4 opacity-50 text-semibold text-sm">
                {`health{hacks}`} transforms recurring revenue into up-front
                capital for growth without restrictive debt or dilution.
              </div>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await register({
                  firstName,
                  lastName,
                  email,
                  password,
                  organization,
                });
                if (!response.data?.register.error) {
                  await localStorage.setItem(
                    "user",
                    JSON.stringify(response.data!.register.user!)
                  );
                  setUser(response.data!.register.user!);
                  router.push("/");
                }
              }}
              className="mt-4"
            >
              <div className="flex space-x-6">
                <div className="w-[20vw]">
                  <Input
                    value={firstName}
                    setValue={setFirstName}
                    label="First Name"
                  />
                </div>
                <div className="w-[20vw]">
                  <Input
                    value={lastName}
                    setValue={setLastName}
                    label="Last Name"
                  />
                </div>
              </div>
              <Input value={email} setValue={setEmail} label="Email" />
              <Input value={password} setValue={setPassword} label="Password" />
              <Input
                value={organization}
                setValue={setOrganization}
                label="Organization"
              />
              <div className="text-xs mt-6">
                By continuing you agree to the {`health{hacks}`}&nbsp;
                <Link
                  href="/"
                  className="text-blue-400 hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  terms of service
                </Link>
                &nbsp;and&nbsp;
                <Link
                  href="/"
                  className="text-blue-400 hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  privacy policy
                </Link>
                .
              </div>
              <div className="flex items-center mt-6 space-x-4">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-white text-black px-4 py-2 rounded-xl text-sm font-medium">
                  Register
                </button>
                <div className="text-sm">
                  Already Registered?&nbsp;
                  <Link
                    href="/login"
                    className="text-blue-400 hover:cursor-pointer duration-500 hover:opacity-50"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </Container>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
