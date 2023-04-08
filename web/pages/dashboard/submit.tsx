import React from "react";
import PdfUploadComponent from "../../components/PdfUploadComponent";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import TitleDash from "../../components/dashboard/TitleDash";
import ApplicationInput from "@/components/ApplicationInput";
import { Spinner, useToast } from "@chakra-ui/react";

const App: React.FC = () => {
  const [presentation, setPresentation] = useState("");
  const [presentationError, setPresentationError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitting(false);
  };

  return (
    <NavbarContainer>
      <div className="m-8 lg:m-12 xl:m-16 2xl:m-auto 2xl:mt-16 2xl:w-[50vw]">
        <TitleDash title="Final Submission" />
        <h1 className="mb-2 font-semibold">Upload Your Final Presentation Slides</h1>
        <PdfUploadComponent />
        <div>
          <ApplicationInput
            value={presentation}
            error={presentationError}
            setValue={setPresentation}
            label="Team / Project Name"
          />
        </div>
        <div>
          <ApplicationInput
            textarea
            placeholder="We'd love to hear a short blurb about your project in a couple of sentences ..."
            value={description}
            error={descriptionError}
            setValue={setDescription}
            label="Description"
          />
        </div>
        <div className="flex items-center space-x-6 pt-6">
          <button
            onClick={handleSubmit}
            className={`hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium ${status === "Submitted"
                ? "pointer-events-none"
                : "pointer-events-auto"
              }`}
          >
            Submit
            {/* {submitting ? <Spinner size="xs" /> : "Submit"} */}
          </button>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default App;
