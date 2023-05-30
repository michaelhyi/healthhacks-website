"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";

interface Props {
  error: string;
}

const VerifyFail: React.FC<Props> = ({ error }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center md:pb-16 md:pt-8 xl:pt-0 sm:pt-0 w-screen">
      <img
        className="md:w-[275px] sm:w-[200px] grayscale-[75%]"
        src="\circle1.png"
        alt="globe"
      />
      <div className="max-w-lg">
        <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
          {error === "User already verified."
            ? "User has already been verified!"
            : "Verification Failure..."}
        </h2>
        {error !== "User already verified." && (
          <>
            <p className="font-normal text-base px-8 pt-2  md:text-base  sm:text-sm">
              Looks like the verification link sent has expired or is invalid.
              <br />
              No worries, we can send the link again.
              <br />
            </p>
          </>
        )}

        <div className="flex md:items-center sm:items-start md:flex-row sm:flex-col px-8">
          {error === "User already verified." ? (
            <Link
              href="/"
              className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto md:ml-0 sm:mx-0 my-4 rounded-xl text-sm font-medium flex items-center"
            >
              <AiOutlineLeft />
              &nbsp;Home
            </Link>
          ) : (
            <button
              className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto md:ml-0 sm:mx-0 my-4 rounded-xl text-sm font-medium"
              type="button"
              onClick={() => router.push("/login")}
            >
              Return to Login
            </button>
          )}
          <p className="text-left font-medium content-center md:text-base sm:text-sm sm:mx-0 md:mx-6">
            Having trouble?{" "}
            <a
              href="mailto: info@joinhealthhacks.com"
              className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
            >
              Contact us.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyFail;
