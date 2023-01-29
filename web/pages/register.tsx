import Link from "next/link";
import Container from "../components/Container";
import Input from "../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";

const Register = () => {
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
              }}
              className="mt-4"
            >
              <div className="flex space-x-6">
                <div className="w-[20vw]">
                  <Input label="First Name" />
                </div>
                <div className="w-[20vw]">
                  <Input label="Last Name" />
                </div>
              </div>
              <Input label="Email" />
              <Input label="Password" />
              <Input label="Organization" />
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
                    href="/"
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

export default Register;
