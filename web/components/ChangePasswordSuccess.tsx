import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { sleep } from "../utils/sleep";

//@ts-ignore
import Fade from "react-reveal/Fade";

interface Props {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    verified: boolean;
  } | null;
}

const ChangePasswordSuccess: React.FC<Props> = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await localStorage.setItem("user", JSON.stringify(user));
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
            Your password has been successfully changed!
          </h2>
          <p className="font-normal text-base px-4 pt-4  md:text-base  sm:text-sm text-center text-hh-[#ccc]">
            You will now be redirected to our application form.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default ChangePasswordSuccess;
