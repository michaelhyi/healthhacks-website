import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Helmet from "../components/Helmet";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Helmet />
      <Component {...pageProps} />
    </>
  );
}
