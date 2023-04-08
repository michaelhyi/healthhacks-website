import React from "react";
import ProfileGrid from "../../components/ProfileGrid";
import { useEffect, useState } from "react";
import NavbarContainer from "../../components/dashboard/NavbarContainer";

const App: React.FC = () => {
  return (
    <NavbarContainer>
      <ProfileGrid />
    </NavbarContainer>
  );
};

export default App;
