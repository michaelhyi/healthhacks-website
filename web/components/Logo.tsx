import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50 flex items-center space-x-1"
    >
      <img
        src="/Official Logo.JPEG"
        className="sm:h-[35px] sm:w-[35px] lg:h-[50px] lg:w-[50px]"
      />
      <img
        src="/health{hacks} - Logo.svg"
        className="sm:h-[15px] lg:h-[25px]"
      />
    </Link>
  );
};
export default Logo;
