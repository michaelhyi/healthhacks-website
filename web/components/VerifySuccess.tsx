//@ts-ignore
import Fade from "react-reveal/Fade";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { sleep } from "../utils/sleep";
import Context from "../utils/context";

interface Props {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    verified: boolean;
  } | null;
}

const VerifySuccess: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const { setUser } = useContext(Context);

  useEffect(() => {
    (async () => {
      await localStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      await sleep(3000);

      router.push("/apply");
    })();
  }, []);

  return (
    <Fade delay={500} up distance="24px">
      <div className="flex flex-col items-center justify-center w-screen h-[80vh]">
        <img
          className="md:w-[275px] sm:w-[200px]"
          src="\circle2.png"
          alt="globe"
        />
        <div className="flex flex-col mt-8 px-6 items-center justify-center max-w-md  backdrop-blur-2xl backdrop-filter ">
          <h2 className="font-semibold text-3xl lg:text-4xl w-lg text-center ">
            Welcome to {`health{hacks}`}!
          </h2>
          <p className="font-normal text-base px-4 pt-4  md:text-base  sm:text-sm text-center text-hh-[#ccc]">
            Your account has been verified, and thank you for joining us in
            revolutionizing healthcare.
            <br />
            You will now be redirected to our application form.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default VerifySuccess;
