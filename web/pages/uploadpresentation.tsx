import React from "react";
import PdfUploadComponent from "../components/PdfUploadComponent";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import Container from "../components/Container";

const App: React.FC = () => {
  const [presentation, setPresentation] = useState("");
  const [presentationError, setPresentationError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) setUser(JSON.parse(response));
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
      <h1>Upload a PDF File</h1>
      <PdfUploadComponent />
      <Input
        value={presentation}
        setValue={setPresentation}
        label="Name of Your Presentation"
        error={presentationError}
      />
      <Input
        value={description}
        setValue={setDescription}
        label="Description"
        error={descriptionError}
      />
    </Container>
  );
};

export default App;
