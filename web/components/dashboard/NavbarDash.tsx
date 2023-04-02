import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link as SmoothLink } from "react-scroll";
import Logo from "../Logo";
import NavbarLink from "../NavbarLink";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) setUser(JSON.parse(response));
      setFetching(false);
    })();
  }, []);

  if (fetching) return <></>;

  return (
    <div className="flex justify-between sm:flex-col sm:space-y-12 md:space-y-0 md:flex-row items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Logo />

      {/* Pages on Navbar */}
      <div className="absolute left-0 right-0 justify-center mx-auto flex items-center sm:space-x-2  md:space-x-4 z-[-1000]">
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
          <NavbarLink page="Home" />
        )}
        <NavbarLink page="Team" />
        <NavbarLink page="Submit" />
      </div>

      <div className="flex flex-row gap-4">
        {user && (
          <>
            <button
              className="text-center bg-white text-black px-6 py-3 w-auto rounded-3xl text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
              onClick={async () => {
                await localStorage.removeItem("user");

                if (router.pathname === "/") {
                  router.reload();
                } else {
                  router.push("/");
                }
              }}
            >
              Log Out
            </button>
            <Link
              href="/apply"
              className="opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
            >
              <button className="text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-3xl text-sm font-bold">
                Start Now
              </button>
            </Link>
          </>

          // <Menu>
          //   <MenuButton>
          //     <div className="flex items-center space-x-2">
          //       <div>Hi {user.firstName}!</div>
          //       <AiFillCaretDown />
          //     </div>
          //   </MenuButton>
          //   <MenuList bg="black">
          //     <MenuItem
          //       bg="black"
          //       className="hover:opacity-50"
          //       onClick={async () => {
          //         router.push(`/application/0`);
          //       }}
          //     >
          //       Application
          //     </MenuItem>
          //     <MenuItem
          //       bg="black"
          //       className="hover:opacity-50"
          //       onClick={async () => {
          //         router.push("/");
          //         await localStorage.removeItem("user");
          //         setUser(null);
          //       }}
          //     >
          //       <div className="font-semibold text-red-400">Logout</div>
          //     </MenuItem>
          //   </MenuList>
          // </Menu>
        )}
        {!user && (
          <>
            {/* Login Button */}
            <Link
              href="/login"
              className="opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
            >
              <button className="text-center bg-white text-black px-6 py-3 w-auto rounded-3xl text-sm font-bold">
                Login
              </button>
            </Link>

            {/* Register Button */}
            <Link
              href="/register"
              className="opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
            >
              <button className="text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-3xl text-sm font-bold">
                Start Now
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;