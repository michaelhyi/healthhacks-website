import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Helmet from "../components/Helmet";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(window.location);
    if (window.location.host.split(".")[0] === "dashboard") {
      switch (window.location.pathname) {
        case "/":
          router.push("/dashboard");
          break;
        case "/submit":
          router.push("/dashboard/submit");
          break;
        case "/team-formation":
          router.push("/dashboard/team-formation");
          break;
      }
    }
  }, []);

  return (
    <ChakraProvider>
      <Helmet />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
