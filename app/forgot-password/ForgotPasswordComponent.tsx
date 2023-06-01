"use client";

import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLeft } from "react-icons/ai";
import ContainerApp from "../components/ContainerApp";
import Input from "../components/NewInput";
import * as EmailValidator from "email-validator";
import { UserType } from "../types";
import { useRouter } from "next/navigation";

interface Props {
  user: UserType | null;
}

const ForgotPasswordComponent: React.FC<Props> = ({ user }) => {
  const toast = useToast();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  if (user) {
    toast({
      title: "User already signed in!",
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
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    if (!EmailValidator.validate(data.email)) {
      toast({
        title: "Invalid email!",
        status: "error",
        isClosable: true,
        duration: 5000,
      });
      return setSubmitting(false);
    }

    await axios
      .post("/api/forgot-password", data)
      .then(() => {
        toast({
          title: "Success!",
          description: `We have sent an email to ${data.email}. This can take a couple of minutes. Simply click the link to start your registration form. If you don&apos;t see it, make sure to also check your spam folder.`,
          status: "success",
          isClosable: true,
          duration: 5000,
        });
      })
      .catch((e) =>
        toast({
          title: e.response.data.error,
          status: "error",
          isClosable: true,
          duration: 5000,
        })
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <ContainerApp>
      {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
      <div className="flex flex-col items-center justify-center p-4 w-[100vw] h-[75vh]">
        <div className="mx-12">
          <div>
            <div className="font-bold text-3xl text-white">
              Forgot Your Password?
            </div>
            <div className="text-sm mt-4 font-medium text-white">
              Please enter the email address and we&apos;ll send you a link to
              reset your password.
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="mt-4">
            <Input
              id="email"
              label="Email"
              disabled={submitting}
              required
              register={register}
              errors={errors}
            />
            <div className="flex items-center mt-6 space-x-4">
              <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                {submitting ? <Spinner size="xs" /> : "Get New Password"}
              </button>
              <div className="text-sm font-medium text-white">
                <Link
                  href="/login"
                  className="flex flex-row justify-center items-center text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  <AiOutlineLeft />
                  &nbsp;Back to Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContainerApp>
  );
};

export default ForgotPasswordComponent;
