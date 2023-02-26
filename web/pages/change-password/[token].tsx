import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import ContainerApp from "../../components/ContainerApp";
import Input from "../../components/Input";
//@ts-ignore
import Fade from "react-reveal/Fade";
import ChangePasswordFail from "../../components/ChangePasswordFail";
import ChangePasswordSuccess from "../../components/ChangePasswordSuccess";
import {
  useReadTokenValidityQuery,
  useUpdatePasswordMutation,
} from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const ChangePassword = () => {
  const router = useRouter();
  const [, updatePassword] = useUpdatePasswordMutation();
  const [{ data, fetching }] = useReadTokenValidityQuery({
    variables: {
      token: router.query.token as string,
    },
  });

  const [user, setUser] = useState<null | {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    verified: boolean;
  }>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length === 0) {
      setPasswordError("This is a required field.");
      return;
    } else {
      setPasswordError("");
    }

    if (confirmPassword.length === 0) {
      setConfirmPasswordError("This is a required field.");
      return;
    } else {
      setConfirmPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords must match.");
      return;
    } else {
      setConfirmPasswordError("");
    }

    try {
      const response = await updatePassword({
        token: router.query.token as string,
        password,
      });

      setUser({
        id: response.data?.updatePassword.id!,
        firstName: response.data?.updatePassword.firstName!,
        lastName: response.data?.updatePassword.lastName!,
        email: response.data?.updatePassword.email!,
        verified: response.data?.updatePassword.verified!,
      });
      setSuccess(true);
    } catch (e) {
      console.error(e);
    }
  };

  if (success) {
    return (
      <ContainerApp>
        <ChangePasswordSuccess user={user} />
      </ContainerApp>
    );
  }

  if (!data && fetching) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

  if (!fetching && !data?.readTokenValidity.success) {
    return (
      <ContainerApp>
        <ChangePasswordFail />
      </ContainerApp>
    );
  }

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
        <div className="flex flex-col items-center justify-center p-4 w-[100vw] h-[75vh]">
          <div className="mx-12 lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div>
              <div className="font-bold text-3xl text-white">
                Change Password
              </div>
              <div className="text-sm mt-4 font-medium text-white">
                Enter a new password for
                {/* NOTE: Added email prop here to be displayed in change password form */}
                <span className="text-hh-purple text-medium">
                  {" "}
                  {data?.readTokenValidity.email as string}.
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <Input
                value={password}
                setValue={setPassword}
                label="New Password"
                error={passwordError}
              />
              <Input
                value={confirmPassword}
                setValue={setConfirmPassword}
                label="Confirm New Password"
                error={confirmPasswordError}
              />
              <div className="flex items-center mt-6 space-x-4">
                <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
