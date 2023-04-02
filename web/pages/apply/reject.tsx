import ContainerApp from "@/components/ContainerApp";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//@ts-ignore
import Fade from "react-reveal/Fade";
import { closed } from "./isClosed.js";

// This page is for if the applicant chooses: I can't make the event in person. We will automatically reject them, but
// they have a chance to change their application if they accidentally selected this.

const Reject = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) {

        // COMMENT OUT TO UNCLOSE THE APPLICATION
        if (closed) {
          router.push("/apply/closed");
        }

        if (Object.keys(router.query).length === 0) {
          router.push("/apply");
          return;
        } else {
          try {
            const form = JSON.parse(router.query.form as string);
            if (form.inPerson === "Yes") {
              router.push("/apply");
              return;
            }
          } catch (e) {
            router.push("/apply");
            return;
          }
        }
        setUser(JSON.parse(response));
        setFetching(false);
      } else {
        router.push("/login");
        return;
      }
    })();
  }, [router.query]);

  if (fetching) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center md:pb-8 md:pt-8 xl:pt-16 sm:pt-16 w-screen h-[100%]">
          <div className="max-w-md align-middle">
            <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
              Sorry, we hope to see you next time.
            </h2>
            <p className="font-normal text-base px-8 pt-6  md:text-base  sm:text-sm text-hh-lightgray">
              We need all of our participants to be in-person. We currently do
              not have the bandwith to facilitate a hybrid event.
            </p>
            <p className="font-normal text-base pl-8 pt-4  md:text-base sm:text-sm text-hh-lightgray">
              If this is an error, please go back to fix your application!
            </p>
            {/* Button to go back to application */}
            <button
              onClick={() => router.push("/apply")}
              className="mx-8 mt-6 hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 mb-8 w-auto rounded-xl text-sm font-medium"
              type="button"
            >
              Go Back to Application
            </button>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default Reject;
