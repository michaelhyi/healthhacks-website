"use client";

import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-full overflow-hidden">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Container;
