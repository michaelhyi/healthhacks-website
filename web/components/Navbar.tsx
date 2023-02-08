import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Link as SmoothLink } from "react-scroll";
import { AiFillCaretDown, AiOutlineRight } from "react-icons/ai";
import Context from "../utils/context";
import Logo from "./Logo";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const { user, setUser } = useContext(Context);
  const router = useRouter();

  return (
    <div className="flex sm:h-[256px sm:flex-col sm:space-y-12 md:space-y-0 md:flex-row items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Logo />
      <div className="absolute left-0 right-0 justify-center mx-auto flex items-center sm:space-x-2  md:space-x-4 ">
        {router.pathname === "/" ? (
          <SmoothLink
            to="explore"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 sm:text-sm md:text-base">
              Explore
            </div>
          </SmoothLink>
        ) : (
          <NavbarLink page="Explore" />
        )}
        <NavbarLink page="About" />
        {/* <NavbarLink page="Blog" /> */}
      </div>
      <div className="flex items-center space-x-8 sm:opacity-0 sm:pointer-events-none md:opacity-100 md:pointer-events-auto md:absolute md:right-8">
        {/* {user && (
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
                  router.push(`/application/0`);
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
        )} */}
        {/* {!user && ( */}
        <>
          {/* <Link
              href="/login"
              className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hover:cursor-pointer duration-500 hover:opacity-50"
            > */}
          <a
            href="https://forms.gle/NUiwgzowasc6GjGv5"
            target="_blank"
            rel="noreferrer"
            className="hover:cursor-pointer duration-500 hover:opacity-50 flex space-x-1 items-center justify-center text-black bg-white py-3 px-6 rounded-3xl"
          >
            <div className="font-semibold">Start Now</div>
            <div className="opacity-75">
              <AiOutlineRight size={15} />
            </div>
          </a>
          {/* </Link> */}
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
