"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Link as SmoothLink } from "react-scroll";
import Logo from "./Logo";
import NavbarLink from "./NavbarLink";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  return (
    <div className="flex justify-between sm:flex-col sm:space-y-12 md:space-y-0 md:flex-row items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Logo />

      {/* Pages on Navbar */}
      <div className="absolute left-0 right-0 justify-center mx-auto flex items-center sm:space-x-2  md:space-x-4 z-[-1000]">
        {pathname === "/" ? (
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
        <NavbarLink page="Blog" />
      </div>
      <UserMenu />
    </div>
  );
};

export default Navbar;
