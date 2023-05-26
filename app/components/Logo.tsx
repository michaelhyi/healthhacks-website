"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50 flex items-center space-x-2"
    >
      <img
        src="/icon.JPEG"
        className="sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px]"
      />
      <img
        src="/health{hacks} - Logo.svg"
        className="sm:h-[15px] lg:h-[25px]"
      />
    </Link>
  );
};
export default Logo;
