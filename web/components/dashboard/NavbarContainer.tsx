import React from "react";
import NavbarDash from "./NavbarDash";
import Footer from "./FooterDash";

//@ts-ignore
import Fade from "react-reveal/Fade";

interface Props {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-full overflow-hidden justify-between">
      <div>
        <NavbarDash />
        <Fade delay={500} up distance="24px">
          <div>{children}</div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default NavbarContainer;
