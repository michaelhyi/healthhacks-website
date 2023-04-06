import React from "react";
import Link from "next/link";

interface Props {
  page: string;
}

const NavbarLink: React.FC<Props> = ({ page }) => {
  return (
    <Link
      href={`/${page === "Explore" ? "" : page.toLowerCase()}`}
      className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-xs md:text-sm"
    >
      {page}
    </Link>
  );
};

export default NavbarLink;
