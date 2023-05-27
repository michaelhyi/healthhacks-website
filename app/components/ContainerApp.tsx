"use client";

import NavbarApp from "./NavbarApp";

interface Props {
  children: React.ReactNode;
}

const ContainerApp: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-full overflow-hidden">
      <NavbarApp />
      <div>{children}</div>
    </div>
  );
};

export default ContainerApp;
