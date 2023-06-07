"use client";

import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ContainerApp from "../../components/ContainerApp";
import Input from "../../components/NewInput";
import { UserType } from "../../types";
import { sleep } from "../../utils/sleep";
import ChangePasswordFail from "./ChangePasswordFail";

interface Props {
  token?: string;
  tokenValidity: {
    success: boolean;
    error?: string | null;
    email?: string | null;
  };
  user: UserType | null;
}

const ChangePasswordComponent: React.FC<Props> = ({
  tokenValidity,
  token,
  user,
}) => {
  const toast = useToast();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  if (user) {
    toast({
      title: "You are already signed in!",
      duration: 3000,
      isClosable: true,
    });
    router.push("/");
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    if (data.password !== data.confirmPassword) {
      setSubmitting(false);
      return toast({
        title: "Passwords must match!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    await axios
      .post("/api/change-password", { token, password: data.password })
      .then(() => {
        toast({
          title: "Success!",
          description:
            "Your password has been successfully changed! You will now be redirected to our login form.",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
      })
      .catch()
      .finally(async () => {
        setSubmitting(false);
        await sleep(3000);
        router.push("/login");
      });
  };

  if (!tokenValidity.success) {
    return (
      <ContainerApp>
        <ChangePasswordFail />
      </ContainerApp>
    );
  }

  return (
    <ContainerApp>
      {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
      <div className="flex flex-col items-center justify-center p-4 w-[100vw] h-[75vh]">
        <div className="mx-12 lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
          <div>
            <div className="font-bold text-3xl text-white">Change Password</div>
            <div className="text-sm mt-4 font-medium text-white">
              Enter a new password for
              {/* NOTE: Added email prop here to be displayed in change password form */}
              <span className="text-hh-purple text-medium">
                {" "}
                {tokenValidity.email as string}.
              </span>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="mt-4">
            <Input
              id="password"
              label="Password"
              type="password"
              disabled={submitting}
              register={register}
              required
              errors={errors}
            />
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              disabled={submitting}
              register={register}
              required
              errors={errors}
            />
            <div className="flex items-center mt-6 space-x-4">
              <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                {submitting ? <Spinner size="xs" /> : "Change Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContainerApp>
  );
};

export default ChangePasswordComponent;
