import React from "react";
import ProfileGrid from "../components/ProfileGrid";
import { useEffect, useState } from "react";
import Container from "../components/Container";

const App: React.FC = () => {
  return (
    <Container>
      <ProfileGrid />
    </Container>
  );
};

export default App;
