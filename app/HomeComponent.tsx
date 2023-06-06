"use client";

import Container from "./components/Container";
import Days from "./components/Days";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Sponsors from "./components/Sponsors23";
import Statistics from "./components/Statistics";
import { useSearchParams } from "next/navigation";
import { UserType } from "./types";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

interface Props {
  user: UserType | null;
  whitelisted: boolean;
}

const HomeComponent: React.FC<Props> = ({ user, whitelisted }) => {
  const toast = useToast();
  const params = useSearchParams();

  useEffect(() => {
    if (params?.get("error") === "OAuthAccountNotLinked") {
      toast({
        status: "error",
        isClosable: true,
        duration: 3000,
        title: "You cannot sign-in using Google!",
        description:
          "You have already created an account using SSO (email and password). Please try again using SSO.",
      });
    }
  }, [params]);

  return (
    <Container user={user} whitelisted={whitelisted}>
      <Head user={user} whitelisted={whitelisted} />
      <Statistics />
      <Sponsors />
      <Days />
      <Footer />
    </Container>
  );
};

export default HomeComponent;
