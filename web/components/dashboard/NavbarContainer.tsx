import React from "react";
import NavbarDash from "./NavbarDash";

interface Props {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-full overflow-hidden">
      <NavbarDash />
      <div>{children}</div>
    </div>
  );
};

export default NavbarContainer;
