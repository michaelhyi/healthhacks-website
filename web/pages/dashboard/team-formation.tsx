import * as EmailValidator from "email-validator";
import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { useRouter } from "next/router";
import TitleDash from "../../components/dashboard/TitleDash";
import React, { useEffect, useState } from "react";
import TeamProfile from "../../components/TeamProfile";
import NavbarContainer from "../../components/dashboard/NavbarContainer";
import { createTeam, readParticipants } from "../../utils/helpers";
import { useToast } from "@chakra-ui/react";
import { UserType } from "../../utils/types";
import { TiPlus } from "react-icons/ti";
import moment from "moment";

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
        console.log(rows);
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
    setEmail("");
  };

  const handleSubmit = async () => {
    if (profiles!.length < 2) {
      toast({
        title: "Error!",
        description: "You must create a team of 2-4 participants.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
      return;
    }

    const row = {
      Timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      firstNameOne: profiles![0].firstName,
      lastNameOne: profiles![0].lastName,
      emailOne: profiles![0].email,
      firstNameTwo: profiles![1].firstName,
      lastNameTwo: profiles![1].lastName,
      emailTwo: profiles![1].email,
      firstNameThree: profiles![2] ? profiles![2].firstName : "",
      lastNameThree: profiles![2] ? profiles![2].lastName : "",
      emailThree: profiles![2] ? profiles![2].email : "",
      firstNameFour: profiles![3] ? profiles![3].firstName : "",
      lastNameFour: profiles![3] ? profiles![3].lastName : "",
      emailFour: profiles![3] ? profiles![3].email : "",
    };

    await createTeam(row);

    toast({
      title: "Team formed.",
      description: "We've registered your team.",
      status: "success",
      duration: 10000,
      isClosable: true,
    });
  };

  if (fetching) {
    return (
      <NavbarContainer>
        <></>
      </NavbarContainer>
    );
  }

  return (
    <NavbarContainer>
      <div className="m-8 lg:m-12 xl:m-16">
        <TitleDash title="Team Formation" />
        <div className="flex flex-col justify-center items-center m-4 lg:m-6 xl:m-8 2xl:m-auto 2xl:w-[50vw]">
          <div className="w-full xl:w-4/5 items-center">
            <div className="flex flex-row justify-center items-center space-between">
              <input
                className=" border-white bw-full lg:w-1/2 rounded-xl mr-4 h-full px-4 py-2 bg-[#202020] border-[1px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Add Team Member's Email"
              />
              <button
                onClick={handleQuery}
                className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-white text-black px-2 py-2 w-auto rounded-3xl text-xs lg:text-sm font-medium h-full"
              >
                <TiPlus size={20} />
              </button>
            </div>
            {error && error.length > 0 && (
              <div className="mt-2 font-poppins font-light text-red-400 text-xs text-center">
                {error}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-4 xl:gap-y-8 py-6 xl:py-8 w-full">
            {profiles?.map((v, i) => (
              <TeamProfile
                key={i}
                user={v}
                currentUser={user!}
                profiles={profiles}
                setProfiles={setProfiles}
              />
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-bold"
          >
            Register Team
          </button>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default App;
