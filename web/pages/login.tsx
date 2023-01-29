import Link from "next/link";
import Container from "../components/Container";
import Input from "../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { withUrqlClient } from "next-urql";
import { useContext, useState } from "react";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useLoginMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import Context from "../utils/context";

const Login = () => {
  const router = useRouter();
  const { setUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useLoginMutation();

  return (
    <Container>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center pt-24">
          <div className="w-[17.5vw]">
            <div>
              <div className="font-semibold text-3xl">
                Let's Log Into Your Account
              </div>
              <div className="mt-4 opacity-50 text-semibold text-sm">
                {`health{hacks}`} transforms recurring revenue into up-front
                capital for growth without restrictive debt or dilution.
              </div>
              <div className="text-sm mt-4">
                Don't have an account?&nbsp;
                <Link
                  href="/register"
                  className="text-blue-400 hover:cursor-pointer duration-500 hover:opacity-50"
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
                }
              }}
              className="mt-4"
            >
              <Input value={email} setValue={setEmail} label="Email" />
              <Input value={password} setValue={setPassword} label="Password" />
              <div className="flex items-center mt-6 space-x-4">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-white text-black px-4 py-2 rounded-xl text-sm font-medium">
                  Login
                </button>
                <div className="text-sm">
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
    </Container>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
