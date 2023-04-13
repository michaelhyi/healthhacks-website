import ApplicationInput from "@/components/ApplicationInput";
import { Spinner, useToast } from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import TitleDash from "../../components/dashboard/TitleDash";
import { createProject } from "../../utils/helpers";
import { UserType } from "../../utils/types";

const App: React.FC = () => {
  const toast = useToast();
  const [presentation, setPresentation] = useState("");
  const [presentationError, setPresentationError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [driveLink, setDriveLink] = useState("");
  const [driveLinkError, setDriveLinkError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const router = useRouter();
  const [fetching, setFetching] = useState<boolean>(true);
  const [user, setUser] = useState<null | UserType>(null);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (!response) router.push("/login");
      else setUser(JSON.parse(response));
      setFetching(false);
    })();
  }, []);

  if (fetching) {
    return (
      <NavbarContainer>
        <></>
      </NavbarContainer>
    );
  }

  const handleSubmit = async () => {
    setSubmitting(true);

    const row = {
      Timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      Email: user!.email,
      googleDriveLink: driveLink,
      presentationName: presentation,
      Description: description,
    };
    await createProject(row);

    setDriveLink("");
    setPresentation("");
    setDescription("");

    toast({
      title: "Success!",
      description: "You have successfuly submitted your project!",
      status: "success",
      duration: 10000,
      isClosable: true,
    });

    setSubmitting(false);
  };

  return (
    <NavbarContainer>
      <div className="m-8 lg:m-12 xl:m-16 2xl:m-auto 2xl:mt-16 2xl:w-[50vw]">
        <TitleDash title="Final Submission" />
        <div>
          <ApplicationInput
            value={driveLink}
            error={driveLinkError}
            setValue={setDriveLink}
            label="Upload Your Final Presentation Slides"
            placeholder="Submit a Google Drive link"
          />
        </div>
        <div>
          <ApplicationInput
            value={presentation}
            error={presentationError}
            setValue={setPresentation}
            label="Team / Project Name"
            placeholder="Type your team/project name"
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
            className={`hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium ${
              status === "Submitted"
                ? "pointer-events-none"
                : "pointer-events-auto"
            }`}
          >
            {submitting ? <Spinner size="xs" /> : "Submit"}
          </button>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default App;
