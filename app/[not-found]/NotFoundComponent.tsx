"use client";

import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import Container from "../components/Container";

const NotFoundComponent = () => {
  return (
    <Container>
      <div className="flex flex-row h-[60vh] lg:h-[85vh] justify-center bg-black">
        <div className="flex flex-col items-center lg:items-start justify-center p-4 w-[100vw] lg:w-1/2 px-0 lg:px-20">
          <h1 className="font-bold text-6xl">404</h1>

          <div className="font-light text-[#ccc] text-sm mt-4">
            The page you are looking for cannot be found.
          </div>
          <Link
            href="/"
            className="flex flex-row justify-center items-center text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-3xl text-sm font-bold opacity-100 hover:cursor-pointer duration-500 hover:opacity-75 mt-8"
          >
            Return Home
          </Link>
        </div>
        <div className=" flex w-0 lg:w-1/2 md:m-0 bg-[url('/blog/blogbackground.png')] bg-cover items-center justify-center invisible lg:visible bg-center shadow-404" />
      </div>
    </Container>
  );
};

export default NotFoundComponent;
