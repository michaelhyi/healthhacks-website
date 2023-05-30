"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { sleep } from "../utils/sleep";

const VerifySuccess = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await sleep(3000);
      router.push("/login");
    })();
  }, []);

  return (
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
          You will now be redirected to our login page.
        </p>
      </div>
    </div>
  );
};

export default VerifySuccess;
