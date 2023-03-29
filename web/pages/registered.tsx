import Link from "next/link";
import ContainerApp from "../components/ContainerApp";
import Input from "../components/Input";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

//@ts-ignore
import Fade from "react-reveal/Fade";

type SetStringValue = React.Dispatch<React.SetStateAction<string>>;

const OneTimeRegister = () => {
  const router = useRouter();

  const [sheetData, setSheetData] = useState([]);
  const [id, setId] = useState("");
  const [locked, setLocked] = useState(false);

  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [, register] = useRegisterMutation();

  const updateStringValue = (value: string | string[] | undefined, setValue : SetStringValue) => {
    if (!value){
        return ;
    }
    else if (Array.isArray(value)) {
      // Handle the case when value is a string array
      // You can use the first element or join the elements, depending on your use case
      setValue(value[0]);
    } else {
      // Set the value directly when it's a string
      setValue(value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/googlesheets');
      const data = await res.json();
      setSheetData(data.values);
    };
  
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady]);
  
  useEffect(() => {
    if (sheetData && router.isReady) {
      updateStringValue(router.query["id"], setId);
      if(router.query["id"]){
        //updates email, first, and last name
        //and locks those values
        for (const key in sheetData) {
            let currRow = sheetData[key];
            if (currRow[1] == id) {
                setLocked(true)
                updateStringValue(currRow[2], setEmail);
                updateStringValue(currRow[5], setFirstName);
                updateStringValue(currRow[6], setLastName);
            }
          }
      }
    }
  }, [sheetData, router.isReady]);
  
  useEffect(() => {
    const checkLocalStorage = async () => {
      const response = await localStorage.getItem("user");
      if (response) {
        setUser(JSON.parse(response));
        router.push("/");
      }
      setFetching(false);
    };
  
    checkLocalStorage();
  }, []);

  if (fetching) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

  if (!router.isReady) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }
  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center md:pt-16 sm:pt-8">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div>
              <div className="font-semibold text-3xl">
                {!locked ? "Let's Create An Account" : "Register for an account"}
              </div>
              <div className="mt-2 opacity-50 text-semibold text-sm">
                {`health{hacks}`} connects diverse creators to build the next
                innovations in healthcare.
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (password !== confirm) {
                  setConfirmError("Passwords must match!");
                } else {
                  setConfirmError("");
                  const response = await register({
                    firstName,
                    lastName,
                    email,
                    password,
                  });

                  if (!response.data?.register.error) {
                    router.push({
                      pathname: "/verify",
                      query: {
                        id: response.data?.register.user?.id,
                        email,
                      },
                    });
                  } else {
                    if (response.data.register.error.field === "First Name") {
                      setFirstNameError(response.data.register.error.message);
                    } else {
                      setFirstNameError("");
                    }

                    if (response.data.register.error.field === "Last Name") {
                      setLastNameError(response.data.register.error.message);
                    } else {
                      setLastNameError("");
                    }

                    if (response.data.register.error.field === "Email") {
                      setEmailError(response.data.register.error.message);
                    } else {
                      setEmailError("");
                    }

                    if (response.data.register.error.field === "Password") {
                      setPasswordError(response.data.register.error.message);
                    } else {
                      setPasswordError("");
                    }
                  }
                }
              }}
              className="mt-4"
            >
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <Input
                    error={firstNameError}
                    value={firstName}
                    readOnly={locked}
                    setValue={setFirstName}
                    label="First Name"
                  />
                </div>
                <div className="w-[50vw]">
                  <Input
                    error={lastNameError}
                    value={lastName}
                    readOnly={locked}
                    setValue={setLastName}
                    label="Last Name"
                  />
                </div>
              </div>
              <Input
                value={email}
                setValue={setEmail}
                label="Email"
                readOnly={locked}
                error={emailError}
              />
              <Input
                value={password}
                setValue={setPassword}
                label="Password"
                error={passwordError}
              />
              <Input
                value={confirm}
                setValue={setConfirm}
                label="Confirm Password"
                error={confirmError}
              />
              <div className="text-xs mt-6">
                By continuing you agree to the {`health{hacks}`}&nbsp;
                <Link
                  href="/terms-of-use"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  terms of service
                </Link>
                &nbsp;and&nbsp;
                <Link
                  href="/private-policy"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  privacy policy
                </Link>
                .
              </div>
              <div className="flex items-center mt-6 space-x-4 pb-8">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-medium">
                  Register
                </button>
                <div className="md:text-sm sm:text-xs">
                  Already Registered?&nbsp;
                  <Link
                    href="/login"
                    className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(OneTimeRegister);