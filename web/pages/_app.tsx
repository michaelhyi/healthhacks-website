import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Helmet from "../components/Helmet";
import { useRouter } from "next/router";
import React, { useEffect } from "react";



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.host.split(".")[0] === "dashboard") {
      router.push("/dashboard");
    }
  }, []);

  return (
    <ChakraProvider>
      <Helmet />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
