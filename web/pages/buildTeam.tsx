import React from "react";
import ProfileGrid from "../components/ProfileGrid";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useRouter } from 'next/router'


const App: React.FC = () => {
  const router = useRouter()

  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response){
        setUser(JSON.parse(response));
      }else{
        router.push("/login")
      }
      setFetching(false);
    })();
  }, []);

  if (fetching)
    return (
      <Container>
        <></>
      </Container>
    );


  return (
    <Container>
      <ProfileGrid />
    </Container>
  );
};

export default App;
