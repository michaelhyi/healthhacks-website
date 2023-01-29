import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import Context from "../utils/context";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>
      <ChakraProvider>
        <Helmet />
        <Component {...pageProps} />
      </ChakraProvider>
    </Context.Provider>
  );
}
