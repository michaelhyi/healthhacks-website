import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link as SmoothLink } from "react-scroll";
import Logo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";

const NavbarDash = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  const isHome = router.pathname === `/dashboard`;
  const isTeam = router.pathname === `/dashboard/team-formation`;
  const isSubmit = router.pathname === `/dashboard/submit`;

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) setUser(JSON.parse(response));
      setFetching(false);
    })();
  }, []);

  if (fetching) return <></>;

  return (
    <div className="flex justify-between flex-row items-center p-4 pb-3 w-full sticky top-0 z-50 bg-hh-gray border-b-[0.5px] border-white border-opacity-50">
      <div className="flex flex-col">
        <Logo />
        <div className="mx-auto flex flex-row space-x-2 justify-center z-[2000] mt-2">
          <Link
            href="/dashboard"
            className={`hover:cursor-pointer duration-500 hover:${!isHome ? "bg-[#333]" : ""} sm:text-sm md:text-base h-full justify-center py-[2px] px-2 rounded-3xl ${isHome ? "bg-hh-purple" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/dashboard/team-formation"
            className={`hover:cursor-pointer duration-500 hover:${!isTeam ? "bg-[#333]" : ""} sm:text-sm md:text-base h-full justify-center py-[2px] px-2 rounded-3xl ${isTeam ? "bg-hh-purple" : ""}`}
          >
            Team
          </Link>
          <Link
            href="/dashboard/submit"
            className={`hover:cursor-pointer duration-500 hover:${!isSubmit ? "bg-[#333]" : ""} sm:text-sm md:text-base h-full justify-center py-[2px] px-2 rounded-3xl ${isSubmit ? "bg-hh-purple" : ""}`}
          >
            Submit
          </Link>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <button
          className="text-center bg-white text-black px-4 py-2 w-auto rounded-3xl text-xs md:text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75"
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
      </div>
    </div>
  );
};

export default NavbarDash;
