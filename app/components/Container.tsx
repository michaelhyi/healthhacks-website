"use client";

import { UserType } from "../types";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  user?: UserType | null;
}

const Container: React.FC<Props> = ({ children, user }) => {
  return (
    <div className="flex flex-col bg-black text-white font-inter min-h-screen max-w-full overflow-hidden">
      <Navbar user={user} />
      <div>{children}</div>
    </div>
  );
};

export default Container;
