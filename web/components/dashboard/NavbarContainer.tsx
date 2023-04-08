import React from "react";
import NavbarDash from "./NavbarDash";
import Footer from "./FooterDash";

interface Props {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-full overflow-hidden justify-between">
      <div>
        <NavbarDash />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default NavbarContainer;
