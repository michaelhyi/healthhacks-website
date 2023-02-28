import Link from "next/link";
import { useRouter } from "next/router";

//@ts-ignore
import Fade from "react-reveal/Fade";

const ChangePasswordFail = () => {
  const router = useRouter();

  return (
    <Fade delay={500} up distance="24px">
      <div className="flex flex-col items-center md:pb-16 md:pt-8 xl:pt-0 sm:pt-0 w-screen">
        <img
          className="md:w-[275px] sm:w-[200px] grayscale-[75%]"
          src="\circle1.png"
          alt="globe"
        />
        <div className="max-w-lg">
          <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
            Change Password Failure...
          </h2>
          <>
            <p className="font-normal text-base px-8 pt-2  md:text-base  sm:text-sm">
              Looks like the change password link sent to{" "}
              <strong>{router.query.email!}</strong> has expired.
              <br />
              No worries, we can send the link again.
              <br />
            </p>
          </>

          <div className="flex md:items-center sm:items-start md:flex-row sm:flex-col px-8">
            <Link
              className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto md:ml-0 sm:mx-0 my-4 rounded-xl text-sm font-medium"
              type="button"
              href="/forgot-password"
            >
              Resend Email
            </Link>
            <p className="text-left font-medium content-center md:text-base sm:text-sm sm:mx-0 md:mx-6">
              Having trouble?{" "}
              <a
                href="mailto: info@joinhealthhacks.com"
                className="text-hh-purple hover:cursor-pointer duration-500 hover:opacity-50"
              >
                Contact us.
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ChangePasswordFail;
