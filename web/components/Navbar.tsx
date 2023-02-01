import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AiFillCaretDown, AiOutlineRight } from "react-icons/ai";
import Context from "../utils/context";

const Navbar = () => {
  const { user, setUser } = useContext(Context);
  const router = useRouter();

  return (
    <div className="flex items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Link
        href="/"
        className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50 flex items-center space-x-1"
      >
        <img src="/Official Logo.JPEG" className="h-[50px] w-[50px]" />
        <img src="/health{hacks} - Logo.svg" className="h-[25px]" />
      </Link>
      <div className="absolute left-0 right-0 justify-center mx-auto flex items-center space-x-4">
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          Explore
        </div>
        <Link
          href="/about"
          className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
        >
          About
        </Link>
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          Blog
        </div>
      </div>
      <div className="flex items-center space-x-8 absolute right-8">
        {user && (
          <Menu>
            <MenuButton>
              <div className="flex items-center space-x-2">
                <div>Hi {user.firstName}!</div>
                <AiFillCaretDown />
              </div>
            </MenuButton>
            <MenuList bg="black">
              <MenuItem
                bg="black"
                className="hover:opacity-50"
                onClick={async () => {
                  router.push("/application/0");
                }}
              >
                Application
              </MenuItem>
              <MenuItem
                bg="black"
                className="hover:opacity-50"
                onClick={async () => {
                  router.push("/");
                  await localStorage.removeItem("user");
                  setUser(undefined);
                }}
              >
                <div className="font-semibold text-red-400">Logout</div>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        {!user && (
          <>
            <Link
              href="/login"
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hover:cursor-pointer duration-500 hover:opacity-50"
            >
              <div className="flex space-x-1 items-center justify-center text-black bg-white py-3 px-6 rounded-3xl">
                <div className="font-semibold">Start Now</div>
                <div className="opacity-75">
                  <AiOutlineRight size={15} />
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
