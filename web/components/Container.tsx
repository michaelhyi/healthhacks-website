import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Container;
