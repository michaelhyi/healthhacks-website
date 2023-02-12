import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Container from "../../components/Container";
import Input from "../../components/Input";
import TrackRanking from "../../components/TrackRanking";
import Context from "../../utils/context";

const Application = () => {
  const router = useRouter();
  const user = useContext(Context);

  const [whyUs, setWhyUs] = useState("");
  const [howHear, setHowHear] = useState("");
  const [team, setTeam] = useState<string>("");
  const [linkedin, setLinkedin] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const [whyUsError, setWhyUsError] = useState("");
  const [howHearError, setHowHearError] = useState("");
  const [teamError, setTeamError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [dietaryRestrictionsError, setDietaryRestrictionsError] = useState("");

  return (
    <Container>
      <div className="flex flex-col items-center">
        {user ? (
          <div className="w-[50vw] pt-24">
            <div className="font-semibold text-3xl">Application</div>
            <form className="w-[50vw]">
              <div className={`mt-4 mb-2 }`}>What is your background?</div>
              <Menu>
                <MenuButton as={Button} color="black" bg="white">
                  <div className="flex items-center space-x-2">
                    <div>Select</div>
                    <AiFillCaretDown />
                  </div>
                </MenuButton>
                <MenuList
                  color="black"
                  overflowY={"scroll"}
                  zIndex="dropdown"
                  maxHeight={"60vh"}
                >
                  <MenuItem>
                    Doctor / Physician / Nurse / Healthcare Worker
                  </MenuItem>
                  <MenuItem>
                    Computer Science / Machine Learning / Systems
                  </MenuItem>
                  <MenuItem>Biomedical / Biotechnology</MenuItem>
                  <MenuItem>Engineering</MenuItem>
                  <MenuItem>Patient / Family Member of Patient</MenuItem>
                  <MenuItem>Graduate</MenuItem>
                  <MenuItem>MBA</MenuItem>
                  <MenuItem>Undergraduate</MenuItem>
                  <MenuItem>High School Student</MenuItem>
                  <MenuItem>Other</MenuItem>
                </MenuList>
              </Menu>
              <Input
                textarea
                label="Why do you want to attend health{hacks} 2023?"
                value={whyUs}
                setValue={setWhyUs}
                error={whyUsError}
              />
              <TrackRanking />
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <div className={`mt-4 mb-2 }`}>
                    How did you hear about {`health{hacks}`}?
                  </div>
                  <Menu>
                    <MenuButton as={Button} color="black" bg="white">
                      <div className="flex items-center space-x-2">
                        <div>Select</div>
                        <AiFillCaretDown />
                      </div>
                    </MenuButton>
                    <MenuList
                      color="black"
                      overflowY={"scroll"}
                      zIndex="dropdown"
                      maxHeight={"60vh"}
                    >
                      <MenuItem>Linkedin</MenuItem>
                      <MenuItem>Email</MenuItem>
                      <MenuItem>Twitter</MenuItem>
                      <MenuItem>Instagram</MenuItem>
                      <MenuItem>A Friend</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <div className="w-[50vw]">
                  <div className={`mt-4 mb-2 }`}>Do you have a team?</div>
                  <RadioGroup onChange={setTeam} value={team}>
                    <div className="flex items-center space-x-4">
                      <Radio value="Yes" colorScheme="blue">
                        Yes
                      </Radio>
                      <Radio value="No" colorScheme="red">
                        No
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-[50vw]">
                  <Input
                    label="Link to Linkedin"
                    value={linkedin}
                    setValue={setLinkedin}
                    error={linkedinError}
                  />
                </div>
                <div className="w-[50vw]">
                  <div className={`mt-4 mb-2 }`}>
                    What is the best way to contact you?
                  </div>
                  <Menu>
                    <MenuButton as={Button} color="black" bg="white">
                      <div className="flex items-center space-x-2">
                        <div>Select</div>
                        <AiFillCaretDown />
                      </div>
                    </MenuButton>
                    <MenuList
                      color="black"
                      overflowY={"scroll"}
                      zIndex="dropdown"
                      maxHeight={"60vh"}
                    >
                      <MenuItem>Phone</MenuItem>
                      <MenuItem>Email</MenuItem>
                      <MenuItem>Other</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
              <Input
                value={dietaryRestrictions}
                setValue={setDietaryRestrictions}
                error={dietaryRestrictionsError}
                label="Please explain any dietary restrictions."
              />
              <Input
                value={dietaryRestrictions}
                setValue={setDietaryRestrictions}
                error={dietaryRestrictionsError}
                label="Anything else you want to tell us?"
              />
            </form>
            <div className="flex items-center space-x-6 pt-6 pb-24">
              <button
                onClick={() => router.replace("/application/0")}
                className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-white text-black px-6 py-4 rounded-xl text-sm font-bold"
              >
                Back
              </button>
              <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-blue-500 text-white px-6 py-4 rounded-xl text-sm font-bold">
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>You must be signed in</div>
        )}
      </div>
    </Container>
  );
};

export default Application;
