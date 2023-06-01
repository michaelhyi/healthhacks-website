"use client";

import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { UserType } from "../types";

//@ts-ignore
import Fade from "react-reveal/Fade";

interface Props {
  user?: UserType | null;
}

const Head: React.FC<Props> = ({ user }) => {
  return (
    <Fade delay={500} up distance="25px">
      <div className="flex flex-col items-center justify-center pt-12 p-4 pb-16 bg-[url('/headergradient.svg')] bg-cover">
        <Fade delay={500} up distance="25px">
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 2xl:bg-opacity-0" />
          <div className="relative flex flex-col items-center">
            <img
              className="sm:w-[384px] md:w-[512px] xl:w-[640px] 2xl:w-[680px] -mt-8"
              src="/health{hacks} - Website Header.PNG"
            />
            <div className="absolute bottom-6 sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center sm:w-[450px] lg:w-[620px] xl:w-[640px] 2xl:w-[768px] sm:px-8">
              Assembling the future innovators of medicine.
            </div>
          </div>
        </Fade>
        <div className="flex flex-col items-center">
          <Fade delay={500} up distance="25px">
            <div className="pt-8 font-regular sm:text-sm md:text-md lg:text-lg sm:w-[384px] md:w-[512px] 2xl:w-[600px] text-center text-[#aaa] sm:px-4 sm:leading-tight md:leading-tight lg:leading-tight -mt-10">
              {`health{hacks} invites the most empathy-driven and diverse creators to revolutionize healthcare for 48 hours`}
            </div>
          </Fade>
          <Link href={`${user ? "/apply" : "/login"}`}>
            <div className="hover:cursor-pointer duration-500 hover:opacity-70">
              <Fade delay={500} up distance="25px">
                <div className="mt-6 flex space-x-1 items-center justify-center text-black bg-white py-3 px-6 rounded-3xl">
                  <div className="font-semibold">Start Now</div>
                  <div className="opacity-75">
                    <AiOutlineRight size={15} />
                  </div>
                </div>
              </Fade>
            </div>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default Head;
