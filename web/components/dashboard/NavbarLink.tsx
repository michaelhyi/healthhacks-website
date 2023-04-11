import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

interface Props {
  page: string;
}

const NavbarLink: React.FC<Props> = ({ page }) => {
  const router = useRouter();

  const isActive = router.pathname === `/dashboard/${page.toLowerCase()}`;

  return (
    <Link
      href={`/dashboard/${page.toLowerCase()}`}
    >
      <button className={`opacity-50 hover:cursor-pointer duration-500 hover:opacity-100 text-xs md:text-sm bg-hh-purple ${isActive ? "bg-hh-purple" : ""}`}>
        {page}
      </button>
    </Link>
  );
};

export default NavbarLink;
