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
