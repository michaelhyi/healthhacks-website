"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import ContainerApp from "../components/ContainerApp";
import NewInput from "../components/NewInput";
import { useToast } from "@chakra-ui/react";

const RegisterComponent = () => {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    if (data.password !== data.confirmPassword)
      return toast({
        title: "Failure!",
        description: "Passwords must match!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

    setIsLoading(true);

    await axios
      .post("/api/register", data)
      .then(() => {
        toast({
          title: "Success!",
          description: "You have successfully registered an account.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        signIn("credentials", {
          ...data,
          redirect: false,
        }).then(async (callback) => {
          setIsLoading(false);
          if (callback?.ok) {
            // check if user is not verified --> send email, route to verify,
            // else

            toast({
              title: "Success!",
              description: "You have successfully logged in!",
              status: "success",
              duration: 5000,
              isClosable: true,
            });

            router.push("/");
          }
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ContainerApp>
      <div className="flex flex-col items-center md:pt-16 sm:pt-8">
        <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
          <div>
            <div className="font-semibold text-3xl">
              Let&apos;s Create An Account
            </div>
            <div className="mt-2 opacity-50 text-semibold text-sm">
              {`health{hacks}`} connects diverse creators to build the next
              innovations in healthcare.
            </div>
          </div>

          <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="mt-4">
            <NewInput
              id="name"
              label="Name (First & Last)"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <NewInput
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <NewInput
              id="password"
              label="Password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="password"
            />
            <NewInput
              id="confirmPassword"
              label="Confirm Password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="password"
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
          <div className="flex flex-col gap-5 mt-8">
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex flex-row gap-2 w-full border-[1px] border-white justify-center items-center py-4 rounded-lg duration-300 hover:opacity-50 cursor-pointer font-semibold"
            >
              <FcGoogle size={24} />
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="flex flex-row gap-2 w-full border-[1px] border-white justify-center items-center py-4 rounded-lg duration-300 hover:opacity-50 cursor-pointer font-semibold"
            >
              <AiFillGithub size={24} />
              Sign in with Github
            </button>
          </div>
        </div>
      </div>
    </ContainerApp>
  );
};

export default RegisterComponent;
