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
import { states } from "../../data/states";
import Context from "../../utils/context";

const Application = () => {
  const router = useRouter();
  const { user } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [inPerson, setInPerson] = useState("");
  const [wholeEvent, setWholeEvent] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [organizationError, setOrganizationError] = useState("");

  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [inPersonError, setInPersonError] = useState("");
  const [wholeEventError, setWholeEventError] = useState("");

  return (
    <Container>
      <div className="flex flex-col items-center pt-24">
        {user ? (
          <div className="w-[50vw]">
            <div className="font-semibold text-3xl">Application</div>
            <form>
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <Input
                    error={firstNameError}
                    value={firstName}
                    setValue={setFirstName}
                    label="First Name"
                  />
                </div>
                <div className="w-[50vw]">
                  <Input
                    error={middleNameError}
                    value={middleName}
                    setValue={setMiddleName}
                    label="Middle Name"
                  />
                </div>
                <div className="w-[50vw]">
                  <Input
                    error={lastNameError}
                    value={lastName}
                    setValue={setLastName}
                    label="Last Name"
                  />
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <Input
                    error={phoneError}
                    value={phone}
                    setValue={setPhone}
                    label="Phone"
                  />
                </div>
                <div className="w-[50vw]">
                  <Input
                    error={organizationError}
                    value={organization}
                    setValue={setOrganization}
                    label="Organization"
                  />
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <Input
                    error={cityError}
                    value={city}
                    setValue={setCity}
                    label="City"
                  />
                </div>
                <div className="w-[50vw]">
                  <div className={`mt-4 mb-2 }`}>State</div>
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
                      {states.map((v) => (
                        <MenuItem onClick={() => setState(v)}>{v}</MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <div className={`mt-4 mb-2 }`}>Can you attend in-person?</div>
                  <RadioGroup onChange={setInPerson} value={inPerson}>
                    <div className="flex items-center space-x-4">
                      <Radio
                        value="Yes"
                        colorScheme="blue"
                        onClick={() => setInPerson("Yes")}
                      >
                        Yes
                      </Radio>
                      <Radio
                        value="No"
                        colorScheme="red"
                        onClick={() => setInPerson("No")}
                      >
                        No
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
                <div className="w-[50vw]">
                  <div className={`mt-4 mb-2 }`}>
                    Can you attend the whole event?
                  </div>
                  <RadioGroup onChange={setWholeEvent} value={wholeEvent}>
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
            </form>
            <button
              onClick={() => router.push("/application/disclaimer")}
              className="mt-6 mb-24 hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-blue-500 text-white px-6 py-4 rounded-xl text-sm font-bold"
            >
              Continue
            </button>
          </div>
        ) : (
          <div>You must be signed in</div>
        )}
      </div>
    </Container>
  );
};

export default Application;
