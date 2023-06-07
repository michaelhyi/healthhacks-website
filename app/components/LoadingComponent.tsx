"use client";

import { Spinner } from "@chakra-ui/react";
import ContainerApp from "../components/ContainerApp";

const LoadingComponent = () => {
  return (
    <ContainerApp>
      <Spinner
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
"
        color="white"
        size="md"
      />
    </ContainerApp>
  );
};

export default LoadingComponent;
