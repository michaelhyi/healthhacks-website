import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50 flex items-center space-x-2"
    >
      <img
        src="/Official Logo.JPEG"
        className="h-[20px] md:h-[25px]"
      />
      <img
        src="/health{hacks} - Logo.svg"
        className="h-[15px] md:h-[20px]"
      />
    </Link>
  );
};
export default Logo;
