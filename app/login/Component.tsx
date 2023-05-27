"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import NewInput from "../components/NewInput";

const LoginComponent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then(async (callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        // check if user is not verified --> send email, route to verify,
        // else
        toast.success("Logged In!");
        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className="flex flex-row h-[100vh] justify-center bg-black font-inter">
      <div className=" flex w-0 lg:w-1/2 md:m-0 bg-[url('/loginheader1.png')] bg-cover items-center justify-center invisible lg:visible bg-center" />
      {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
      <div className="flex flex-col items-center lg:items-start justify-center p-4 w-[100vw] lg:w-1/2">
        <div className="mx-12">
          <div>
            <div className="font-bold text-3xl text-white">
              Welcome to {`health{hacks}`}
            </div>
            <div className="text-sm mt-4 font-medium text-white">
              Don&apos;t have an account?&nbsp;
              <Link
                href="/register"
                className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
              >
                Register
              </Link>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(onSubmit)(e);
            }}
            className="mt-4"
          >
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
              type="password"
              required
            />
            <div className="flex items-center mt-6 space-x-4">
              <button className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-4 py-2 rounded-xl text-sm font-semibold">
                Login
              </button>
              <div className="text-sm font-medium text-white">
                Forgot Password?&nbsp;
                <Link
                  href="/forgot-password"
                  className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
                >
                  Click here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
