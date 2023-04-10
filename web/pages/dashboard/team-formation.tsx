import * as EmailValidator from "email-validator";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import TeamProfile from "../../components/TeamProfile";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import { readParticipants } from "../../utils/helpers";
import { useToast } from "@chakra-ui/react";
import { UserType } from "../../utils/types";

const App: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [profiles, setProfiles] = useState<
    | null
    | {
        firstName: string;
        lastName: string;
        email: string;
      }[]
  >(null);
  const [user, setUser] = useState<null | UserType>(null);
  const [data, setData] = useState<null | GoogleSpreadsheetRow[]>(null);
  const [fetching, setFetching] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (!response) {
        router.push("/login");
      } else {
        const user = JSON.parse(response);
        setUser(user);
        setProfiles([user]);
        const rows = await readParticipants();
        const track = rows!.find((v) => v._rawData[0] === user.email);
        setData(rows!.filter((v) => v._rawData[3] === track!._rawData[3]));
        setFetching(false);
      }
    })();
  }, []);

  const handleQuery = async () => {
    if (profiles!.length === 4) {
      toast({
        title: "Error!",
        description: "You cannot add more than 4 participants to your team!",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      return;
    }
    if (email.length === 0) {
      toast({
        title: "Error!",
        description: "You must enter an email!",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    const user = data!.find((v) => v._rawData[0] === email);

    if (!EmailValidator.validate(email) || !user) {
      setError(
        "Email is invalid, does not exist, or the participant is under a different track."
      );
      toast({
        title: "Error!",
        description:
          "Email is invalid, does not exist, or the participant is under a different track.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    if (profiles?.find((v) => v.email === user._rawData[0])) {
      toast({
        title: "Error!",
        description: "You already added this participant.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    setProfiles([
      ...profiles!,
      {
        firstName: user._rawData[1],
        lastName: user._rawData[2],
        email: user._rawData[0],
      },
    ]);
  };

  const handleSubmit = () => {
    if (profiles!.length < 2) {
      toast({
        title: "Error!",
        description: "You must create a team of 2-4 participants.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };

  if (fetching) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

  return (
    <NavbarContainer>
      <div className="grid grid-cols-2 gap-12 p-12">
        {profiles?.map((v) => (
          <TeamProfile
            user={v}
            currentUser={user!}
            profiles={profiles}
            setProfiles={setProfiles}
          />
        ))}
      </div>
      <div>
        <input
          className="bg-black border-white border-[1px] rounded-lg mr-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleQuery}
          className="hover:cursor-pointer duration-500 hover:opacity-50"
        >
          Submit
        </button>
        {error && error.length > 0 && (
          <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
            {error}
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-48 bg-white text-black p-12 rounded-xl"
      >
        SUBMIT TEAM
      </button>
    </NavbarContainer>
  );
};

export default App;
