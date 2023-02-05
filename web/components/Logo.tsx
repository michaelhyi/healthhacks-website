import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50 flex items-center space-x-1"
    >
      <img src="/Official Logo.JPEG" className="h-[50px] w-[50px]" />
      <img src="/health{hacks} - Logo.svg" className="h-[25px]" />
    </Link>
  );
};
export default Logo;
