import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  return (
    <div className="flex flex-col items-center justify-center text-center border-t-[0.5px] border-white border-opacity-25 mt-24 pt-12">
      <div className="font-semibold text-5xl pt-8">{`Build with us at health{hacks}.`}</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setEmail("");

          toast({
            title: "Subscribed!",
            description:
              "Welcome, and thank you for joining the health{hacks} mailing list! ",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
        }}
        className="flex pt-12 space-x-8 h-[7.5vh]"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="placeholder-white bg-black border-2 border-white p-4 rounded-2xl w-[20vw]"
        />
        <button className="hover:cursor-pointer duration-500 hover:opacity-50 flex items-center text-black bg-white px-8 rounded-[75px] font-semibold">
          Subscribe
        </button>
      </form>
      <div className="pt-16 pb-12">{`© 2023 health{hacks} All Rights Reserved.`}</div>
    </div>
  );
};

export default Footer;
