import ContainerApp from "@/components/ContainerApp";
import { Spinner } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//@ts-ignore
import Fade from "react-reveal/Fade";
import { useSubmitApplicationMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { closed } from "./isClosed.js";

// This page is for if the applicant chooses: I can't make the whole event. We will give them a warning that they
// can attend our event, however, if they miss most of the event, we would rather have them come next time.

const Warning = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [, submitApplication] = useSubmitApplicationMutation();

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");

      if (response) {

        // COMMENT OUT TO UNCLOSE THE APPLICATION
        if (closed) {
          router.push("/apply/closed");
        }

        setUser(JSON.parse(response));
        setFetching(false);

        if (Object.keys(router.query).length === 0) {
          router.push("/apply");
          return;
        } else if (
          router.query.form &&
          router.query.user &&
          (router.query.form!.length === 0 || router.query.user!.length === 0)
        ) {
          router.push("/apply");
          return;
        }
      } else {
        router.push("/login");
        return;
      }
    })();
  }, [router.query]);

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const user = JSON.parse(router.query.user as string);
      const form = JSON.parse(router.query.form as string);

      await submitApplication({
        userId: user!.id,
        firstName: user!.firstName,
        lastName: user!.lastName,
        email: user!.email,
        form,
      });

      router.push("/apply/success");
    } catch (e) {
      console.error(e);
    }
  };

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
              Are you sure?
            </h2>
            <p className="font-normal text-base pl-8 pt-6  md:text-base  sm:text-sm text-hh-lightgray">
              We prefer our participants to attend the whole event. We believe
              missing most of the event will be harder to be caught up with the
              fast pace of the event.
            </p>
            <p className="font-normal text-base pl-8 pt-4  md:text-base sm:text-sm text-hh-lightgray">
              If you must miss a couple of hours, please submit your
              application. Otherwise, we hope to see you next time!
            </p>
            {/* Button to submit application */}
            <button
              onClick={handleSubmit}
              className="ml-8 mr-6 mt-6 hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 mb-8 w-auto rounded-xl text-sm font-medium"
              type="button"
            >
              {submitting ? <Spinner size="xs" /> : "Submit"}
            </button>
            {/* Button to cancel application */}
            <Link
              href="/apply"
              className="mt-6 hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-black border border-white text-white px-6 py-3 mb-8 w-auto rounded-xl text-sm font-medium"
              type="button"
            >
              Cancel My Application
            </Link>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient)(Warning);
