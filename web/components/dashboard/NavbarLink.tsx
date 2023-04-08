import React from "react";
import Link from "next/link";

interface Props {
  page: string;
}

const NavbarLink: React.FC<Props> = ({ page }) => {
  return (
    // <Link
    //   href={`/dashboard/${page.toLowerCase()}`}
    // >
      <button className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-xs md:text-sm">
        {page}
      </button>
    // </Link>
  );
};

export default NavbarLink;
