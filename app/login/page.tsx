import Link from "next/link";
import Input from "../components/Input";

const Login = async () => {
  // const router = useRouter();
  // const [user, setUser] = await getCurrentUser();
  // const [fetching, setFetching] = useState(true);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  // const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const response = await login({ email, password });

  //   if (!response.data?.login.error) {
  //     if (!response.data?.login.user?.verified) {
  //       await resendVerificationEmail({
  //         id: response!.data!.login.user!.id,
  //         email,
  //       });

  //       router.push({
  //         pathname: "/verify",
  //         query: {
  //           id: response.data?.login.user?.id,
  //           email,
  //         },
  //       });
  //     }
  //   } else {
  //     if (response.data.login.error.field === "Email") {
  //       setEmailError(response.data.login.error.message);
  //     } else {
  //       setEmailError("");
  //     }
  //     if (response.data.login.error.field === "Password") {
  //       setPasswordError(response.data.login.error.message);
  //     } else {
  //       setPasswordError("");
  //     }
  //   }
  // });

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
          <form onSubmit={() => {}} className="mt-4">
            <Input
              value={"email"}
              setValue={() => {}}
              label="Email"
              error={"emailError"}
            />
            <Input
              value={"password"}
              setValue={() => {}}
              label="Password"
              error={"passwordError"}
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

export default Login;
