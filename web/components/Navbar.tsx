//@ts-ignore
import Fade from "react-reveal/Fade";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { useContext } from "react";
import Context from "../utils/context";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, setUser } = useContext(Context);
  const router = useRouter();

  return (
    <div className="flex items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Link
        href="/"
        className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50 flex items-center space-x-1"
      >
        <Fade up delay={250} distance="12px">
          <img src="/Official Logo.JPEG" className="h-[50px] w-[50px]" />
        </Fade>
        <Fade up delay={300} distance="12px">
          <div className="font-semibold text-xl">{`health{hacks}`}</div>
        </Fade>
      </Link>
      <div className="absolute left-0 right-0 justify-center mx-auto flex items-center space-x-4">
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          <Fade up delay={350} distance="12px">
            Explore
          </Fade>
        </div>
        <Link
          href="/about"
          className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
        >
          <Fade up delay={400} distance="12px">
            About
          </Fade>
        </Link>
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          <Fade up delay={450} distance="12px">
            Blog
          </Fade>
        </div>
      </div>
      <div className="flex items-center space-x-8 absolute right-8">
        {user && (
          <>
            <Fade up delay={500} distance="12px">
              <div>Hi {user.firstName}!</div>
            </Fade>
            <Fade up delay={550} distance="12px">
              <div
                onClick={async () => {
                  await localStorage.removeItem("user");
                  router.reload();
                  setUser(undefined);
                }}
                className="hover:cursor-pointer duration-500 hover:opacity-50 text-red-400"
              >
                Logout
              </div>
            </Fade>
          </>
        )}
        {!user && (
          <>
            <Link
              href="/login"
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
            >
              <Fade up delay={500} distance="12px">
                Login
              </Fade>
            </Link>
            <Link
              href="/register"
              className="hover:cursor-pointer duration-500 hover:opacity-50"
            >
              <Fade up delay={550} distance="12px">
                <div className="flex space-x-1 items-center justify-center text-black bg-white py-3 px-6 rounded-3xl">
                  <div className="font-semibold">Start Now</div>
                  <div className="opacity-75">
                    <AiOutlineRight size={15} />
                  </div>
                </div>
              </Fade>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
